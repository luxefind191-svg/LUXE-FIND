/**
 * LUXE FIND - Products Database
 * 
 * This file contains all affiliate products for your website.
 * Products are organized by category (Men, Women).
 * 
 * HOW TO ADD NEW PRODUCTS:
 * 1. Use product-bot.html to generate product code
 * 2. Paste the generated code inside the products array below
 * 3. Make sure to add a comma after each product object
 * 4. Save and commit to GitHub
 */

const products = [
    // --- CATEGORY 1: ANTI-DANDRUFF ---
    {
        "id": "dandruff-nizoral",
        "title": "Nizoral Anti-Dandruff Shampoo",
        "price": "₹450",
        "image": "https://m.media-amazon.com/images/I/71R7U7l1-YL._SL1500_.jpg",
        "link": "https://amzn.to/3...",
        "category": ["Anti-Dandruff"],
        "description": "Clinically proven formula with 2% Ketoconazole. Best for stubborn flakes.",
        "pros": ["Antifungal formula", "Clinically proven", "Dermatologist choice"],
        "cons": ["Small bottle size"],
        "rating": 4.8,
        "isFeatured": true,
        "tags": ["Top Rated"],
        "bestFor": "Persistent Flakes",
        "verdict": "Expert Choice"
    },
    {
        "id": "dandruff-hs",
        "title": "Head & Shoulders Supreme",
        "price": "₹280",
        "image": "https://m.media-amazon.com/images/I/51w7-A6-9TL._SL1000_.jpg",
        "link": "https://amzn.to/3...",
        "category": ["Anti-Dandruff"],
        "description": "Infused with Argan oil for soft, flake-free hair. Great for daily commuters.",
        "pros": ["Non-drying", "Smells amazing", "Argan infused"],
        "cons": ["Fragrance might be strong"],
        "rating": 4.5,
        "isFeatured": true,
        "tags": ["Trending"],
        "bestFor": "Daily Use",
        "verdict": "Crowd Favorite"
    },
    {
        "id": "dandruff-bare",
        "title": "Bare Anatomy Anti-Dandruff Shampoo",
        "price": "₹450",
        "image": "https://m.media-amazon.com/images/I/61kGv6r5ZVL._SL1500_.jpg",
        "link": "#",
        "category": ["Anti-Dandruff"],
        "description": "Targets 100% dandruff reduction while hydrating and strengthening hair.",
        "pros": ["Salon-like finish", "Reduces frizz", "Intense hydration"],
        "cons": ["Fragrance might be strong"],
        "rating": 4.6,
        "isFeatured": false,
        "tags": [],
        "bestFor": "Frizzy Hair",
        "verdict": "Premium Quality"
    },

    // --- CATEGORY 2: HAIR GROWTH ---
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
        "verdict": "Best Results"
    },
    {
        "id": "growth-thrive",
        "title": "ThriveCo Hair Growth Serum 2.0",
        "price": "₹899",
        "image": "https://m.media-amazon.com/images/I/61DIsj6I-uL._SL1500_.jpg",
        "link": "https://amzn.to/3...",
        "category": ["Hair Growth"],
        "description": "Clinically proven to reduce hair fall and boost regrowth with Redensyl.",
        "pros": ["Premium formula", "Fast absorbing", "Safe for colored hair"],
        "cons": ["Higher price point"],
        "rating": 4.6,
        "isFeatured": true,
        "tags": ["Trending"],
        "bestFor": "Severe Hair Fall",
        "verdict": "Premium Choice"
    },

    // --- CATEGORY 3: OIL CONTROL ---
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
        "verdict": "Expert Review"
    },
    {
        "id": "oil-redken",
        "title": "Redken Amino Mint Shampoo",
        "price": "₹1,850",
        "image": "https://m.media-amazon.com/images/I/51G+v+v+v+L._SL1500_.jpg",
        "link": "#",
        "category": ["Oil Control"],
        "description": "pH-balanced formula with Peppermint to refresh and clean oily scalps.",
        "pros": ["Soothes scalp", "Salon quality", "Prevents greasiness"],
        "cons": ["Pricey"],
        "rating": 4.7,
        "isFeatured": false,
        "tags": ["Trending"],
        "bestFor": "Scalp Refresh",
        "verdict": "Luxury Choice"
    },

    // --- CATEGORY 4: ACNE & PIMPLES ---
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
        "verdict": "Must-Have"
    },
    {
        "id": "acne-drrashel",
        "title": "Dr. Rashel Neem Pimple Patch",
        "price": "₹240",
        "image": "https://m.media-amazon.com/images/I/71v-v+v+v+L._SL1500_.jpg",
        "link": "#",
        "category": ["Acne & Pimples"],
        "description": "Natural Neem extracts and Salicylic acid for effective antibacterial care.",
        "pros": ["Antibacterial", "Natural extracts", "Affordable"],
        "cons": ["Slightly thicker than COSRX"],
        "rating": 4.5,
        "isFeatured": false,
        "tags": ["Trending"],
        "bestFor": "Bacterial Acne",
        "verdict": "Natural Option"
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
        "cons": ["Starts showing in 4 weeks"],
        "rating": 4.7,
        "isFeatured": true,
        "tags": ["Top Rated"],
        "bestFor": "Pore Refinement",
        "verdict": "Glow Essential"
    },
    {
        "id": "glass-laneige",
        "title": "Laneige Blue Hyaluronic Serum",
        "price": "₹3,400",
        "image": "https://m.media-amazon.com/images/I/51B-v+v+v+L._SL1500_.jpg",
        "link": "#",
        "category": ["Glass Skin / Brightening"],
        "description": "Intense hydration serum with micro-sized hyaluronic acid for a dewy look.",
        "pros": ["Ultra-hydrating", "Micro-sized HA", "Premium packaging"],
        "cons": ["Very high price"],
        "rating": 4.8,
        "isFeatured": true,
        "tags": ["Trending"],
        "bestFor": "Deep Hydration",
        "verdict": "Ultimate Luxury"
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
        "pros": ["Best selling globally", "Smells amazing", "Deep repair"],
        "cons": ["Expensive for a lip mask"],
        "rating": 4.9,
        "isFeatured": true,
        "tags": ["Top Rated"],
        "bestFor": "Chapped Lips",
        "verdict": "Luxury Care"
    },
    {
        "id": "lip-wishcare",
        "title": "Wishcare Ceramide Lip Balm SPF 50",
        "price": "₹299",
        "image": "https://m.media-amazon.com/images/I/61B-v+v+v+L._SL1500_.jpg",
        "link": "#",
        "category": ["Lip Care"],
        "description": "High sun protection and ceramide repair for daily lip health.",
        "pros": ["SPF 50 protection", "Ceramide repair", "No white cast"],
        "cons": ["Basic scent"],
        "rating": 4.6,
        "isFeatured": false,
        "tags": ["Trending"],
        "bestFor": "Sun Protection",
        "verdict": "Daily Essential"
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = products;
}


