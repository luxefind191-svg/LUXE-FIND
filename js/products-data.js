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
        "category": ["Anti-Dandruff", "Oil Control"],
        "description": "A scientifically formulated anti-dandruff shampoo containing 0.2% Salicylic Acid, Piroctone Olamine, and Biotin to exfoliate dead skin cells, reduce dandruff-causing fungus, and support stronger, healthier hair growth",
        "pros": ["Controls oily scalp effectively", "Contains Salicylic Acid exfoliant", "Affordable budget-friendly option", "Non-drying formula", "High Amazon purchase volume", "Suitable for men and women"],
        "cons": ["May not be strong enough for severe dandruff", "Small 100 ml size at base price", "Requires consistent use for visible results"],
        "rating": 4.1,
        "isFeatured": true,
        "tags": ["Top Rated", "Trending"],
        "bestFor": "Oily Dandruff & Itchy Scalp",
        "strength": "Moderate",
        "keyBenefit": "Removes flakes while controlling excess oil without drying your scalp.",
        "verdict": "Expert Choice",
    },
    {
        "id": "anti-dandruff-1137",
        "title": "L'Oréal Professionnel Scalp Advanced 5-In-1 Leave-In Serum – 90ml",
        "price": "₹2200",
        "image": "https://m.media-amazon.com/images/I/61Uo6RPg0yL._SL1500_.jpg",
        "link": "https://amzn.to/4kEaoLO",
        "category": ["Anti-Dandruff", "Oil Control"],
        "description": "A salon-grade leave-in scalp serum formulated to target five major scalp irregularities including oiliness, discomfort, sweat, impurities and odor for long-lasting scalp freshness and balance.",
        "pros": ["Salon-grade professional formula", "Controls excess oil without drying hair", "Lightweight non-greasy leave-in texture", "Targets sweat and scalp odor", "Suitable for men and women"],
        "cons": ["Premium pricing", "Limited customer reviews", "Not specifically an anti-dandruff medication"],
        "rating": 3.6,
        "isFeatured": false,
        "tags": ["Editor's Choice", "Luxury Pick"],
        "bestFor": "Persistent Oily & Sweaty Scalp",
        "strength": "Strong",
        "keyBenefit": "Professional 5-in-1 scalp therapy that controls oil, sweat, odor and discomfort without daily washing.",
        "verdict": "Highly Rated",
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
        "verdict": "Crowd Favorite",
    },
   {
        "id": "hair-growth-3607",
        "title": "Pilgrim Spanish Rosemary & Biotin Anti-Hairfall Shampoo",
        "price": "₹274 (10% Off)",
        "image": "https://m.media-amazon.com/images/I/617W5aVW4fL._SL1500_.jpg",
        "link": "https://amzn.to/4aXkV0b",
        "category": ["Hair Growth"],
        "description": "A potent anti-hairfall treatment enriched with Spanish Rosemary (Rosmarinic Acid) to stimulate follicles and Biotin to reinforce the hair shaft, reducing breakage by up to 95%.",
        "pros": ["Natural DHT Blocker 🌿","    Strengthens hair up to 95%","    Stimulates new hair growth","    Budget-friendly Luxe find (₹274)"],
        "cons": ["Needs consistent use for 4 weeks for best results","    Scent might be strong for some"],
        "rating": 4.1,
        "isFeatured": false,
        "tags": ["Trending","Editor's Choice"],
        "bestFor": "Hair thinning and excessive breakage.",
        "strength": "Targeted",
        "keyBenefit": "Stop the \"Heartbreak\" of hair fall with the power of Natural DHT Blockers. [cite: 2026-02-23]",
        "verdict": "Expert Choice",
        "ingredients": "Spanish Rosemary, Biotin, Rosmarinic Acid.",
        "usage": "Apply to wet hair.\n    2. Massage deeply into the scalp using fingertips to stimulate blood flow.\n    3. Rinse thoroughly for stronger, cleaner hair.",
        "whyPicked": "6,000+ people bought this last month because it actually blocks the hormone (DHT) responsible for hair loss. [cite: 2026-02-23]"
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
        "verdict": "Top Choice",
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
        "verdict": "Expert Review",
    },

    // --- CATEGORY 4: ACNE & PIMPLES ---
    {
        "id": "acne-pimples-6861",
        "title": "California Skin+ Anti-Acne Serum",
        "price": "₹285",
        "image": "https://m.media-amazon.com/images/I/61yhN6MeuhL._SL1080_.jpg",
        "link": "https://amzn.to/4qRdehY",
        "category": ["Acne & Pimples"],
        "description": "A concentrated anti-acne treatment featuring 2% Salicylic Acid to exfoliate deep within pores, combined with 4% Niacinamide and Zinc PCA to regulate sebum and strengthen the skin barrier. Includes Licorice and Seaweed extracts to soothe inflammation instantly.",
        "pros": ["Massive 56% discount (Limited Time)", "High 4% Niacinamide for marking fading", "Fragrance-free and Vegan", "Non-greasy, water-like texture"],
        "cons": ["20g is a slightly smaller bottle than standard", "Powerful actives might cause slight purging initially"],
        "rating": 5,
        "isFeatured": false,
        "tags": ["Top Rated", "Luxury Pick"],
        "bestFor": "Active Pimples & Pimple Marks",
        "strength": "Strong",
        "keyBenefit": "Shrinks active acne while fading post-pimple dark spots simultaneously.",
        "verdict": "Expert Choice",
        "ingredients": "2% Salicylic Acid (BHA), 4% Niacinamide, Zinc PCA, Prebiotics Complex, Licorice & Seaweed Extract",
        "usage": "After cleansing, apply 2-3 drops to the entire face or just the affected areas. Gently pat into the skin until fully absorbed. Follow with a lightweight, oil-free moisturizer. Always wear sunscreen during the day when using this serum.",
        "whyPicked": "We picked it because it’s the \"Lowest Price in 30 Days.\" You are getting a premium \"Acne Buster\" complex that usually costs ₹650 for just ₹285. It is the smartest way to upgrade your skincare routine without spending a fortune.",
    },
  
  {
        "id": "oil-control-1230",
        "title": "Cutilift Salicylic Acid 2% Face Wash",
        "price": "₹235",
        "image": "https://m.media-amazon.com/images/I/51ga6J8i7ML._SL1080_.jpg",
        "link": "https://amzn.to/4rW9sVs",
        "category": ["Oil Control","Acne & Pimples"],
        "description": "A deep-cleansing gel formula with 2% Salicylic Acid for exfoliation, Niacinamide for texture improvement, and a botanical blend of Tea Tree and Aloe Vera for a soothing experience.",
        "pros": ["Professional Pharma Grade","    Very affordable (₹235)","    pH Balanced & Non-greasy","    Enriched with soothing Aloe Vera"],
        "cons": ["80ml is a travel-friendly but smaller size","Clinical scent rather than floral"],
        "rating": 4.8,
        "isFeatured": false,
        "tags": ["Trending","Editor's Choice"],
        "bestFor": "Deep Cleansing & Oily Skin",
        "strength": "Moderate",
        "keyBenefit": "Clears pores and dissolves excess oil without over-drying the skin.",
        "verdict": "Expert Choice",
        "ingredients": "2% Salicylic Acid, Tea Tree Extract, Aloe Vera, Niacinamide.",
        "usage": "Apply to wet face. 2. Massage gently in circular motions for 60 seconds. 3. Rinse thoroughly with water. Use daily for best results.",
        "whyPicked": "It’s the ultimate budget-friendly professional cleanser. For just ₹235, you get a pH-balanced, clinical formula that rivals expensive luxury brands."
    },
    // --- CATEGORY 5: GLASS SKIN ---
    {
        "id": "glass-skin-/-brightening-6042",
        "title": "L'Oreal Paris Revitalift \"Glass Skin\" Routine (Serum + Gel Cleanser)",
        "price": "₹522",
        "image": "https://m.media-amazon.com/images/I/51077fvCzPL._SL1094_.jpg",
        "link": "https://amzn.to/40prrrA",
        "category": ["Glass Skin / Brightening"],
        "description": "A clinically validated bundle featuring a 50ml Hyaluronic Gel Cleanser and a 15ml 1.5% Hyaluronic Acid Serum. Designed to reduce fine lines by 60% and intensely re-plump the skin.",
        "pros": ["31% Bundle Discount","Visible results in 1 hour","Non-sticky & Lightweight","Fragrance-free & Paraben-free"],
        "cons": ["Small serum bottle (15ml)","Sells out quickly during sales"],
        "rating": 4.8,
        "isFeatured": false,
        "tags": ["Trending","Editor's Choice"],
        "bestFor": "Instant Plumping & Monday Morning Glow",
        "strength": "Strong",
        "keyBenefit": "Get the viral \"Glass Skin\" look with this 2-step hydration power duo.",
        "verdict": "Expert Choice",
        "ingredients": "1.5% Hyaluronic Acid (Macro & Micro), Panthenol, Glycerin, Salicylic Acid (low % in cleanser for pore prep).",
        "usage": "1. Massage the Gel Cleanser onto wet face and rinse.\n2. Apply 2-3 drops of the Serum to damp skin.\n3. Tap gently and follow with moisturizer.",
        "whyPicked": "It’s the #1 selling serum in India paired with its perfect cleanser match at a 31% discount—it's a no-brainer for anyone wanting clear, glowing skin by tomorrow."
    },
     {
        "id": "glass-skin-/-brightening-4642",
        "title": "Pilgrim Korean Rice Water Hydra Glow Moisturizer (with 5 Hyaluronic Acids & 3% Niacinamide)",
        "price": "₹241",
        "image": "https://m.media-amazon.com/images/I/613LX1k416L._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg",
        "link": "https://amzn.to/4qU9koF",
        "category": ["Glass Skin / Brightening"],
        "description": "A lightweight, quick-absorbing gel cream formulated with Korean Rice Water, 3% Niacinamide, and 5 types of Hyaluronic Acids. Designed to strengthen the skin barrier with 5 Ceramides while providing multi-depth hydration.",
        "pros": ["Instant Glass-Skin Finish","Contains 5 types of Hyaluronic Acids","Lightweight & Non-greasy","Fragrance-free & Vegan"],
        "cons": ["50g Jar might finish quickly if used twice daily","Wait for it to fully dry before applying makeup"],
        "rating": 4.1,
        "isFeatured": false,
        "tags": ["Trending","Editor's Choice"],
        "bestFor": "Instant Glass Skin Glow & Deep Pore Hydration",
        "strength": "Strong",
        "keyBenefit": "The K-Beauty secret to a translucent, \"Glass-Like\" glow in a lightweight gel.",
        "verdict": "Expert Choice",
        "ingredients": "Korean Rice Water, 5 Hyaluronic Acids, 3% Niacinamide, 5 Ceramides, Mulberry Extract.",
        "usage": "1. Cleanse with a mild wash. 2. Apply a small amount to the face and neck. 3. Massage in upward circular motions. 4. Use twice daily for the best \"Glass Skin\" results.",
        "whyPicked": "It offers a professional 5-Ceramide barrier repair and a multi-hyaluronic glow for under ₹250. It’s the easiest way to get the \"K-Glow\" without the high price tag."
    },
     {
        "id": "glass-skin-/-brightening-2299",
        "title": "Pilgrim 10% Vitamin C Serum for Glowing Skin",
        "price": "₹527",
        "image": "https://m.media-amazon.com/images/I/71BTAV8rtdL._SL1500_.jpg",
        "link": "https://amzn.to/4s503ed",
        "category": ["Glass Skin / Brightening"],
        "description": "A potent blend of 10% Vitamin C, 5% Niacinamide, and Hyaluronic Acid designed to fade pigmentation and hydrate.",
        "pros": ["Fades dark spots fast, Beginner friendly, Non-greasy formula, Paraben-free"],
        "cons": ["Requires consistent sunscreen use, Scent may be too mild for some"],
        "rating": 4,
        "isFeatured": false,
        "tags": ["Top Rated","Trending"],
        "bestFor": "Dark Spots & Dullness",
        "strength": "Strong",
        "keyBenefit": "Brighter skin in just 5 days ✨",
        "verdict": "Expert Choice",
        "ingredients": "10% Vitamin C, 5% Niacinamide, Hyaluronic Acid, Glycolic Acid",
        "usage": "1. Cleanse face. 2. Apply 3-5 drops to face and neck. 3. Pat gently. 4. Follow with sunscreen.",
        "whyPicked": "It’s an Amazon #1 Best Seller that combines three powerhouse ingredients for under ₹550."
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
        "verdict": "Gold Standard",
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
        "verdict": "Daily Must-Have",
    },
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = products;
}
















