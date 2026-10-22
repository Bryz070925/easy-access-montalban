# Builds the app icons (Android sources in assets/ and web icons in www/icons/)
# from the Montalban logo photo. Usage: python3 scripts/make-icons.py <logo.jpg> <workdir with seal-hd.png>
import sys
from PIL import Image, ImageDraw, ImageFilter
SRC, S = sys.argv[1], sys.argv[2]
im = Image.open(SRC).convert('RGB')
seal = Image.open(S + '/seal-hd.png'); w, h = seal.size

def background(size):
    sky = im.crop((0, 0, 600, 62)).resize((size, int(size * .80)), Image.LANCZOS).filter(ImageFilter.GaussianBlur(size / 60))
    land = im.crop((0, 500, 600, 600)).resize((size, int(size * .42)), Image.LANCZOS).filter(ImageFilter.GaussianBlur(size / 260))
    c = Image.new('RGB', (size, size)); c.paste(sky, (0, 0))
    grad = Image.linear_gradient('L').resize((size, land.height)).point(lambda v: min(255, int(v * 1.6)))
    c.paste(land, (0, size - land.height), grad)
    return c.convert('RGBA')

def seal_layer(size, frac):
    sh = int(size * frac); sw = int(sh * w / h)
    s = seal.resize((sw, sh), Image.LANCZOS)
    L = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    sha = Image.new('RGBA', (size, size), (0, 0, 0, 0)); a = s.split()[3].point(lambda v: int(v * .35))
    blk = Image.new('RGBA', s.size, (0, 30, 10, 255)); blk.putalpha(a)
    sha.alpha_composite(blk, ((size - sw) // 2, (size - sh) // 2 + int(size * .012)))
    L.alpha_composite(sha.filter(ImageFilter.GaussianBlur(size / 90))); L.alpha_composite(s, ((size - sw) // 2, (size - sh) // 2))
    return L

def icon(size, frac):
    c = background(size); c.alpha_composite(seal_layer(size, frac)); return c.convert('RGB')

icon(1024, .86).save('assets/icon-only.png')
seal_layer(1024, .86).save('assets/icon-foreground.png')
background(1024).convert('RGB').save('assets/icon-background.png')
icon(512, .74).save('www/icons/icon-512.png', optimize=True)
icon(192, .74).save('www/icons/icon-192.png', optimize=True)
icon(512, .62).save('www/icons/maskable-512.png', optimize=True)
icon(180, .74).save('www/icons/apple-touch-icon.png', optimize=True)

ic = Image.open('assets/icon-only.png').resize((300, 300))
cv = Image.new('RGB', (3 * 220 + 20 + 200, 220), '#e9eef0')
for i, sh in enumerate(['circle', 'squircle', 'square']):
    c = ic.crop((50, 50, 250, 250)); m = Image.new('L', c.size, 0); d = ImageDraw.Draw(m)
    if sh == 'circle': d.ellipse((0, 0, 199, 199), fill=255)
    else: d.rounded_rectangle((0, 0, 199, 199), radius=60 if sh == 'squircle' else 22, fill=255)
    cv.paste(c, (10 + i * 220, 10), m)
cv.paste(Image.open('www/icons/icon-192.png').resize((200, 200)), (10 + 3 * 220, 10))
cv.save(S + '/icon-preview.png')
