"""Validate actual release APK packaging, SDK identity and native ELF alignment."""
import json, os, pathlib, struct, subprocess, zipfile

root = pathlib.Path(__file__).resolve().parents[1]
sdk = pathlib.Path(os.environ['ANDROID_HOME'])
build_tools = sorted((sdk / 'build-tools').iterdir(), key=lambda p: tuple(int(x) for x in p.name.split('.') if x.isdigit()))[-1]
apk = root / 'app/build/outputs/apk/release/app-release-unsigned.apk'
bundle = root / 'app/build/outputs/bundle/release/app-release.aab'
assert apk.is_file() and bundle.is_file(), 'Release outputs are missing'
badging = subprocess.check_output([str(build_tools / 'aapt2'), 'dump', 'badging', str(apk)], text=True)
assert "targetSdkVersion:'36'" in badging, 'Release does not target API 36'
assert 'application-debuggable' not in badging, 'Release must not be debuggable'
assert ".preview'" not in badging, 'Release must not use the preview identity'
subprocess.run([str(build_tools / 'zipalign'), '-c', '-P', '16', '4', str(apk)], check=True)
native = []
with zipfile.ZipFile(apk) as archive:
    assert archive.testzip() is None
    assert len(json.loads(archive.read('assets/learning/catalog.json'))) == 57
    assert json.loads(archive.read('assets/learning/organization.json'))['email'] == 'info@tolbertinnovationhub.org'
    for name in archive.namelist():
        if not name.endswith('.so') or not any(abi in name for abi in ('arm64-v8a', 'x86_64')):
            continue
        data = archive.read(name)
        assert data[:4] == b'\x7fELF' and data[4] == 2 and data[5] == 1, name
        phoff = struct.unpack_from('<Q', data, 32)[0]
        phentsize, phnum = struct.unpack_from('<HH', data, 54)
        alignments = []
        for index in range(phnum):
            offset = phoff + phentsize * index
            if struct.unpack_from('<I', data, offset)[0] == 1:
                alignment = struct.unpack_from('<Q', data, offset + 48)[0]
                assert alignment >= 16384, f'{name} requires rebuilding for 16 KB pages'
                alignments.append(alignment)
        assert alignments, name
        native.append({'library': name, 'loadSegmentAlignments': alignments})
result = {'targetSdk': 36, 'debuggable': False, 'courses': 57, 'apkZipAligned16KB': True,
          'nativeLibraries': native, 'bundleBytes': bundle.stat().st_size, 'signing': 'unsigned-owner-signing-required'}
report = root / 'app/build/reports/release-validation.json'
report.parent.mkdir(parents=True, exist_ok=True)
report.write_text(json.dumps(result, indent=2) + '\n')
print(json.dumps(result, indent=2))
