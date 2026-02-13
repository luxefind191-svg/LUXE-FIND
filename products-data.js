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
        "id": "product-1",
        "title": "Midnight Elixir Serum",
        "price": "₹11,999",
        "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600",
        "link": "#",
        "category": ["Women"],
        "description": "A rejuvenating night serum that restores youthful glow and hydrates deeply.",
        "pros": ["Visible anti-aging results", "Suitable for sensitive skin", "Premium glass packaging"],
        "cons": ["High price point", "Fragrance might be strong for some"],
        "rating": 4.8,
        "isFeatured": true,
        "bestFor": "Anti-Aging",
        "verdict": "Top Choice"
    },
    {
        "id": "product-2",
        "title": "Royal Oud Cologne",
        "price": "₹17,499",
        "image": "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=600",
        "link": "#",
        "category": ["Men"],
        "description": "A sophisticated blend of rare woods and spices for a lasting, premium scent.",
        "pros": ["Long-lasting sillage", "Complex rare ingredients", "Elegant bottle design"],
        "cons": ["Bold scent not for casual use"],
        "rating": 4.9,
        "isFeatured": true,
        "bestFor": "Long-Lasting Scent",
        "verdict": "Must Have"
    },
    {
        "id": "product-3",
        "title": "Gold Luster Face Cream",
        "price": "₹15,299",
        "image": "https://images.unsplash.com/photo-1611080626919-7cf5a9dcab5b?auto=format&fit=crop&q=80&w=600",
        "link": "#",
        "category": ["Women"],
        "description": "Infused with 24k gold particles for an instant lifting and brightening effect.",
        "pros": ["Instant luminosity", "Hydration lasts 24h", "24k gold infusion"],
        "cons": ["Heavy texture on oily skin"],
        "rating": 4.7,
        "isFeatured": false,
        "bestFor": "Radiance",
        "verdict": "Premium Quality"
    },
    {
        "id": "product-4",
        "title": "Silk Finish Hair Oil",
        "price": "₹6,999",
        "image": "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=600",
        "link": "#",
        "category": ["Men"],
        "description": "Weightless formula for mirror-like shine and frizz control.",
        "pros": ["Non-greasy finish", "Heat protection up to 230°C", "Adds immense shine"],
        "cons": ["Small volume for the price"],
        "rating": 4.6,
        "isFeatured": true,
        "bestFor": "Damage Repair",
        "verdict": "Budget Premium"
    },
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
        "id": "product-dandruff-1",
        "title": "Nizoral Anti-Dandruff Shampoo",
        "price": "₹450",
        "image": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=600",
        "link": "#",
        "category": ["Men", "Women"],
        "description": "Clinically proven antifungal formula with 2% Ketoconazole for stubborn flakes.",
        "pros": ["Clinically proven", "Stops itching fast", "Dermatologist recommended"],
        "cons": ["Harsher than daily shampoos"],
        "rating": 4.8,
        "isFeatured": true,
        "bestFor": "Persistent Flakes",
        "verdict": "Top Choice"
    },
    {
        "id": "product-dandruff-2",
        "title": "Head & Shoulders Supreme Scalp Care",
        "price": "₹280",
        "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=600",
        "link": "#",
        "category": ["Men", "Women"],
        "description": "Infused with Argan oil for soft, flake-free hair. Ideal for daily commuters.",
        "pros": ["Non-drying formula", "Great scent", "Infused with Argan oil"],
        "cons": ["Mild for severe cases"],
        "rating": 4.5,
        "isFeatured": true,
        "bestFor": "Soft Hair",
        "verdict": "Daily Essential"
    },
    {
        "id": "product-dandruff-3",
        "title": "Minimalist Anti-Dandruff Shampoo (3.5%)",
        "price": "₹499",
        "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600",
        "link": "#",
        "category": ["Men", "Women"],
        "description": "Exfoliates the scalp to remove oil and buildup. Perfect for urban pollution.",
        "pros": ["Scientifically formulated", "Exfoliates scalp", "Fragrance-free"],
        "cons": ["Simple packaging"],
        "rating": 4.7,
        "isFeatured": true,
        "bestFor": "Oily Scalp",
        "verdict": "Expert Review"
    },
    {
        "id": "product-dandruff-4",
        "title": "Mamaearth Tea Tree Shampoo",
        "price": "₹310",
        "image": "https://images.mamaearth.in/catalog/product/t/e/tea_tree_shampoo_1.jpg?format=auto&height=600",
        "link": "https://bitli.in/gcWJLUC",
        "category": ["Men", "Women"],
        "description": "Reduces Dandruff & Controls Oil | Soothes Scalp with Tea Tree and Ginger Oil.",
        "pros": ["Natural ingredients", "Soothes itchiness", "Sulfate-free"],
        "cons": ["Requires consistent use"],
        "rating": 4.6,
        "isFeatured": false,
        "bestFor": "Natural Care",
        "verdict": "Highly Rated"
    },
    {
        "id": "product-dandruff-5",
        "title": "Bare Anatomy Anti-Dandruff Shampoo",
        "price": "₹450",
        "image": "https://images.unsplash.com/photo-1626783416763-67a92fe5bb7a?auto=format&fit=crop&q=80&w=600",
        "link": "#",
        "category": ["Men", "Women"],
        "description": "Targets 100% dandruff reduction while hydrating and strengthening hair.",
        "pros": ["Salon-like finish", "Reduces frizz", "Intense hydration"],
        "cons": ["Fragrance might be strong"],
        "rating": 4.6,
        "isFeatured": false,
        "bestFor": "Frizzy Hair",
        "verdict": "Premium Quality"
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = products;
}


