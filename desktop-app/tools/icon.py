from pathlib import Path
from PIL import Image

folder = Path(__file__).resolve().parents[1]
(folder / 'build').mkdir(parents=True, exist_ok=True)
# Use the APK learning logo for the app window and all Windows icon sizes.
logo = Image.open(folder / 'src/content/logo.webp').convert('RGBA')
logo.resize((512, 512), Image.Resampling.LANCZOS).save(folder / 'src/content/logo.png')
logo.save(folder / 'build/icon.ico', sizes=[(16,16),(32,32),(48,48),(64,64),(128,128),(256,256)])
