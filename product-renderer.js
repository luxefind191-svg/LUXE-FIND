/**
 * LUXE FIND - Product Renderer (Hard-Coded Version)
 * 
 * Handles category section visibility and smooth auto-scrolling
 */

class ProductRenderer {
    constructor(category = 'all', containerId = null) {
        this.category = category;
        this.container = containerId ? document.getElementById(containerId) : null;
        // Robustness: Handle case where products might be undefined or not an array
        this.products = (typeof products !== 'undefined' && Array.isArray(products)) ? products : [];
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
     * Create a single product card HTML
     */
    createProductCard(product) {
        if (!product) return '';
        const ctaText = "Check Price on Amazon";

        return `
            <div class="product-card" id="${this.slugify(product.title)}">
                <div class="product-card-top">
                    <div class="product-card-img-container">
                        <a href="${product.link}" target="_blank">
                            <img src="${product.image}" alt="${product.title}" class="product-card-img" loading="lazy">
                        </a>
                    </div>
                    <div class="product-card-meta">
                        <span class="best-for-tag">${product.bestFor || 'Expert Choice'}</span>
                        <h4>${product.title}</h4>
                        <div class="price-callout">${product.price}</div>
                    </div>
                </div>
                <a href="${product.link}" target="_blank" class="btn-buy-now">
                    ${ctaText}
                </a>
            </div>
        `;
    }

    /**
     * Show the correct hard-coded section and update page title
     */
    render() {
        // If we are on a page with hard-coded sections (category.html)
        if (document.querySelectorAll('.category-data-section').length > 0) {
            // Hide all category sections
            document.querySelectorAll('.category-data-section').forEach(section => {
                section.style.display = 'none';
            });

            // Show the targeted one
            const targetSectionId = `cat-section-${this.category.toLowerCase().replace(/ /g, '-')}`;
            const targetSection = document.getElementById(targetSectionId);

            if (targetSection) {
                targetSection.style.display = 'block';
            }

            // Update titles
            const displayCat = this.category.charAt(0).toUpperCase() + this.category.slice(1).replace(/-/g, ' ');
            document.title = `Best ${displayCat} Solutions In India (2026) | LUXE FIND`;

            // Handle direct linking via hash
            this.handleHashScroll();
        }
    }

    /**
     * Smoothly scroll to the hash element if it exists
     */
    handleHashScroll() {
        const hash = window.location.hash;
        if (!hash) return;

        // Use requestAnimationFrame for smoother scroll handling
        requestAnimationFrame(() => {
            const target = document.querySelector(hash);
            if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Visual feedback highlight
                target.style.boxShadow = '0 0 30px rgba(5, 150, 105, 0.4)';
                setTimeout(() => {
                    target.style.boxShadow = '';
                }, 2000);
            }
        });
    }
}

/**
 * Initialize on page load
 */
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('type') || 'all';

    const renderer = new ProductRenderer(categoryParam);
    renderer.render();
    window.productRenderer = renderer;

    // Listen for hash changes
    window.addEventListener('hashchange', () => {
        renderer.handleHashScroll();
    });
});
