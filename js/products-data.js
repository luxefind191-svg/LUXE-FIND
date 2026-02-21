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
        "verdict": "Best Results",
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
        "tags": ["Top Rated", "Trending"],
        "bestFor": "Oily Acne Skin",
        "strength": "Strong",
        "keyBenefit": "Exfoliates Pores",
        "verdict": "Expert Choice",
    },
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
        "verdict": "Glow Essential",
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
        "verdict": "Luxury Hydration",
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









