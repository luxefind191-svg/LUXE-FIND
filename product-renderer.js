/**
 * LUXE FIND - Product Renderer
 * 
 * Dynamically renders product cards from products-data.js
 * Supports category filtering and lazy loading
 */

class ProductRenderer {
    constructor(containerId, category = 'all') {
        this.container = document.getElementById(containerId);
        this.category = category;
        this.products = typeof products !== 'undefined' ? products : [];
    }

    /**
     * Filter products by category
     */
    getFilteredProducts() {
        if (this.category === 'all') {
            return this.products;
        }
        return this.products.filter(product =>
            product.category.toLowerCase() === this.category.toLowerCase()
        );
    }

    /**
     * Create a single product card HTML
     */
    createProductCard(product) {
        return `
            <div class="product-card" data-category="${product.category}">
                <div class="product-image-wrapper">
                    <img 
                        src="${product.image}" 
                        alt="${product.title}"
                        class="product-image"
                        loading="lazy"
                        onerror="this.src='https://via.placeholder.com/400x400/0a0a0a/d4af37?text=Image+Not+Found'"
                    >
                    <span class="product-category-badge">${product.category}</span>
                </div>
                <div class="product-content">
                    <h3 class="product-title">${product.title}</h3>
                    <div class="product-price">${product.price}</div>
                    <a 
                        href="${product.link}" 
                        class="product-btn"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                    >
                        Buy on Amazon
                    </a>
                </div>
            </div>
        `;
    }

    /**
     * Render all products to the container
     */
    render() {
        if (!this.container) {
            console.error('Product container not found!');
            return;
        }

        const filteredProducts = this.getFilteredProducts();

        if (filteredProducts.length === 0) {
            this.container.innerHTML = `
                <div class="no-products">
                    <p>No products found in this category.</p>
                </div>
            `;
            return;
        }

        const productsHTML = filteredProducts
            .map(product => this.createProductCard(product))
            .join('');

        this.container.innerHTML = productsHTML;

        // Add fade-in animation
        this.animateCards();
    }

    /**
     * Animate product cards on load
     */
    animateCards() {
        const cards = this.container.querySelectorAll('.product-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'all 0.5s ease';

                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 50);
            }, index * 100);
        });
    }

    /**
     * Update category filter and re-render
     */
    setCategory(category) {
        this.category = category;
        this.render();
    }
}

/**
 * Initialize product renderer on page load
 * 
 * USAGE EXAMPLES:
 * 
 * 1. Show all products:
 *    const renderer = new ProductRenderer('products-container', 'all');
 *    renderer.render();
 * 
 * 2. Show only Men products:
 *    const renderer = new ProductRenderer('products-container', 'men');
 *    renderer.render();
 * 
 * 3. Show only Women products:
 *    const renderer = new ProductRenderer('products-container', 'women');
 *    renderer.render();
 */

// Auto-initialize if container exists
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('products-container');

    if (container) {
        // Get category from data attribute or URL parameter
        const categoryAttr = container.getAttribute('data-category');
        const urlParams = new URLSearchParams(window.location.search);
        const categoryParam = urlParams.get('category');

        const category = categoryParam || categoryAttr || 'all';

        const renderer = new ProductRenderer('products-container', category);
        renderer.render();

        // Make renderer globally accessible for filtering
        window.productRenderer = renderer;
    }
});
