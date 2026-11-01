const RESTAURANT_CONFIG = {
  name: "NIRBAN VEG & NONVEG TANDURI HOTEL",
  whatsappNumber: "919509590978",
  gstin: "08CSUPK5608Q3ZN"
};

const CATEGORIES = [
  { id: "ALL", en: "All Items (75)", hi: "सभी आइटम (75)" },
  { id: "MUTTON", en: "Mutton Special", hi: "मटन स्पेशल" },
  { id: "CHICKEN", en: "Chicken Special", hi: "चिकन स्पेशल" },
  { id: "SNACKS", en: "Snacks & Roasted", hi: "स्नैक्स & रोस्टेड" },
  { id: "FISH", en: "Fish Special", hi: "मच्छी (फिश) स्पेशल" },
  { id: "EGG", en: "Egg Special", hi: "अण्डा स्पेशल" },
  { id: "VEG", en: "Veg Special", hi: "वेज स्पेशल" },
  { id: "RICE", en: "Rice & Biriyani", hi: "राईस & बिरयानी" },
  { id: "ROTI", en: "Roti & Chapati", hi: "रोटी व चपाती" },
  { id: "OTHER", en: "Salad, Lassi & Raita", hi: "सलाद, लस्सी व रायता" }
];

const IMG = {
  MUTTON: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80",
  LAAL_MAAS: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?auto=format&fit=crop&w=600&q=80",
  CHICKEN: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
  KADHAI: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&q=80",
  ROASTED: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80",
  FISH: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
  EGG: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=80",
  PANEER: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
  DAL: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
  BIRYANI: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
  ROTI: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=600&q=80",
  SALAD: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
};

const MENU_ITEMS = [
  // MUTTON SPECIAL
  { id: 1, name: "Nirban Special Mutton", hi: "निर्बाण स्पेशल मटन", category: "MUTTON", isVeg: false, bestseller: true, img: IMG.MUTTON, variants: { Half: 450, Full: 860 } },
  { id: 2, name: "Rajasthani Laal Maas", hi: "राजस्थानी लाल मास", category: "MUTTON", isVeg: false, bestseller: true, img: IMG.LAAL_MAAS, variants: { Half: 460, Full: 880 } },
  { id: 3, name: "Jodhpuri Mutton Masala", hi: "जोधपुरी मटन मसाला", category: "MUTTON", isVeg: false, bestseller: true, img: IMG.MUTTON, variants: { Half: 460, Full: 880 } },
  { id: 4, name: "Special Mutton", hi: "स्पेशल मटन", category: "MUTTON", isVeg: false, bestseller: false, img: IMG.MUTTON, variants: { Half: 450, Full: 860 } },
  { id: 5, name: "Afghani Mutton", hi: "अफगानी मटन", category: "MUTTON", isVeg: false, bestseller: false, img: IMG.MUTTON, variants: { Half: 450, Full: 860 } },
  { id: 6, name: "Mutton Rogan Juice", hi: "मटन रोगन ज्यूस", category: "MUTTON", isVeg: false, bestseller: false, img: IMG.LAAL_MAAS, variants: { Half: 430, Full: 800 } },
  { id: 7, name: "Mutton Corma", hi: "मटन कोरमा", category: "MUTTON", isVeg: false, bestseller: false, img: IMG.MUTTON, variants: { Half: 430, Full: 820 } },
  { id: 8, name: "Kadhai Mutton", hi: "कड़ाही मटन", category: "MUTTON", isVeg: false, bestseller: false, img: IMG.MUTTON, variants: { Half: 430, Full: 820 } },
  { id: 9, name: "Handi Mutton", hi: "हाण्डी मटन", category: "MUTTON", isVeg: false, bestseller: true, img: IMG.MUTTON, variants: { Half: 420, Full: 800 } },
  { id: 10, name: "Mutton Stew", hi: "मटन स्टू", category: "MUTTON", isVeg: false, bestseller: false, img: IMG.MUTTON, variants: { Half: 420, Full: 800 } },
  { id: 11, name: "Mutton Masala", hi: "मटन मसाला", category: "MUTTON", isVeg: false, bestseller: false, img: IMG.MUTTON, variants: { Half: 420, Full: 800 } },

  // CHICKEN SPECIAL
  { id: 75, name: "Quarter Chicken", hi: "क्वार्टर चिकन", category: "CHICKEN", isVeg: false, bestseller: true, img: IMG.CHICKEN, variants: { Quarter: 190, Half: 300, Full: 580 } },
  { id: 12, name: "Nirban Special Chicken", hi: "निर्बाण स्पेशल चिकन", category: "CHICKEN", isVeg: false, bestseller: true, img: IMG.CHICKEN, variants: { Half: 370, Full: 700 } },
  { id: 13, name: "Chicken Taka-Tak", hi: "चिकन टका-टक", category: "CHICKEN", isVeg: false, bestseller: true, img: IMG.KADHAI, variants: { Half: 370, Full: 700 } },
  { id: 14, name: "Special Chicken", hi: "स्पेशल चिकन", category: "CHICKEN", isVeg: false, bestseller: false, img: IMG.CHICKEN, variants: { Half: 370, Full: 700 } },
  { id: 15, name: "Afghani Chicken", hi: "अफगानी चिकन", category: "CHICKEN", isVeg: false, bestseller: true, img: IMG.CHICKEN, variants: { Half: 360, Full: 680 } },
  { id: 16, name: "Kadhai Chicken", hi: "कड़ाही चिकन", category: "CHICKEN", isVeg: false, bestseller: false, img: IMG.KADHAI, variants: { Half: 340, Full: 640 } },
  { id: 17, name: "Chicken Corma", hi: "चिकन कोरमा", category: "CHICKEN", isVeg: false, bestseller: false, img: IMG.CHICKEN, variants: { Half: 340, Full: 640 } },
  { id: 18, name: "Butter Chicken", hi: "बटर चिकन", category: "CHICKEN", isVeg: false, bestseller: true, img: IMG.CHICKEN, variants: { Half: 340, Full: 620 } },
  { id: 19, name: "Chicken Black Paper", hi: "चिकन काली मिर्च", category: "CHICKEN", isVeg: false, bestseller: false, img: IMG.KADHAI, variants: { Half: 320, Full: 600 } },
  { id: 20, name: "Chicken Stew", hi: "चिकन स्टू", category: "CHICKEN", isVeg: false, bestseller: false, img: IMG.CHICKEN, variants: { Half: 320, Full: 600 } },
  { id: 21, name: "Chicken Rogan Juice", hi: "चिकन रोगन ज्यूस", category: "CHICKEN", isVeg: false, bestseller: false, img: IMG.CHICKEN, variants: { Half: 320, Full: 600 } },
  { id: 22, name: "Handi Chicken", hi: "हाण्डी चिकन", category: "CHICKEN", isVeg: false, bestseller: true, img: IMG.CHICKEN, variants: { Half: 320, Full: 600 } },
  { id: 23, name: "Chicken Changeji", hi: "चिकन चंगेजी", category: "CHICKEN", isVeg: false, bestseller: false, img: IMG.CHICKEN, variants: { Half: 300, Full: 580 } },
  { id: 24, name: "Chicken Masala", hi: "चिकन मसाला", category: "CHICKEN", isVeg: false, bestseller: false, img: IMG.KADHAI, variants: { Half: 300, Full: 580 } },
  { id: 25, name: "Chicken Curry", hi: "चिकन करी", category: "CHICKEN", isVeg: false, bestseller: false, img: IMG.CHICKEN, variants: { Half: 300, Full: 580 } },

  // SNACKS & ROASTED
  { id: 26, name: "Chicken Roasted Butter", hi: "चिकन रोस्टेड बटर", category: "SNACKS", isVeg: false, bestseller: true, img: IMG.ROASTED, variants: { Half: 250, Full: 480 } },
  { id: 27, name: "Malai Chicken Roasted", hi: "मलाई चिकन रोस्टेड", category: "SNACKS", isVeg: false, bestseller: true, img: IMG.ROASTED, variants: { Half: 350, Full: 680 } },
  { id: 28, name: "Malai Afghani Leg Pieces", hi: "मलाई अफगानी लेग पीस", category: "SNACKS", isVeg: false, bestseller: false, img: IMG.ROASTED, variants: { "Half (4 Pcs)": 350, "Full (8 Pcs)": 700 } },
  { id: 29, name: "Chicken Gardan Fry", hi: "चिकन गर्दन फ्राई", category: "SNACKS", isVeg: false, bestseller: false, img: IMG.ROASTED, variants: { Half: 120, Full: 240 } },
  { id: 30, name: "Fish Fry", hi: "मच्छी (फिश) फ्राई", category: "SNACKS", isVeg: false, bestseller: true, img: IMG.FISH, variants: { Half: 240, Full: 480 } },
  { id: 31, name: "Boneless Fish Fry", hi: "बोन लेस मच्छी फ्राई", category: "SNACKS", isVeg: false, bestseller: false, img: IMG.FISH, variants: { Half: 330, Full: 660 } },
  { id: 32, name: "Chicken Fry", hi: "चिकन फ्राई", category: "SNACKS", isVeg: false, bestseller: false, img: IMG.ROASTED, variants: { Half: 250, Full: 480 } },
  { id: 33, name: "Chicken Leg Fry", hi: "चिकन लेग फ्राई", category: "SNACKS", isVeg: false, bestseller: false, img: IMG.ROASTED, variants: { "Half (4 Pcs)": 250, "Full (8 Pcs)": 500 } },
  { id: 34, name: "Mutton Dry (Sukha)", hi: "मटन ड्राई (सूखा)", category: "SNACKS", isVeg: false, bestseller: false, img: IMG.MUTTON, variants: { Half: 360, Full: 700 } },
  { id: 35, name: "Chicken Dry (Sukha)", hi: "चिकन ड्राई (सूखा)", category: "SNACKS", isVeg: false, bestseller: false, img: IMG.ROASTED, variants: { Half: 260, Full: 500 } },
  { id: 36, name: "Afghani Leg Pieces", hi: "अफगानी लेग पीस", category: "SNACKS", isVeg: false, bestseller: false, img: IMG.ROASTED, variants: { "Half (4 Pcs)": 250, "Full (8 Pcs)": 500 } },

  // FISH SPECIAL
  { id: 37, name: "Boneless Fish Masala", hi: "बोन लेस मच्छी मसाला", category: "FISH", isVeg: false, bestseller: true, img: IMG.FISH, variants: { Half: 350, Full: 680 } },
  { id: 38, name: "Fish Corma (Singal Kanta)", hi: "मच्छी कोरमा (सिंगल कांटा)", category: "FISH", isVeg: false, bestseller: false, img: IMG.FISH, variants: { Half: 330, Full: 620 } },
  { id: 39, name: "Fish Masala (Singal Kanta)", hi: "मच्छी मसाला (सिंगल कांटा)", category: "FISH", isVeg: false, bestseller: false, img: IMG.FISH, variants: { Half: 320, Full: 620 } },
  { id: 40, name: "Fish Curry (Singal Kanta)", hi: "मच्छी करी (सिंगल कांटा)", category: "FISH", isVeg: false, bestseller: false, img: IMG.FISH, variants: { Half: 320, Full: 620 } },

  // EGG SPECIAL
  { id: 41, name: "Egg Curry (2 Eggs)", hi: "अण्डा करी (2 अण्डा)", category: "EGG", isVeg: false, bestseller: true, img: IMG.EGG, variants: { Plate: 130 } },
  { id: 42, name: "Egg Bhuji (3 Eggs)", hi: "अण्डा भुजी (3 अण्डा)", category: "EGG", isVeg: false, bestseller: false, img: IMG.EGG, variants: { Plate: 90 } },
  { id: 43, name: "Omlet (3 Eggs)", hi: "ऑमलेट (3 अण्डा)", category: "EGG", isVeg: false, bestseller: false, img: IMG.EGG, variants: { Plate: 90 } },
  { id: 44, name: "Egg Fry (2 Eggs)", hi: "अण्डा फ्राई (2 अण्डा)", category: "EGG", isVeg: false, bestseller: false, img: IMG.EGG, variants: { Plate: 50 } },
  { id: 45, name: "Boil Egg (2 Eggs)", hi: "बोयल अण्डा (2 अण्डा)", category: "EGG", isVeg: false, bestseller: false, img: IMG.EGG, variants: { Plate: 30 } },

  // VEG SPECIAL
  { id: 46, name: "Butter Paneer Masala", hi: "बटर पनीर मसाला", category: "VEG", isVeg: true, bestseller: true, img: IMG.PANEER, variants: { Half: 220, Full: 400 } },
  { id: 47, name: "Khoya Paneer", hi: "खोया पनीर", category: "VEG", isVeg: true, bestseller: false, img: IMG.PANEER, variants: { Half: 200, Full: 380 } },
  { id: 48, name: "Shahi Paneer", hi: "शाही पनीर", category: "VEG", isVeg: true, bestseller: true, img: IMG.PANEER, variants: { Half: 190, Full: 360 } },
  { id: 49, name: "Kadhai Paneer", hi: "कड़ाही पनीर", category: "VEG", isVeg: true, bestseller: false, img: IMG.PANEER, variants: { Half: 190, Full: 360 } },
  { id: 50, name: "Mutter Paneer", hi: "मटर पनीर", category: "VEG", isVeg: true, bestseller: false, img: IMG.PANEER, variants: { Half: 180, Full: 340 } },
  { id: 51, name: "Sev Tamatar", hi: "सेव टमाटर", category: "VEG", isVeg: true, bestseller: true, img: IMG.DAL, variants: { Half: 140, Full: 260 } },
  { id: 52, name: "Dal Tadka", hi: "दाल तड़का", category: "VEG", isVeg: true, bestseller: false, img: IMG.DAL, variants: { Half: 130, Full: 240 } },
  { id: 53, name: "Dal Fry", hi: "दाल फ्राई", category: "VEG", isVeg: true, bestseller: false, img: IMG.DAL, variants: { Half: 100, Full: 180 } },

  // RICE SPECIAL
  { id: 54, name: "Mutton Biriyani", hi: "मटन बिरयानी", category: "RICE", isVeg: false, bestseller: true, img: IMG.BIRYANI, variants: { Half: 220, Full: 400 } },
  { id: 55, name: "Chicken Biriyani", hi: "चिकन बिरयानी", category: "RICE", isVeg: false, bestseller: true, img: IMG.BIRYANI, variants: { Half: 160, Full: 300 } },
  { id: 56, name: "Egg Biriyani", hi: "अण्डा बिरयानी", category: "RICE", isVeg: false, bestseller: false, img: IMG.BIRYANI, variants: { Half: 160, Full: 300 } },
  { id: 57, name: "Paneer Biriyani", hi: "पनीर बिरयानी", category: "RICE", isVeg: true, bestseller: false, img: IMG.BIRYANI, variants: { Half: 170, Full: 320 } },
  { id: 58, name: "Jeera Rice", hi: "जीरा राईस", category: "RICE", isVeg: true, bestseller: false, img: IMG.BIRYANI, variants: { Half: 100, Full: 180 } },
  { id: 59, name: "Plain Rice", hi: "प्लेन राईस", category: "RICE", isVeg: true, bestseller: false, img: IMG.BIRYANI, variants: { Half: 80, Full: 150 } },

  // ROTI & CHAPATI
  { id: 60, name: "Tandoori Roti Plain", hi: "तन्दूरी रोटी प्लेन", category: "ROTI", isVeg: true, bestseller: false, img: IMG.ROTI, variants: { Piece: 12 } },
  { id: 61, name: "Tandoori Roti Butter", hi: "तन्दूरी रोटी बटर", category: "ROTI", isVeg: true, bestseller: true, img: IMG.ROTI, variants: { Piece: 17 } },
  { id: 62, name: "Tawa Roti Plain", hi: "तवा रोटी प्लेन", category: "ROTI", isVeg: true, bestseller: false, img: IMG.ROTI, variants: { Piece: 12 } },
  { id: 63, name: "Tawa Roti Butter", hi: "तवा रोटी बटर", category: "ROTI", isVeg: true, bestseller: true, img: IMG.ROTI, variants: { Piece: 17 } },

  // SALAD & OTHER
  { id: 64, name: "Green Salad", hi: "ग्रीन सलाद", category: "OTHER", isVeg: true, bestseller: false, img: IMG.SALAD, variants: { Plate: 60 } },
  { id: 65, name: "Onion Salad", hi: "ऑनियन सलाद", category: "OTHER", isVeg: true, bestseller: false, img: IMG.SALAD, variants: { Plate: 20 } },
  { id: 66, name: "Plain Papad", hi: "प्लेन पापड़", category: "OTHER", isVeg: true, bestseller: false, img: IMG.SALAD, variants: { Piece: 20 } },
  { id: 67, name: "Masala Papad", hi: "मसाला पापड़", category: "OTHER", isVeg: true, bestseller: true, img: IMG.SALAD, variants: { Plate: 60 } },
  { id: 68, name: "Curd Plain (Dahi)", hi: "दही प्लेन", category: "OTHER", isVeg: true, bestseller: false, img: IMG.SALAD, variants: { Bowl: 30 } },
  { id: 69, name: "Chhach (Buttermilk)", hi: "छाछ", category: "OTHER", isVeg: true, bestseller: false, img: IMG.SALAD, variants: { Glass: 30 } },
  { id: 70, name: "Namkeen Lassi", hi: "नमकीन लस्सी", category: "OTHER", isVeg: true, bestseller: false, img: IMG.SALAD, variants: { Glass: 50 } },
  { id: 71, name: "Sweet Lassi", hi: "स्वीट लस्सी", category: "OTHER", isVeg: true, bestseller: false, img: IMG.SALAD, variants: { Glass: 50 } },
  { id: 72, name: "Special Lassi", hi: "स्पेशल लस्सी", category: "OTHER", isVeg: true, bestseller: true, img: IMG.SALAD, variants: { Glass: 70 } },
  { id: 73, name: "Bundi Raita", hi: "बूंदी रायता", category: "OTHER", isVeg: true, bestseller: false, img: IMG.SALAD, variants: { Bowl: 100 } },
  { id: 74, name: "Veg Raita", hi: "वेज रायता", category: "OTHER", isVeg: true, bestseller: false, img: IMG.SALAD, variants: { Bowl: 100 } }
];