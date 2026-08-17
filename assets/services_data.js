// TODO: confirm with client real service list + prices for The Trim Town
// The following catalog was legacy data and is retained solely for structural schema reference.

const servicesData = [
  // HAIR CRAFT
  { category: "HAIR CRAFT", name: "Hair Cut Simple", desc: "Precision haircut and styling", price: 0 },
  { category: "HAIR CRAFT", name: "Hair Cut (with styling)", desc: "Precision haircut followed by custom styling", price: 0 },
  { category: "HAIR CRAFT", name: "Fade Hair Cut / Long Hair", desc: "Classic fade or specialty cut for longer hair lengths", price: 0 },
  { category: "HAIR CRAFT", name: "Head Wash / Conditioning", desc: "Deep wash and hair conditioning", price: 0 },

  // BEARD
  { category: "BEARD", name: "Classic Shave", desc: "Traditional clean shave with hot towel prep", price: 0 },
  { category: "BEARD", name: "Beard / Faded Beard", desc: "Beard shaping, line-up or faded trim", price: 0 },
  { category: "BEARD", name: "Beard Trimming", desc: "Simple length reduction and trimmer cleanup", price: 0 },

  // HAIR TREATMENT
  { category: "HAIR TREATMENT", name: "Scalp Therapy", desc: "Scalp therapy and nourishing treatment", price: 0 },
  { category: "HAIR TREATMENT", name: "Protein + Hair Restore", desc: "Deep protein restoration for damaged or weak hair", price: 0 },

  // SKIN CARE
  { category: "SKIN CARE", name: "Skin Cleansing", desc: "Deep pore purification and skin refresh", price: 0 },
  { category: "SKIN CARE", name: "Facial Therapy", desc: "Rejuvenating skin therapy ritual", price: 0 }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = servicesData;
}
