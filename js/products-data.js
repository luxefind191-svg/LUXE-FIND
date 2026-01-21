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
    // Sample Products - Replace with your actual products
    {
        "id": "product-1",
        "title": "Midnight Elixir Serum",
        "price": "₹11,999",
        "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600",
        "link": "#",
        "category": ["Women"],
        "description": "A rejuvenating night serum that restores youthful glow and hydrates deeply."
    },
    {
        "id": "product-2",
        "title": "Royal Oud Cologne",
        "price": "₹17,499",
        "image": "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=600",
        "link": "#",
        "category": ["Men"],
        "description": "A sophisticated blend of rare woods and spices for a lasting, premium scent."
    },
    {
        "id": "product-3",
        "title": "Gold Luster Face Cream",
        "price": "₹15,299",
        "image": "https://images.unsplash.com/photo-1611080626919-7cf5a9dcab5b?auto=format&fit=crop&q=80&w=600",
        "link": "#",
        "category": ["Women"],
        "description": "Infused with 24k gold particles for an instant lifting and brightening effect."
    },
    {
        "id": "product-4",
        "title": "Silk Finish Hair Oil",
        "price": "₹6,999",
        "image": "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=600",
        "link": "#",
        "category": ["Men"],
        "description": "Weightless formula for mirror-like shine and frizz control."
    },

    // ADD NEW PRODUCTS BELOW THIS LINE
    // Paste code generated from product-bot.html here
    {
        "id": "product-1737402800000",
        "title": "Muuchstac Ocean Face Wash for Men",
        "price": "₹290",
        "image": "https://m.media-amazon.com/images/I/81EGvt3MtGL._SL1500_.jpg",
        "link": "https://amzn.to/4jS9P0C",
        "category": ["Men"],
        "description": "Fight Acne & Pimples, Brighten Skin, Clears Dirt, Oil Control, Refreshing Feel - Multi-Action Formula"
    },
    {
        "id": "product-1768974074718",
        "title": "Lakme Sun Expert Tinted Sunscreen 50 SPF PA+++,",
        "price": "₹390",
        "image": "https://m.media-amazon.com/images/I/61aXIO7GHWL._SL1000_.jpg",
        "link": "https://amzn.to/3LKARua",
        "category": ["Women"],
        "description": "Natural Tone, With Cucumber, Lightweight, Ultra Matte Finish, Blocks Upto 97% Harmful Sunrays, 100 ml"
    },
        {
        "id": "product-1768977482993",
        "title": "Onion Hair Oil with Onion Oil & Redensyl for Hair Fall Control - 250 ml",
        "price": "₹533",
        "image": "https://images.mamaearth.in/catalog/product/_/o/_onion-oil-250ml__1_1_1.jpeg?format=auto&height=600",
        "link": "https://bitli.in/oViDlD2",
        "category": ["Men","Women"],
        "description": "Boosts Hair Growth | Adds Strength & Shine"
    },
        {
        "id": "product-1768977847541",
        "title": "Rosemary Anti-Hair Fall Conditioner with Rosemary & Methi Dana for Reducing Hair Loss & Breakage - 250 ml",
        "price": "₹272",
        "image": "https://images.mamaearth.in/catalog/product/w/i/with_claim.jpg?format=auto&height=600",
        "link": "https://bitli.in/pIj2kIy",
        "category": ["Men","Women"],
        "description": "Gives up to 94% Stronger Hair| Up to 94% Smoother Hair| Made Safe Certified
4.8 ★55 Reviews"
    },
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = products;
}



