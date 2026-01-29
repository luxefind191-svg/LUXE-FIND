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
 
    {
        "id": "product-1737402800000",
        "title": "Muuchstac Ocean Face Wash for Men",
        "price": "₹290",
        "image": "https://m.media-amazon.com/images/I/81EGvt3MtGL._SL1500_.jpg",
        "link": "https://amzn.to/4jS9P0C",
        "category": ["Men"],
        "description": "Fight Acne & Pimples, Brighten Skin, Clears Dirt, Oil Control, Refreshing Feel - Multi-Action Formula",
        "pros": ["Affordable effective cleansing", "Refreshing ocean scent", "Great for oily skin"],
        "cons": ["Strong for very dry skin types"],
        "rating": 4.5,
        "isFeatured": false,
        "bestFor": "Oily Skin",
        "verdict": "Value for Money"
    },
    {
        "id": "product-1768974074718",
        "title": "Lakme Sun Expert Tinted Sunscreen 50 SPF PA+++,",
        "price": "₹390",
        "image": "https://m.media-amazon.com/images/I/61aXIO7GHWL._SL1000_.jpg",
        "link": "https://amzn.to/3LKARua",
        "category": ["Women"],
        "description": "Natural Tone, With Cucumber, Lightweight, Ultra Matte Finish, Blocks Upto 97% Harmful Sunrays, 100 ml",
        "pros": ["Effective sun protection", "Matte finish", "Budget friendly"],
        "cons": ["Tint might not match all skin tones"],
        "rating": 4.4,
        "isFeatured": false,
        "bestFor": "Sun Protection",
        "verdict": "Daily Essential"
    },
    {
        "id": "product-1768977482993",
        "title": "Onion Hair Oil with Onion Oil & Redensyl for Hair Fall Control - 250 ml",
        "price": "₹533",
        "image": "https://images.mamaearth.in/catalog/product/_/o/_onion-oil-250ml__1_1_1.jpeg?format=auto&height=600",
        "link": "https://bitli.in/oViDlD2",
        "category": ["Men", "Women"],
        "description": "Boosts Hair Growth | Adds Strength & Shine",
        "pros": ["Strengthens roots", "Natural ingredients", "No harmful sulfates"],
        "cons": ["Strong onion scent (fades after wash)"],
        "rating": 4.6,
        "isFeatured": false,
        "bestFor": "Hair Fall",
        "verdict": "Natural Solution"
    },
    {
        "id": "product-1768977847541",
        "title": "Rosemary Anti-Hair Fall Conditioner with Rosemary & Methi Dana for Reducing Hair Loss & Breakage - 250 ml",
        "price": "₹272",
        "image": "https://images.mamaearth.in/catalog/product/w/i/with_claim.jpg?format=auto&height=600",
        "link": "https://bitli.in/pIj2kIy",
        "category": ["Men", "Women"],
        "description": "Gives up to 94% Stronger Hair| Up to 94% Smoother Hair",
        "pros": ["Makes hair intensely smooth", "Reduces breakage", "Safe for colored hair"],
        "cons": ["Requires consistent use for best results"],
        "rating": 4.7,
        "isFeatured": false,
        "bestFor": "Hair Loss",
        "verdict": "Highly Rated"
    },
    {
        "id": "product-1769090594694",
        "title": "Tea Tree Shampoo for Dandruff Free Hair - 250ml",
        "price": "₹310",
        "image": "https://images.mamaearth.in/catalog/product/t/e/tea_tree_shampoo_1.jpg?format=auto&height=600",
        "link": "https://bitli.in/gcWJLUC",
        "category": ["Men", "Women"],
        "description": "Reduces Dandruff & Controls Oil | Soothes Scalp",
        "pros": ["Effective dandruff control", "Soothes itchy scalp", "Refreshing tea tree scent"],
        "cons": ["Can be slightly drying if used daily"],
        "rating": 4.6,
        "isFeatured": false,
        "bestFor": "Dandruff Control",
        "verdict": "Expert Review"
    },
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = products;
}


