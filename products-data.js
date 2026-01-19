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
        "id": "product-1737270000001",
        "title": "Premium Leather Wallet for Men",
        "price": "₹1,299",
        "image": "https://m.media-amazon.com/images/I/71J8ZX8ZGXL._SX679_.jpg",
        "link": "https://amzn.to/sample1",
        "category": "Men"
    },
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

    // ADD NEW PRODUCTS BELOW THIS LINE
    // Paste code generated from product-bot.html here

];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = products;
}
