/**
 * LUXE FIND - Products Database
 * 
 * This file contains all affiliate products for your website.
 * Products are organized by specific beauty concerns (Anti-Dandruff, Hair Growth, etc.).
 * 
 * HOW TO ADD NEW PRODUCTS:
 * 1. Use product-bot.html to generate product code
 * 2. Paste the generated code inside the products array below
 * 3. Make sure to add a comma after each product object
 */

const products = [
    // --- CATEGORY 1: ANTI-DANDRUFF ---
  {
        "id": "anti-dandruff-6977",
        "title": "Bare Anatomy Anti-Dandruff Shampoo (Salicylic Acid + Piroctone Olamine + Biotin)",
        "price": "₹249",
        "image": "https://m.media-amazon.com/images/I/51pQnOebkoL._SL1000_.jpg",
        "link": "https://amzn.to/4bU1lUG",
        "category": ["Anti-Dandruff","Oil Control"],
        "description": "A scientifically formulated anti-dandruff shampoo containing 0.2% Salicylic Acid, Piroctone Olamine, and Biotin to exfoliate dead skin cells, reduce dandruff-causing fungus, and support stronger, healthier hair growth",
        "pros": ["Controls oily scalp effectively","Contains Salicylic Acid exfoliant","Affordable budget-friendly option","Non-drying formula","High Amazon purchase volume","Suitable for men and women"],
        "cons": ["May not be strong enough for severe dandruff","Small 100 ml size at base price","Requires consistent use for visible results"],
        "rating": 4.1,
        "isFeatured": true,
        "tags": ["Top Rated","Trending"],
        "bestFor": "Oily Dandruff & Itchy Scalp",
        "strength": "Moderate",
        "keyBenefit": "Removes flakes while controlling excess oil without drying your scalp.",
        "verdict": "Expert Choice"
    },
    {
        "id": "dandruff-hs",
        "title": "Head & Shoulders Supreme",
        "price": "₹280",
        "image": "https://m.media-amazon.com/images/I/51w7-A6-9TL._SL1000_.jpg",
        "link": "https://amzn.to/3...",
        "category": ["Anti-Dandruff"],
        "description": "Infused with Argan oil for soft, flake-free hair. Great for daily scalp health.",
        "pros": ["Non-drying", "Smells amazing", "Argan infused"],
        "cons": ["Fragrance might be strong"],
        "rating": 4.5,
        "isFeatured": true,
        "tags": ["Trending"],
        "bestFor": "Daily Use",
        "strength": "Moderate",
        "keyBenefit": "Moisturizes",
        "verdict": "Crowd Favorite"
    },
  {
        "id": "anti-dandruff-5931",
        "title": "Kitcoz Daily Anti Dandruff & Anti Itch Shampoo (Ceramide + Salicylic Acid)",
        "price": "₹349",
        "image": "https://m.media-amazon.com/images/I/71VS7xNQLoL._SL1500_.jpg",
        "link": "https://amzn.to/4kzm2aT",
        "category": ["Anti-Dandruff"],
        "description": "A dermatologist-tested anti-dandruff shampoo formulated with Ichthyol, Salicylic Acid, and Ceramide Complex to gently exfoliate flakes, soothe scalp irritation, and strengthen the hair barrier for daily use.",
        "pros": ["Gentle non-drying formula","Contains Ceramide for scalp barrier repair","Targets itching and irritation","Suitable for daily use","Free from parabens and sulphates"],
        "cons": ["Lower review count compared to competitors","May not be strong enough for severe dandruff","Small 100ml size at base price"],
        "rating": 4.1,
        "isFeatured": true,
        "tags": ["Top Rated","Editor's Choice"],
        "bestFor": "Sensitive & Itchy Scalp (Daily Use)",
        "strength": "Moderate",
        "keyBenefit": "Reduces flakes and itching without stripping natural moisture.",
        "verdict": "Expert Choice"
    },

    // --- CATEGORY 2: HAIR GROWTH ---
    {
        "id": "hairfall-mamaearth",
        "title": "Mamaearth Onion Shampoo",
        "price": "₹349",
        "image": "https://m.media-amazon.com/images/I/61r5K-x+v+L._SL1500_.jpg",
        "link": "https://amzn.to/4...",
        "category": ["Hair Growth"],
        "description": "Onion and Plant Keratin to reduce hair fall and strengthen hair follicles.",
        "pros": ["Natural ingredients", "No toxins", "Softens hair"],
        "cons": ["Smell is polarizing"],
        "rating": 4.7,
        "isFeatured": true,
        "tags": ["Top Rated"],
        "bestFor": "Daily Hair Fall Control",
        "strength": "Moderate",
        "keyBenefit": "Strengthens Roots",
        "verdict": "Crowd Favorite"
    },
    {
        "id": "growth-wishcare",
        "title": "WishCare Hair Growth Serum",
        "price": "₹699",
        "image": "https://m.media-amazon.com/images/I/61S-rO2+6kL._SL1500_.jpg",
        "link": "https://amzn.to/3...",
        "category": ["Hair Growth"],
        "description": "Powerful blend of Redensyl, Anagain, and Biotin to boost hair density.",
        "pros": ["Visible results in 8 weeks", "Non-greasy", "Natural actives"],
        "cons": ["Requires consistency"],
        "rating": 4.7,
        "isFeatured": true,
        "tags": ["Top Rated"],
        "bestFor": "Thinning Hair",
        "strength": "Strong",
        "keyBenefit": "Boosts Density",
        "verdict": "Best Results"
    },

    // --- CATEGORY 3: OIL CONTROL ---
    {
        "id": "oily-plum",
        "title": "Plum Green Tea Oil-Free Moisturizer",
        "price": "₹470",
        "image": "https://m.media-amazon.com/images/I/51Rv-v+v+v+L._SL1000_.jpg",
        "link": "https://amzn.to/5...",
        "category": ["Oil Control"],
        "description": "Lightweight, matte finish moisturizer with Green Tea extracts to fight acne and control oil.",
        "pros": ["Non-greasy", "Vegan", "Fights breakouts"],
        "cons": ["Small tube"],
        "rating": 4.8,
        "isFeatured": true,
        "tags": ["Top Rated"],
        "bestFor": "Oily/Acne Skin",
        "strength": "Moderate",
        "keyBenefit": "Matte Finish",
        "verdict": "Top Choice"
    },
    {
        "id": "oil-loreal",
        "title": "L'Oreal Scalp Advanced Shampoo",
        "price": "₹750",
        "image": "https://m.media-amazon.com/images/I/51e8E-i-9FL._SL1000_.jpg",
        "link": "https://amzn.to/3...",
        "category": ["Oil Control"],
        "description": "Purifying shampoo with AHAs to reduce 78% of sebum in just one wash.",
        "pros": ["Professional grade", "Intense cleansing", "Refreshing scent"],
        "cons": ["Slightly expensive"],
        "rating": 4.8,
        "isFeatured": false,
        "tags": ["Top Rated"],
        "bestFor": "Extremely Oily Scalp",
        "strength": "Strong",
        "keyBenefit": "Purifies Porous",
        "verdict": "Expert Review"
    },

    // --- CATEGORY 4: ACNE & PIMPLES ---
    {
        "id": "acne-minimalist",
        "title": "Minimalist Salicylic Acid Cleanser",
        "price": "₹299",
        "image": "https://m.media-amazon.com/images/I/61kGv6r5ZVL._SL1500_.jpg",
        "link": "https://amzn.to/3...",
        "category": ["Acne & Pimples"],
        "description": "2% Salicylic Acid + LHA formula to deep clean pores and prevent future breakouts.",
        "pros": ["Fragrance-free", "Non-comedogenic", "Budget friendly"],
        "cons": ["Slightly drying for dry skin type"],
        "rating": 4.8,
        "isFeatured": true,
        "tags": ["Top Rated"],
        "bestFor": "Oily Acne Skin",
        "strength": "Strong",
        "keyBenefit": "Exfoliates Pores",
        "verdict": "Daily Essential"
    },
    {
        "id": "acne-cosrx",
        "title": "COSRX Master Patch Original",
        "price": "₹280",
        "image": "https://m.media-amazon.com/images/I/51B3kG-6FML._SL1000_.jpg",
        "link": "https://amzn.to/3...",
        "category": ["Acne & Pimples"],
        "description": "The cult-favorite hydrocolloid patches that heal pimples overnight.",
        "pros": ["Invisible", "Heals fast", "Absorbs gunk"],
        "cons": ["One-time use only"],
        "rating": 4.9,
        "isFeatured": true,
        "tags": ["Top Rated"],
        "bestFor": "Active Pimples",
        "strength": "Targeted",
        "keyBenefit": "Overnight Heal",
        "verdict": "Must-Have"
    },

    // --- CATEGORY 5: GLASS SKIN ---
    {
        "id": "glass-pink",
        "title": "The Pink Foundry 12% Niacinamide",
        "price": "₹599",
        "image": "https://m.media-amazon.com/images/I/61v-v+v+v+L._SL1500_.jpg",
        "link": "https://amzn.to/3...",
        "category": ["Glass Skin / Brightening"],
        "description": "Serum to refine pores and treated pigmentation for a luminous finish.",
        "pros": ["Reduces pores", "Brightens skin", "Non-sticky"],
        "cons": ["Takes 4 weeks for full results"],
        "rating": 4.7,
        "isFeatured": true,
        "tags": ["Top Rated"],
        "bestFor": "Pore Refinement",
        "strength": "Moderate",
        "keyBenefit": "Clears Spots",
        "verdict": "Glow Essential"
    },
    {
        "id": "glass-laneige",
        "title": "Laneige Blue Hyaluronic Serum",
        "price": "₹3,400",
        "image": "https://m.media-amazon.com/images/I/51B-v+v+v+L._SL1500_.jpg",
        "link": "#",
        "category": ["Glass Skin / Brightening"],
        "description": "Micro-sized hyaluronic acid for deep hydration and dewy translucency.",
        "pros": ["Deep hydration", "Premium feel", "Dewy finish"],
        "cons": ["Very expensive"],
        "rating": 4.8,
        "isFeatured": true,
        "tags": ["Trending"],
        "bestFor": "Dry/Dull Skin",
        "strength": "Moderate",
        "keyBenefit": "Deeply Hydrates",
        "verdict": "Luxury Hydration"
    },

    // --- CATEGORY 6: LIP CARE ---
    {
        "id": "lip-laneige",
        "title": "Laneige Lip Sleeping Mask",
        "price": "₹600",
        "image": "https://m.media-amazon.com/images/I/51Rv-v+v+v+L._SL1000_.jpg",
        "link": "https://amzn.to/3...",
        "category": ["Lip Care"],
        "description": "Intense overnight repair for soft, plump lips by morning.",
        "pros": ["Global bestseller", "Deep repair", "Delicious scent"],
        "cons": ["Luxury price"],
        "rating": 4.9,
        "isFeatured": true,
        "tags": ["Top Rated"],
        "bestFor": "Chapped Lips",
        "strength": "Strong",
        "keyBenefit": "Repair Lips",
        "verdict": "Gold Standard"
    },
    {
        "id": "lip-wishcare",
        "title": "Wishcare SPF 50 Lip Balm",
        "price": "₹299",
        "image": "https://m.media-amazon.com/images/I/61B-v+v+v+L._SL1500_.jpg",
        "link": "#",
        "category": ["Lip Care"],
        "description": "Daily sun protection with Ceramides to prevent pigmented lips.",
        "pros": ["High SPF", "Ceramide repair", "No white cast"],
        "cons": ["Basic flavor"],
        "rating": 4.6,
        "isFeatured": false,
        "tags": ["Trending"],
        "bestFor": "Sun Protection",
        "strength": "Moderate",
        "keyBenefit": "Prevents Dark",
        "verdict": "Daily Must-Have"
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = products;
}



