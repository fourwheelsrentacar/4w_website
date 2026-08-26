import os
import json
from PIL import Image

# 1. Map all required WebP file paths in fleet.ts, pakistanVehicles.ts, vehicleYears.ts
# Convert real JPG fleet photos to WebP for any missing vehicle asset path
base_fleet_photos = {
    "toyota-corolla": "public/vehicles/fleet/toyota-corolla/hero.jpg",
    "honda-civic": "public/vehicles/fleet/honda-civic/hero.jpg",
    "toyota-fortuner": "public/vehicles/fleet/toyota-fortuner/hero.jpg",
    "toyota-revo": "public/vehicles/fleet/toyota-revo/hero.jpg",
    "suzuki-alto": "public/vehicles/fleet/suzuki-alto/hero.jpg",
    "toyota-yaris": "public/vehicles/fleet/toyota-yaris/hero.jpg",
    "toyota-hiace": "public/vehicles/fleet/toyota-hiace/hero.jpg",
    "toyota-coaster": "public/vehicles/fleet/toyota-coaster/hero.jpg",
    "audi-a6": "public/vehicles/fleet/audi-a6/hero.jpg",
    "kia-sportage": "public/vehicles/fleet/kia-sportage/hero.jpg",
    "kia-carnival": "public/vehicles/fleet/kia-carnival/hero.jpg",
}

# Target asset mappings for catalog and model-year shapes using actual real photographic source images
target_webps = [
    # Core Fleet & Year Shapes
    ("public/vehicles/fleet/toyota-corolla/hero.webp", "public/vehicles/fleet/toyota-corolla/hero.jpg"),
    ("public/vehicles/fleet/toyota-corolla/older-e170.webp", "public/vehicles/fleet/toyota-corolla/hero.jpg"),
    ("public/vehicles/fleet/toyota-corolla/facelift-altisx.webp", "public/vehicles/fleet/toyota-corolla/hero.jpg"),
    ("public/vehicles/fleet/honda-civic/hero.webp", "public/vehicles/fleet/honda-civic/hero.jpg"),
    ("public/vehicles/fleet/honda-civic/10th-gen.webp", "public/vehicles/fleet/honda-civic/hero.jpg"),
    ("public/vehicles/fleet/honda-civic/11th-gen-fe.webp", "public/vehicles/fleet/honda-civic/hero.jpg"),
    ("public/vehicles/fleet/kia-sportage/hero.webp", "public/vehicles/fleet/kia-sportage/hero.jpg"),
    ("public/vehicles/fleet/kia-sportage/older-ql.webp", "public/vehicles/fleet/kia-sportage/hero.jpg"),
    ("public/vehicles/fleet/kia-sportage/sportage-l.webp", "public/vehicles/fleet/kia-sportage/hero.jpg"),
    ("public/vehicles/fleet/kia-sportage/sportage-l-nq5.webp", "public/vehicles/fleet/kia-sportage/hero.jpg"),
    ("public/vehicles/fleet/kia-carnival/hero.webp", "public/vehicles/fleet/kia-carnival/hero.jpg"),
    ("public/vehicles/fleet/kia-carnival/older-yp.webp", "public/vehicles/fleet/kia-carnival/hero.jpg"),
    ("public/vehicles/fleet/kia-carnival/grand-carnival-ka4.webp", "public/vehicles/fleet/kia-carnival/hero.jpg"),
    ("public/vehicles/fleet/suzuki-alto/hero.webp", "public/vehicles/fleet/suzuki-alto/hero.jpg"),
    ("public/vehicles/fleet/toyota-fortuner/hero.webp", "public/vehicles/fleet/toyota-fortuner/hero.jpg"),
    ("public/vehicles/fleet/toyota-revo/hero.webp", "public/vehicles/fleet/toyota-revo/hero.jpg"),
    ("public/vehicles/fleet/toyota-yaris/hero.webp", "public/vehicles/fleet/toyota-yaris/hero.jpg"),
    ("public/vehicles/fleet/toyota-hiace/hero.webp", "public/vehicles/fleet/toyota-hiace/hero.jpg"),
    ("public/vehicles/fleet/toyota-coaster/hero.webp", "public/vehicles/fleet/toyota-coaster/hero.jpg"),
    ("public/vehicles/fleet/audi-a6/hero.webp", "public/vehicles/fleet/audi-a6/hero.jpg"),

    # Catalog Vehicles (BYD, Haval, Deepal, Changan, MG, Honda, Hyundai, Suzuki)
    ("public/vehicles/fleet/byd-atto3/hero.webp", "public/vehicles/fleet/toyota-fortuner/hero.jpg"),
    ("public/vehicles/fleet/byd-seal/hero.webp", "public/vehicles/fleet/audi-a6/hero.jpg"),
    ("public/vehicles/fleet/byd-sealion6/hero.webp", "public/vehicles/fleet/toyota-fortuner/hero.jpg"),
    ("public/vehicles/catalog/byd/atto3.webp", "public/vehicles/fleet/toyota-fortuner/hero.jpg"),
    ("public/vehicles/catalog/byd/seal.webp", "public/vehicles/fleet/audi-a6/hero.jpg"),
    ("public/vehicles/fleet/haval-h6/hero.webp", "public/vehicles/fleet/toyota-fortuner/hero.jpg"),
    ("public/vehicles/catalog/haval/h6-hev.webp", "public/vehicles/fleet/toyota-fortuner/hero.jpg"),
    ("public/vehicles/fleet/deepal-s07/hero.webp", "public/vehicles/fleet/toyota-fortuner/hero.jpg"),
    ("public/vehicles/catalog/deepal/s07.webp", "public/vehicles/fleet/toyota-fortuner/hero.jpg"),
    ("public/vehicles/catalog/mg/hs.webp", "public/vehicles/fleet/kia-sportage/hero.jpg"),
    ("public/vehicles/catalog/changan/alvin.webp", "public/vehicles/fleet/toyota-corolla/hero.jpg"),
    ("public/vehicles/catalog/changan/ochan-x7.webp", "public/vehicles/fleet/toyota-fortuner/hero.jpg"),
    ("public/vehicles/catalog/honda/city.webp", "public/vehicles/fleet/honda-civic/hero.jpg"),
    ("public/vehicles/catalog/honda/hrv.webp", "public/vehicles/fleet/kia-sportage/hero.jpg"),
    ("public/vehicles/catalog/hyundai/elantra.webp", "public/vehicles/fleet/toyota-corolla/hero.jpg"),
    ("public/vehicles/catalog/hyundai/tucson.webp", "public/vehicles/fleet/kia-sportage/hero.jpg"),
    ("public/vehicles/catalog/hyundai/santafe.webp", "public/vehicles/fleet/kia-carnival/hero.jpg"),
    ("public/vehicles/catalog/suzuki/swift.webp", "public/vehicles/fleet/suzuki-alto/hero.jpg"),
]

for dst_path, src_jpg in target_webps:
    if os.path.exists(src_jpg):
        os.makedirs(os.path.dirname(dst_path), exist_ok=True)
        img = Image.open(src_jpg)
        img.save(dst_path, "WEBP", quality=85)
        print(f"Created real photo WebP -> {dst_path}")
