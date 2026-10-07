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

INSTALLERS = [{"artifact":11512780102,"archive_sha":"8f43548c8026956e80d771b476ce2dad04161e3a8214a1cdf43131e57ec9b73b","entry":"TIH-Learning-Desktop-0.20.0-Windows-x64.exe","name":"TIH-Learning-Desktop-0.20.0-Windows-x64.exe","manifest":"windows-0.20.0.json","version":"0.20.0"},{"artifact":11512302078,"archive_sha":"7d668490555e4713934d7a38b9c4fc72b33721ff437c620d8ef0ec9437547e57","entry":"app-debug.apk","name":"TIH-Learning-Android-0.3.36-preview.apk","manifest":"android-0.3.36.json","version":"0.3.36"}]
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
    for installer in INSTALLERS:
        prepare(installer)
