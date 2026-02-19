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
            // Update titles
            const displayCat = this.category.charAt(0).toUpperCase() + this.category.slice(1).replace(/-/g, ' ');
            document.title = `Best ${displayCat} Solutions In India (2026) | LUXE FIND`;

            // Handle direct linking via hash (if not already handled by strict script)
            this.handleHashScroll();
        }
    }

    /**
     * Smoothly scroll to the hash element if it exists
     */
    handleHashScroll() {
        const hash = window.location.hash;
        if (!hash) return;

        // Multi-stage check to ensure layout is ready
        const performScroll = () => {
            let target = null;

            // SPECIAL CASES: Hero Navigation Buttons
            if (hash === '#editors-pick-featured' || hash === '#compare-prices-table') {
                // Find visible category section (Robust check for new .cat-section wrapper)
                const activeCatSection = Array.from(document.querySelectorAll('.cat-section'))
                    .find(s => window.getComputedStyle(s).display !== 'none');

                if (activeCatSection) {
                    const activeSection = activeCatSection.querySelector('.category-data-section');
                    if (activeSection) {
                        if (hash === '#editors-pick-featured') {
                            target = activeSection.querySelector('.featured-dominance');
                        } else {
                            target = activeSection.querySelector('.money-table-container');
                        }
                    }
                }
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

                // Visual feedback highlight (Active Glow)
                target.classList.add('highlight-glow');

                // Remove highlight after animation (2s)
                setTimeout(() => {
                    target.classList.remove('highlight-glow');
                }, 2000);
            }
        };

        // If page is already loaded, run immediately, else wait
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

    // Toggle active class
    details.classList.toggle('active');

    // Update button text logic (optional but good for UX)
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
    const categoryParam = urlParams.get('type') || 'all';

    const renderer = new ProductRenderer(categoryParam);
    renderer.render();
    window.productRenderer = renderer;

    // Listen for hash changes
    window.addEventListener('hashchange', () => {
        renderer.handleHashScroll();
    });

    // FORCE: Handle hero button clicks directly (bypass hashchange limitations)
    document.querySelectorAll('.hero-ctas a').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Give browser time to update hash, or just force it
            setTimeout(() => renderer.handleHashScroll(), 10);
        });
    });
});
