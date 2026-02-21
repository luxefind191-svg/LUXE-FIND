/**
 * LUXE FIND - Product Renderer (Dynamic Version)
 * 
 * Handles category section generation, visibility, and smooth auto-scrolling.
 * Makes the website data-driven and easy to maintain.
 */

class ProductRenderer {
    constructor(category = 'all', containerId = 'dynamic-category-content') {
        this.category = decodeURIComponent(category);
        this.container = document.getElementById(containerId);
        // Robustness: Handle case where products might be undefined or not an array
        this.allProducts = (typeof products !== 'undefined' && Array.isArray(products)) ? products : [];
        this.categoryProducts = this.filterProducts();
    }

    filterProducts() {
        if (this.category.toLowerCase() === 'all') return this.allProducts;
        return this.allProducts.filter(p => {
            if (!p.category) return false;
            // Case-insensitive match for category strings or arrays
            const matchCat = this.category.toLowerCase();
            if (Array.isArray(p.category)) {
                return p.category.some(c => c.toLowerCase() === matchCat);
            } else if (typeof p.category === 'string') {
                return p.category.toLowerCase() === matchCat;
            }
            return false;
        });
    }

    /**
     * Helper to create a URL-safe slug from a product title
     */
    slugify(text) {
        if (!text) return '';
        return text
            .toString()
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '')
            .replace(/--+/g, '-');
    }

    /**
     * Generate Top Comparison Table
     */
    generateComparisonTable() {
        if (this.categoryProducts.length === 0) return '';

        const rows = this.categoryProducts.map(p => `
            <tr>
                <td data-label="Product Name">
                    <div class="prod-info">
                        <img src="${p.image}" alt="${p.title}">
                        <span class="prod-name">${p.title}</span>
                    </div>
                </td>
                <td data-label="Best For"><span class="strength-chip">${p.bestFor || 'Expert Choice'}</span></td>
                <td data-label="Price">${p.price}</td>
                <td data-label="Action"><a href="#${p.id || this.slugify(p.title)}" class="btn-table-buy">View Details</a></td>
            </tr>
        `).join('');

        return `
            <div id="compare-prices-table" class="money-table-container">
                <table class="money-table">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Best For</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rows}
                    </tbody>
                </table>
            </div>
        `;
    }

    /**
     * Generate Featured (Editor's Pick) Section
     */
    generateFeaturedSection() {
        const featured = this.categoryProducts.find(p => p.isFeatured) || this.categoryProducts[0];
        if (!featured) return '';

        return `
            <section class="featured-dominance" id="${featured.id || this.slugify(featured.title)}">
                <div class="section-header">
                    <span class="sub">Our #1 Recommendation</span>
                    <h2 style="font-size: clamp(2rem, 5vw, 2.8rem);">🏆 Best for ${featured.bestFor || 'Specific Concern'}</h2>
                </div>
                <div class="featured-box">
                    <div class="ep-image-wrapper">
                        <a href="${featured.link}" target="_blank">
                            <img src="${featured.image}" alt="${featured.title}">
                        </a>
                    </div>
                    <div class="ep-content">
                        <div class="stars">
                            ${this.generateStars(featured.rating)}
                            <span style="font-size: 0.8rem; color: var(--text-muted); margin-left: 5px;">(${featured.rating || '5.0'}/5)</span>
                        </div>
                        <h2 style="font-family: var(--font-body); font-weight: 800; margin: 10px 0;">${featured.title}</h2>
                        <ul class="ep-benefits">
                            ${(featured.pros || []).slice(0, 2).map(pro => `<li><i class="fas fa-check"></i> <span>${pro}</span></li>`).join('')}
                        </ul>
                        <div class="price-callout">${featured.price}</div>

                        <button class="btn-details-toggle" onclick="toggleDetails('details-featured')">🔍 View Full Details</button>
                        <div id="details-featured" class="product-details-content">
                            <div class="details-grid">
                                <div class="details-item">
                                    <h5><i class="fas fa-flask"></i> Key Ingredients</h5>
                                    <p>${featured.ingredients || featured.description}</p>
                                </div>
                                <div class="details-item">
                                    <h5><i class="fas fa-info-circle"></i> How to Use</h5>
                                    <p>${featured.usage || 'Refer to packaging for instructions.'}</p>
                                </div>
                                <div class="details-item why-we-picked">
                                    <h5><i class="fas fa-heart"></i> Why We Picked It</h5>
                                    <p>${featured.whyPicked || featured.description}</p>
                                </div>
                            </div>
                        </div>

                        <a href="${featured.link}" target="_blank" class="btn-buy-now" style="margin-top: 2rem;">Check Price on Amazon</a>
                    </div>
                </div>
            </section>
        `;
    }

    /**
     * Create a single reusable product card
     */
    createProductCard(p) {
        return `
            <div class="product-card" id="${p.id || this.slugify(p.title)}">
                <div class="product-card-top">
                    <div class="product-card-img-container">
                        <a href="${p.link}" target="_blank">
                            <img src="${p.image}" alt="${p.title}" class="product-card-img">
                        </a>
                    </div>
                    <div class="product-card-meta">
                        <div class="stars">${this.generateStars(p.rating)}</div>
                        <span class="best-for-tag">${p.bestFor || 'Expert Choice'}</span>
                        <h4>${p.title}</h4>
                        <div class="price-callout">${p.price}</div>
                        <button class="btn-details-toggle" onclick="toggleDetails('details-${p.id || this.slugify(p.title)}')">🔍 View Details</button>
                    </div>
                </div>
                <div id="details-${p.id || this.slugify(p.title)}" class="product-details-content">
                    <div class="details-grid">
                        <div class="details-item">
                            <h5>Ingredients</h5>
                            <p>${p.ingredients || p.description}</p>
                        </div>
                        <div class="details-item">
                            <h5>Why We Picked It</h5>
                            <p>${p.whyPicked || p.description}</p>
                        </div>
                    </div>
                </div>
                <a href="${p.link}" target="_blank" class="btn-buy-now">Check Price on Amazon</a>
            </div>
        `;
    }

    /**
     * Generate Alternatives Grid
     */
    generateAlternativesGrid() {
        const featured = this.categoryProducts.find(p => p.isFeatured) || this.categoryProducts[0];
        const alternatives = this.categoryProducts.filter(p => p !== featured);

        if (alternatives.length === 0) return '';

        const cards = alternatives.map(p => this.createProductCard(p)).join('');

        return `
            <section class="alternatives-container">
                <div class="section-header">
                    <h2>Expert-Approved Alternatives</h2>
                </div>
                <div class="product-grid">
                    ${cards}
                </div>
            </section>
        `;
    }

    /**
     * Generate Bottom Comparison Table
     */
    generateBottomTable() {
        if (this.categoryProducts.length === 0) return '';

        const rows = this.categoryProducts.map(p => `
            <tr>
                <td>${p.title}</td>
                <td><span class="strength-chip">${p.strength || 'Moderate'}</span></td>
                <td>${p.price}</td>
                <td><a href="${p.link}" target="_blank" class="btn-table-buy">Buy Now</a></td>
            </tr>
        `).join('');

        return `
            <div class="money-table-container active" style="margin-top: 5rem;">
                <div class="section-header">
                    <h2>Performance Comparison</h2>
                </div>
                <table class="money-table">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Strength</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rows}
                    </tbody>
                </table>
            </div>
        `;
    }

    /**
     * Helper: Generate Star Icons
     */
    generateStars(rating = 5) {
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) stars += '<i class="fas fa-star"></i>';
            else if (i - 0.5 <= rating) stars += '<i class="fas fa-star-half-alt"></i>';
            else stars += '<i class="far fa-star"></i>';
        }
        return stars;
    }

    /**
     * Main Render Method
     */
    render() {
        if (!this.container) return;

        // Clear existing
        this.container.innerHTML = '';

        if (this.categoryProducts.length === 0) {
            this.container.innerHTML = '<p style="text-align:center; padding: 5rem;">No products found for this category yet.</p>';
            return;
        }

        // Feature: Render simple grid for generic container
        if (this.container.classList.contains('products-container')) {
            this.container.innerHTML = `
                <div class="product-grid" style="display:grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 2rem; padding: 2rem 5%;">
                    ${this.categoryProducts.map(p => this.createProductCard(p)).join('')}
                </div>`;
            return;
        }

        // Build Full HTML
        const html = `
            ${this.generateComparisonTable()}
            ${this.generateFeaturedSection()}
            ${this.generateAlternativesGrid()}
        `;

        this.container.innerHTML = html;

        // Update titles
        const displayCat = this.category.charAt(0).toUpperCase() + this.category.slice(1).replace(/-/g, ' ');
        document.title = `Best ${displayCat} Solutions In India (2026) | LUXE FIND`;

        // Update Hero Headlines
        const headline = document.getElementById('hero-headline');
        const agitation = document.getElementById('hero-agitation');

        if (headline) headline.innerText = `Stop ${displayCat} in 14 Days`;
        if (agitation) agitation.innerText = `Expert-vetted solutions for ${displayCat}, specifically curated for the Indian beauty market.`;

        // Handle direct linking via hash
        setTimeout(() => this.handleHashScroll(), 300);
    }

    /**
     * Smoothly scroll to the hash element if it exists
     */
    handleHashScroll() {
        const hash = window.location.hash;
        if (!hash) return;

        const performScroll = () => {
            let target = null;

            if (hash === '#compare-prices-table') {
                target = document.getElementById('compare-prices-table') || document.querySelector('.money-table-container');
            } else if (hash === '#editors-pick-featured') {
                target = document.querySelector('.featured-dominance');
            } else {
                target = document.querySelector(hash);
            }

            if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                target.classList.add('highlight-glow');
                setTimeout(() => target.classList.remove('highlight-glow'), 2000);
            }
        };

        if (document.readyState === 'complete') {
            requestAnimationFrame(performScroll);
        } else {
            window.addEventListener('load', performScroll, { once: true });
        }
    }
}

/**
 * Toggle Expandable Product Details
 */
function toggleDetails(id) {
    const details = document.getElementById(id);
    if (!details) return;

    details.classList.toggle('active');

    const btn = details.previousElementSibling;
    if (btn && btn.classList.contains('btn-details-toggle')) {
        const isActive = details.classList.contains('active');
        btn.innerHTML = isActive ? '🔼 Close Details' : '🔍 View Full Details';
    }
}

/**
 * Initialize on page load
 */
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('type');

    if (categoryParam && document.getElementById('dynamic-category-content')) {
        const renderer = new ProductRenderer(categoryParam, 'dynamic-category-content');
        renderer.render();
        window.productRenderer = renderer;
    } else {
        // Find generic containers
        const genericContainers = document.querySelectorAll('.products-container[data-category]');
        genericContainers.forEach(container => {
            if (container.id) {
                const cat = container.getAttribute('data-category');
                const renderer = new ProductRenderer(cat, container.id);
                renderer.render();
                window.productRenderer = renderer; // Store the last one or provide a way to access multiple if needed
            }
        });
    }

    window.addEventListener('hashchange', () => {
        if (window.productRenderer) window.productRenderer.handleHashScroll();
    });

    document.querySelectorAll('.hero-ctas a').forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (window.productRenderer) setTimeout(() => window.productRenderer.handleHashScroll(), 10);
        });
    });
});
