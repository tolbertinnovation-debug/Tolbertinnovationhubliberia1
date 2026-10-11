"""Publish tested app installers from pinned build artifacts and retain public copies."""
import hashlib
import io
import json
import os
from pathlib import Path
import urllib.error
import urllib.parse
import urllib.request
import zipfile

INSTALLERS = [{"artifact":11704901300,"archive_sha":"2c6a3edd439a9ab2658cc282d1d1a7f3b1da8b0857e8663d450c18d91b21e543","entry":"TIH-Learning-Desktop-0.23.0-Windows-x64.exe","name":"TIH-Learning-Desktop-0.23.0-Windows-x64.exe","manifest":"windows-0.23.0.json","version":"0.23.0"},{"artifact":11707518257,"archive_sha":"14a1be819686901778edaef85c1357dbc34808b3cca7b30edbdd365df0195a01","entry":"app-store.apk","name":"TIH-Learning-Android-0.3.40-preview.apk","manifest":"android-0.3.40.json","version":"0.3.40"}]
PUBLIC = 'https://tolbertinnovationhub.org/downloads/'

class PublicRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        redirected = super().redirect_request(req, fp, code, msg, headers, newurl)
        if urllib.parse.urlparse(req.full_url).netloc != urllib.parse.urlparse(newurl).netloc:
            redirected.remove_header('Authorization')
        return redirected

def fetch(url, token=None):
    headers = {'User-Agent': 'TIH-Pages-Downloads'}
    if token:
        headers['Authorization'] = 'Bearer ' + token
    with urllib.request.build_opener(PublicRedirect()).open(urllib.request.Request(url, headers=headers), timeout=180) as response:
        return response.read()

def prepare(item):
    try:
        archive = fetch('https://api.github.com/repos/' + os.environ['GITHUB_REPOSITORY'] + '/actions/artifacts/' + str(item['artifact']) + '/zip', os.environ['GH_TOKEN'])
        if hashlib.sha256(archive).hexdigest() != item['archive_sha']:
            raise ValueError('Installer artifact checksum mismatch')
        with zipfile.ZipFile(io.BytesIO(archive)) as bundle:
            content = bundle.read(item['entry'])
    except urllib.error.HTTPError as error:
        if error.code not in (404, 410):
            raise
        manifest = json.loads(fetch(PUBLIC + item['manifest']))
        content = fetch(PUBLIC + item['name'])
        if manifest['artifact_sha256'] != item['archive_sha'] or hashlib.sha256(content).hexdigest() != manifest['sha256']:
            raise ValueError('Previously published installer checksum mismatch')
    if item['name'].endswith('.exe'):
        if content[:2] != b'MZ' or len(content) < 100_000_000:
            raise ValueError('Invalid Windows installer')
    else:
        with zipfile.ZipFile(io.BytesIO(content)) as apk:
            if 'AndroidManifest.xml' not in apk.namelist():
                raise ValueError('Invalid Android APK')
    target = Path('downloads')
    target.mkdir(exist_ok=True)
    (target / item['name']).write_bytes(content)
    (target / item['manifest']).write_text(json.dumps({'filename': item['name'], 'version': item['version'], 'size': len(content), 'sha256': hashlib.sha256(content).hexdigest(), 'artifact_sha256': item['archive_sha']}))
    print('Prepared tested app installer:', item['name'], len(content), 'bytes')

if __name__ == '__main__':
    policy = json.loads(Path('app-updates.json').read_text())
    if policy.get('schema') != 1:
        raise ValueError('Invalid app update policy')
    for installer in INSTALLERS:
        platform = 'windows' if installer['name'].endswith('.exe') else 'android'
        if policy[platform]['latest'] != installer['version']:
            raise ValueError('Update policy does not match the published installer')
        prepare(installer)
