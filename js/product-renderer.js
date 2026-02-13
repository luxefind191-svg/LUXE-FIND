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
        // Robustness: Handle case where products might be undefined or not an array
        this.products = (typeof products !== 'undefined' && Array.isArray(products)) ? products : [];

        if (this.products.length === 0) {
            console.warn('ProductRenderer: No products found. Check products-data.js for syntax errors.');
        }
    }

    /**
     * Filter products by category
     */
    getFilteredProducts() {
        if (this.category === 'all') {
            return this.products;
        }
        return this.products.filter(product =>
            Array.isArray(product.category)
                ? product.category.some(c => c.toLowerCase() === this.category.toLowerCase())
                : product.category.toLowerCase() === this.category.toLowerCase()
        );
    }

    /**
     * Create a single product card HTML
     */
    createProductCard(product) {
        const categories = Array.isArray(product.category)
            ? product.category.join(' ').toLowerCase()
            : product.category.toLowerCase();

        // Badge logic
        let badgeHTML = '';
        if (product.tags && product.tags.includes('Top Rated')) {
            badgeHTML = '<span class="badge-top-rated">Top Rated <i class="fas fa-star"></i></span>';
        } else if (product.tags && product.tags.includes('Trending')) {
            badgeHTML = '<span class="badge-trending">Trending 🔥</span>';
        } else if (product.rating >= 4.7) {
            badgeHTML = '<span class="badge-top-rated">Highly Rated</span>';
        }

        return `
            <div class="product-card" data-category="${categories}">
                ${badgeHTML}
                <div class="product-img-wrapper">
                    <img 
                        src="${product.image}" 
                        alt="${product.title}"
                        loading="lazy"
                        onerror="this.src='https://via.placeholder.com/400x400/f5f5f5/222222?text=Image+Not+Found'"
                        class="product-image"
                    >
                </div>
                <div class="product-info">
                    <h4>${product.title}</h4>
                    <span class="price">${product.price}</span>
                    <p>${product.description ? product.description.substring(0, 80) + '...' : ''}</p>
                    <a 
                        href="product-details.html?id=${product.id}" 
                        class="btn-buy"
                    >
                        View Details
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
            .map(product => {
                try {
                    // Validation: Ensure minimal required fields exist
                    if (!product || !product.id || !product.title || !product.price || !product.image) {
                        console.warn('Skipping invalid product:', product);
                        return '';
                    }
                    return this.createProductCard(product);
                } catch (err) {
                    console.error('Error rendering product:', product, err);
                    return '';
                }
            })
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

/**
 * LUXE FIND - Comparison Renderer
 * 
 * Dynamically renders the Expert Selection table
 */
class ComparisonRenderer {
    constructor(tableBodyId) {
        this.container = document.getElementById(tableBodyId);
        this.products = (typeof products !== 'undefined' && Array.isArray(products)) ? products : [];
    }

    render() {
        if (!this.container) return;

        const featuredProducts = this.products.filter(p => p.isFeatured);

        if (featuredProducts.length === 0) {
            this.container.innerHTML = '<tr><td colspan="5" style="text-align: center;">Update products-data.js to feature items in this section.</td></tr>';
            return;
        }

        const rowsHTML = featuredProducts.map(product => {
            return `
                <tr>
                    <td>
                        <div class="comp-product">
                            <img src="${product.image}" alt="${product.title}">
                            <span>${product.title}</span>
                        </div>
                    </td>
                    <td>${product.bestFor || 'Expert Choice'}</td>
                    <td><span class="stars"><i class="fas fa-star"></i> ${product.rating || '5.0'}</span></td>
                    <td><span class="badge" style="${product.verdict === 'Top Choice' ? 'background: var(--accent-gold); color: black;' : ''}">${product.verdict || 'Highly Rated'}</span></td>
                    <td><a href="product-details.html?id=${product.id}" class="btn-buy" style="padding: 0.5rem 1rem; font-size: 0.7rem;">Details</a></td>
                </tr>
            `;
        }).join('');

        this.container.innerHTML = rowsHTML;
    }
}

// Auto-initialize if containers exist
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Product Grid
    const productContainer = document.getElementById('products-container');
    if (productContainer) {
        const categoryAttr = productContainer.getAttribute('data-category');
        const urlParams = new URLSearchParams(window.location.search);
        const categoryParam = urlParams.get('category');
        const category = categoryParam || categoryAttr || 'all';

        const renderer = new ProductRenderer('products-container', category);
        renderer.render();
        window.productRenderer = renderer;
    }

    // Initialize Comparison Table
    const comparisonContainer = document.getElementById('comparison-body');
    if (comparisonContainer) {
        const compRenderer = new ComparisonRenderer('comparison-body');
        compRenderer.render();
        window.comparisonRenderer = compRenderer;
    }
});
