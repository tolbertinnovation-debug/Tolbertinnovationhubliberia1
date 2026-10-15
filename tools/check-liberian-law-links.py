"""Check assigned readings and YouTube metadata; does not claim full playback QA."""
import argparse
import concurrent.futures
import datetime
import json
import time
import urllib.parse
import urllib.request
from pathlib import Path

parser = argparse.ArgumentParser()
parser.add_argument('--course', choices=['liberian-law','advanced-liberian-law'], default='liberian-law')
path = Path('content/' + parser.parse_args().course + '-sources.json')
data = json.loads(path.read_text())
checked = datetime.date.today().isoformat()

def fetch(url):
    for attempt in range(3):
        try:
            request = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 TIH-Learning-Source-Check'})
            with urllib.request.urlopen(request, timeout=35) as response:
                return response.status, response.read() if '/oembed?' in url else b''
        except Exception:
            if attempt == 2:
                raise
            time.sleep(1)

def video(item):
    url = 'https://www.youtube.com/oembed?url=' + urllib.parse.quote(item['url'], safe='') + '&format=json'
    status, body = fetch(url)
    meta = json.loads(body)
    return item['url'], dict(title=meta['title'], channel=meta['author_name'], metadataChecked=checked), status

def reading(item):
    key, (_, url) = item
    status, _ = fetch(url)
    return key, dict(url=url, httpStatus=status, checked=checked)

errors=[]
with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
    futures={pool.submit(video,item):('video',item['url']) for item in data['videos']}
    futures.update({pool.submit(reading,item):('reading',item[0]) for item in data['sources'].items()})
    videos={item['url']:item for item in data['videos']}
    checks={}
    for future in concurrent.futures.as_completed(futures):
        kind,key=futures[future]
        try:
            result=future.result()
            if kind=='video':videos[result[0]].update(result[1])
            else:checks[result[0]]=result[1]
        except Exception as error:errors.append(dict(kind=kind,item=key,error=str(error)))
data['linkChecks']=checks
path.write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n')
print(json.dumps(dict(videoLinks=len(data['videos']),readingLinks=len(data['sources']),errors=errors)))
raise SystemExit(bool(errors))
