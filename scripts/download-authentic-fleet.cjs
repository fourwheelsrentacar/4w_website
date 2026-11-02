const crypto = require('crypto');
const fs = require('fs');
const sharp = require('sharp');

function getWikiUrl(filename) {
  const clean = filename.replace(/ /g, '_');
  const md5 = crypto.createHash('md5').update(clean).digest('hex');
  const a = md5[0];
  const b = md5.substring(0, 2);
  return `https://upload.wikimedia.org/wikipedia/commons/${a}/${b}/${encodeURIComponent(clean)}`;
}

const WIKI_CANDIDATES = [
  // 10th Gen Civic (FC)
  { target: 'public/vehicles/fleet/honda-civic/10th-gen.webp', names: [
    '2018_Honda_Civic_SR_VTEC_1.0_Front.jpg',
    '2017_Honda_Civic_EX_VTEC_Turbo_1.0_Front.jpg',
    '2016_Honda_Civic_LX_sedan_front.jpg',
    'Honda_Civic_sedan_(tenth_generation)_front.jpg'
  ]},
  // Corolla E170 Pre-facelift
  { target: 'public/vehicles/fleet/toyota-corolla/older-e170.webp', names: [
    '2015_Toyota_Corolla_Altis_1.8G_front.jpg',
    '2014_Toyota_Corolla_(ZRE172R)_Ascent_sedan_(2015-07-03)_01.jpg',
    '2016_Toyota_Corolla_LE_front.jpg'
  ]},
  // Kia Sportage QL 4th Gen
  { target: 'public/vehicles/fleet/kia-sportage/older-ql.webp', names: [
    '2018_Kia_Sportage_GT-Line_ISG_1.6_Front.jpg',
    '2016_Kia_Sportage_ISG_1.6_Front.jpg',
    '2017_Kia_Sportage_EX_AWD_front_3.12.18.jpg'
  ]},
  // Kia Carnival YP 3rd Gen
  { target: 'public/vehicles/fleet/kia-carnival/older-yp.webp', names: [
    '2016_Kia_Carnival_(YP)_Si_wagon_(2018-10-01)_01.jpg',
    '2015_Kia_Carnival_(YP)_Platinum_wagon_(2015-11-11)_01.jpg',
    '2018_Kia_Sedona_SX_front_3.18.18.jpg'
  ]},
  // Suzuki Swift
  { target: 'public/vehicles/fleet/suzuki-swift/hero.webp', names: [
    '2018_Suzuki_Swift_SZ5_Boosterjet_SHVS_1.0_Front.jpg',
    '2017_Suzuki_Swift_GLX_1.0_Front.jpg'
  ]},
  // Jetour T2
  { target: 'public/vehicles/catalog/jetour/t2.webp', names: [
    'Jetour_Traveler_001.jpg',
    'Jetour_T2_001.jpg'
  ]},
  // Jaecoo J7
  { target: 'public/vehicles/catalog/jaecoo/j7.webp', names: [
    'Jaecoo_7_001.jpg',
    'Jaecoo_J7_001.jpg'
  ]},
  // Omoda E5 / 5
  { target: 'public/vehicles/catalog/omoda/e5.webp', names: [
    'Omoda_C5_001.jpg',
    'Omoda_5_001.jpg',
    'Chery_Omoda_5_001.jpg'
  ]},
  // Aion ES
  { target: 'public/vehicles/catalog/aion/es.webp', names: [
    'Aion_S_Plus_001.jpg',
    'GAC_Aion_S_001.jpg'
  ]},
  // BYD Sealion 7
  { target: 'public/vehicles/fleet/byd-sealion7/hero.webp', names: [
    'BYD_Sea_Lion_07_001.jpg',
    'BYD_Sealion_7_001.jpg'
  ]},
  // Yutong Bus
  { target: 'public/vehicles/catalog/yutong/bus.webp', names: [
    'Yutong_ZK6122H_bus_front.jpg',
    'Yutong_bus_001.jpg'
  ]},
  // Daewoo Bus
  { target: 'public/vehicles/catalog/daewoo/bus.webp', names: [
    'Daewoo_BH120_bus_front.jpg',
    'Daewoo_bus_001.jpg'
  ]}
];

async function run() {
  for (const item of WIKI_CANDIDATES) {
    let success = false;
    for (const name of item.names) {
      const url = getWikiUrl(name);
      try {
        const res = await fetch(url, {
          headers: {
            'User-Agent': '4WHEELS-Vehicle-Auditor/1.0 (contact@4wheelspk.com) Mozilla/5.0'
          }
        });
        if (res.ok) {
          const buf = Buffer.from(await res.arrayBuffer());
          fs.mkdirSync(require('path').dirname(item.target), { recursive: true });
          await sharp(buf)
            .resize({ width: 1200, height: 675, fit: 'contain', background: { r: 248, g: 250, b: 252, alpha: 1 } })
            .webp({ quality: 85 })
            .toFile(item.target);
          console.log(`✅ Success for ${item.target} using "${name}" (${(fs.statSync(item.target).size / 1024).toFixed(1)} KB)`);
          success = true;
          break;
        }
      } catch (err) {
        // try next
      }
    }
    if (!success) {
      console.log(`❌ Failed all candidates for ${item.target}`);
    }
  }
}

run();
