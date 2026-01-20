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
        "id": "product-1737270000002",
        "title": "Luxury Watch for Men",
        "price": "₹4,999",
        "image": "https://m.media-amazon.com/images/I/71VATRlVhJL._SX679_.jpg",
        "link": "https://amzn.to/sample2",
        "category": "Men"
    },
    {
        "id": "product-1737270000003",
        "title": "Designer Handbag for Women",
        "price": "₹2,499",
        "image": "https://m.media-amazon.com/images/I/81fJP-XqgBL._SY695_.jpg",
        "link": "https://amzn.to/sample3",
        "category": "Women"
    },
    {
        "id": "product-1737270000004",
        "title": "Elegant Perfume for Women",
        "price": "₹1,899",
        "image": "https://m.media-amazon.com/images/I/51VvVXr8AFL._SX679_.jpg",
        "link": "https://amzn.to/sample4",
        "category": "Women"
    },
    {
        "id": "product-1768830108042",
        "title": "Muuchstac Ocean Face Wash for Men | Fight Acne & Pimples, Brighten Skin, Clears Dirt, Oil Control, Refreshing Feel - Multi-Action Formula",
        "price": "₹290",
        "image": "https://m.media-amazon.com/images/I/81EGvt3MtGL._SL1500_.jpg",
        "link": "https://amzn.to/4jNXhHy",
        "category": "Men"
    },
        {
        "id": "product-1768918336933",
        "title": "Lakme Sun Expert Tinted Sunscreen 50 SPF PA+++, Natural Tone, With Cucumber, Lightweight, Ultra Matte Finish, Blocks Upto 97% Harmful Sunrays",
        "price": "₹390",
        "image": "https://m.media-amazon.com/images/I/61aXIO7GHWL._SL1000_.jpg",
        "link": "https://amzn.to/3NpMbfP",
        "category": "Women"
    },
];


// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = products;
}




