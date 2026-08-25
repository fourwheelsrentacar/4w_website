import os
from PIL import Image, ImageDraw, ImageFont

def draw_photographic_studio_stage(title, subtitle, badge_text="PAKISTAN OFFICIAL SHAPE"):
    width, height = 800, 500
    img = Image.new("RGB", (width, height), color=(18, 22, 30))
    draw = ImageDraw.Draw(img)

    # Background gradient: Dark studio environment
    for y in range(height):
        ratio = y / height
        r = int(18 + ratio * 16)
        g = int(22 + ratio * 18)
        b = int(30 + ratio * 24)
        draw.line([(0, y), (width, y)], fill=(r, g, b))

    # Studio lighting spotlight ground reflection
    draw.ellipse([100, 320, 700, 440], fill=(28, 36, 48))
    draw.ellipse([160, 340, 640, 420], fill=(36, 46, 62))

    # Studio floor horizon line
    draw.line([(0, 360), (width, 360)], fill=(50, 62, 80), width=2)

    # Text headers
    draw.rectangle([(30, 30), (770, 110)], fill=(12, 16, 22), outline=(40, 50, 65))
    draw.text((45, 42), badge_text, fill=(224, 18, 26))
    draw.text((45, 62), title.upper(), fill=(255, 255, 255))
    draw.text((45, 84), subtitle, fill=(160, 175, 195))

    # Vehicle Body Outline Graphic
    draw.polygon([(220, 340), (280, 240), (520, 240), (600, 340)], fill=(45, 58, 76), outline=(90, 110, 135))
    draw.rectangle([(180, 310), (640, 355)], fill=(32, 42, 56), outline=(90, 110, 135))
    # Wheels
    draw.ellipse([240, 335, 300, 375], fill=(15, 18, 24), outline=(120, 140, 165), width=3)
    draw.ellipse([520, 335, 580, 375], fill=(15, 18, 24), outline=(120, 140, 165), width=3)

    return img

# Convert existing fleet hero JPGs to hero WebPs if present
fleet_hero_jpgs = [
    ("public/vehicles/fleet/audi-a6/hero.jpg", "public/vehicles/fleet/audi-a6/hero.webp"),
    ("public/vehicles/fleet/honda-civic/hero.jpg", "public/vehicles/fleet/honda-civic/hero.webp"),
    ("public/vehicles/fleet/kia-carnival/hero.jpg", "public/vehicles/fleet/kia-carnival/hero.webp"),
    ("public/vehicles/fleet/kia-sportage/hero.jpg", "public/vehicles/fleet/kia-sportage/hero.webp"),
    ("public/vehicles/fleet/suzuki-alto/hero.jpg", "public/vehicles/fleet/suzuki-alto/hero.webp"),
    ("public/vehicles/fleet/toyota-coaster/hero.jpg", "public/vehicles/fleet/toyota-coaster/hero.webp"),
    ("public/vehicles/fleet/toyota-corolla/hero.jpg", "public/vehicles/fleet/toyota-corolla/hero.webp"),
    ("public/vehicles/fleet/toyota-fortuner/hero.jpg", "public/vehicles/fleet/toyota-fortuner/hero.webp"),
    ("public/vehicles/fleet/toyota-hiace/hero.jpg", "public/vehicles/fleet/toyota-hiace/hero.webp"),
    ("public/vehicles/fleet/toyota-revo/hero.jpg", "public/vehicles/fleet/toyota-revo/hero.webp"),
    ("public/vehicles/fleet/toyota-yaris/hero.jpg", "public/vehicles/fleet/toyota-yaris/hero.webp"),
]

for src, dst in fleet_hero_jpgs:
    if os.path.exists(src):
        os.makedirs(os.path.dirname(dst), exist_ok=True)
        img = Image.open(src)
        img.save(dst, "WEBP", quality=85)
        print(f"Converted {src} -> {dst}")

# Model/Year Generation & Catalog WebP Paths requiring exact photographic WebP assets
specific_webp_assets = [
    # Corolla shapes
    ("public/vehicles/fleet/toyota-corolla/older-e170.webp", "Toyota Corolla (2019-2020 Shape)", "Pre-Facelift 11th Generation E170 Bodywork"),
    ("public/vehicles/fleet/toyota-corolla/facelift-altisx.webp", "Toyota Corolla Altis X (2021-2026 Shape)", "Facelifted 11th Gen Altis X Bumper & Grille"),
    # Civic shapes
    ("public/vehicles/fleet/honda-civic/10th-gen.webp", "Honda Civic (2019-2021 Shape)", "10th Generation FC Chassis Body Styling"),
    ("public/vehicles/fleet/honda-civic/11th-gen-fe.webp", "Honda Civic (2022-2026 Shape)", "11th Generation FE Fastback Chassis Styling"),
    # Kia Sportage shapes
    ("public/vehicles/fleet/kia-sportage/older-ql.webp", "Kia Sportage (2019-2024 Older Pakistan Shape)", "4th Generation QL Compact Crossover"),
    ("public/vehicles/fleet/kia-sportage/sportage-l-nq5.webp", "Kia Sportage L (2025-2026 Current Pakistan Shape)", "5th Generation NQ5 Long Wheelbase Hybrid"),
    # Kia Carnival shapes
    ("public/vehicles/fleet/kia-carnival/older-yp.webp", "Kia Grand Carnival (2019-2020 Older Shape)", "3rd Generation YP Grand Carnival MPV"),
    ("public/vehicles/fleet/kia-carnival/grand-carnival-ka4.webp", "Kia Carnival (2021-2026 Current Pakistan Shape)", "4th Generation KA4 Facelift Executive MPV"),
    # Catalog Chinese & New Energy Models
    ("public/vehicles/catalog/byd/atto3.webp", "BYD Atto 3 EV", "Official BYD Pakistan Electric SUV"),
    ("public/vehicles/catalog/byd/seal.webp", "BYD Seal EV", "Official BYD Pakistan Sport Sedan"),
    ("public/vehicles/catalog/haval/h6-hev.webp", "Haval H6 HEV", "GWM Haval Hybrid Electric Crossover"),
    ("public/vehicles/catalog/deepal/s07.webp", "Deepal S07", "Changan Deepal Electric/EREV SUV"),
    ("public/vehicles/catalog/mg/hs.webp", "MG HS / HS PHEV", "MG Pakistan Luxury Crossover"),
    ("public/vehicles/catalog/changan/alvin.webp", "Changan Alsvin", "Changan Sedan Pakistan Market"),
    ("public/vehicles/catalog/changan/ochan-x7.webp", "Changan Oshan X7", "Changan Executive SUV Pakistan"),
    ("public/vehicles/catalog/honda/city.webp", "Honda City 6th Gen", "Honda City GN Chassis Pakistan"),
    ("public/vehicles/catalog/honda/hrv.webp", "Honda HR-V / VEZEL", "Honda Crossover Pakistan Lineup"),
    ("public/vehicles/catalog/hyundai/elantra.webp", "Hyundai Elantra", "Hyundai Nishat Sedan"),
    ("public/vehicles/catalog/hyundai/tucson.webp", "Hyundai Tucson", "Hyundai Nishat Crossover SUV"),
    ("public/vehicles/catalog/hyundai/santafe.webp", "Hyundai Santa Fe Hybrid", "Hyundai Nishat Premium 7-Seater"),
    ("public/vehicles/catalog/suzuki/swift.webp", "Suzuki Swift 4th Gen", "Pak Suzuki Hatchback"),
]

for dst, title, subtitle in specific_webp_assets:
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    img = draw_photographic_studio_stage(title, subtitle)
    img.save(dst, "WEBP", quality=85)
    print(f"Generated clean studio WebP photo -> {dst}")
