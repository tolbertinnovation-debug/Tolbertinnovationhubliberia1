"""Publish the tested Windows installer; preserve it across later Pages deploys."""
import hashlib
import io
import json
import os
from pathlib import Path
import urllib.request
import zipfile

NAME = 'TIH-Learning-Desktop-0.19.0-Windows-x64.exe'
ARCHIVE_SHA = '0487b5b731ef3d133d072bc53968857cdb5cdc764d8dc7f8a94444335a85294e'
PUBLIC = 'https://tolbertinnovationhub.org/downloads/'

def fetch(url, token=None):
    headers = {'User-Agent': 'TIH-Pages-Downloads'}
    if token:
        headers['Authorization'] = 'Bearer ' + token
    with urllib.request.urlopen(urllib.request.Request(url, headers=headers), timeout=180) as response:
        return response.read()

def main():
    try:
        archive = fetch('https://api.github.com/repos/' + os.environ['GITHUB_REPOSITORY'] + '/actions/artifacts/11501583393/zip', os.environ['GH_TOKEN'])
        if hashlib.sha256(archive).hexdigest() != ARCHIVE_SHA:
            raise ValueError('Installer artifact checksum mismatch')
        with zipfile.ZipFile(io.BytesIO(archive)) as bundle:
            executable = bundle.read(NAME)
    except urllib.error.HTTPError as error:
        if error.code not in (404, 410):
            raise
        # Actions artifacts expire; the previously deployed installer remains public.
        manifest = json.loads(fetch(PUBLIC + 'windows-0.19.0.json'))
        executable = fetch(PUBLIC + NAME)
        if manifest['artifact_sha256'] != ARCHIVE_SHA or hashlib.sha256(executable).hexdigest() != manifest['sha256']:
            raise ValueError('Previously published installer checksum mismatch')
    if executable[:2] != b'MZ' or len(executable) < 100_000_000:
        raise ValueError('Invalid Windows installer')
    target = Path('downloads')
    target.mkdir(exist_ok=True)
    (target / NAME).write_bytes(executable)
    (target / 'windows-0.19.0.json').write_text(json.dumps({'filename': NAME, 'version': '0.19.0', 'size': len(executable), 'sha256': hashlib.sha256(executable).hexdigest(), 'artifact_sha256': ARCHIVE_SHA}))
    print('Prepared tested Windows installer:', NAME, len(executable), 'bytes')

if __name__ == '__main__':
    main()
