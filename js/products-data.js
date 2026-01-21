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

];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = products;
}
