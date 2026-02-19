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
     * Helper to create a URL-safe slug from a product title
     */
    slugify(text) {
        return text
            .toString()
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '-')     // Replace spaces with -
            .replace(/[^\w-]+/g, '')     // Remove all non-word chars
            .replace(/--+/g, '-');    // Replace multiple - with single -
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
     * Create a single product card HTML with F-Pattern Layout
     */
    createProductCard(product) {
        const ctaText = "Check Price on Amazon";

        // Trust Signals
        const trustSignals = `
            <div class="trust-badge-group">
                <div class="trust-badge"><i class="fas fa-microscope"></i> Clinically Tested</div>
                <div class="trust-badge"><i class="fas fa-user-md"></i> Derm Recommended</div>
            </div>
        `;

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
                        <a href="${product.link}" target="_blank"><h4>${product.title}</h4></a>
                        <ul class="product-features">
                            ${product.pros ? product.pros.slice(0, 3).map(p => `<li>${p}</li>`).join('') : `<li>${product.keyBenefit || 'High-performance formula'}</li>`}
                        </ul>
                        <div class="price-callout">${product.price}</div>
                    </div>
                </div>
                ${trustSignals}
                <a href="${product.link}" target="_blank" class="btn-buy-now">
                    ${ctaText}
                </a>
            </div>
        `;
    }

    /**
     * Render the extreme conversion landing page structure
     */
    renderMoneyPage() {
        const filtered = this.getFilteredProducts();
        if (filtered.length === 0) return;

        const displayCat = this.category.charAt(0).toUpperCase() + this.category.slice(1);

        // --- HERO SECTION UPDATES ---
        const categoryHooks = {
            'Anti-Dandruff': {
                headline: 'Stop Dandruff in 14 Days',
                agitation: 'Clinically backed solutions for the "Indian Triple Threat": Humidity, Pollution, and Hard Water.'
            },
            'Hair Growth': {
                headline: 'Grow Hair Faster: 2026 Guide',
                agitation: 'The most effective actives to stimulate follicles and boost hair density naturally.'
            },
            'Acne & Pimples': {
                headline: 'Clear Acne Cycles Fast',
                agitation: 'Professional treatments that target active breakouts without damaging your skin barrier.'
            },
            'Glass Skin / Brightening': {
                headline: 'Achieve Glass Skin Clarity',
                agitation: 'Deep hydrating serums and pore-refiners for that translucent, dewy Indian glow.'
            }
        };

        const hook = categoryHooks[this.category] || {
            headline: `Struggling With ${displayCat}?`,
            agitation: `We’ve researched and shortlisted the most effective products for ${this.category.toLowerCase()}.`
        };

        const heroH1 = document.getElementById('hero-headline');
        const heroP = document.getElementById('hero-agitation');
        if (heroH1) heroH1.innerText = hook.headline;
        if (heroP) heroP.innerText = hook.agitation;
        document.title = `Best ${displayCat} Solutions In India (2026) | LUXE FIND`;

        const targetId = `cat-section-${this.category.toLowerCase().replace(/ /g, '-')}`;
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            // Logic handled by renderHardcodedPage
            return;
        }

        // --- DYNAMIC RENDERING FALLBACK ---
        const editorsPick = [...filtered].sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0) || b.rating - a.rating)[0];
        const alternatives = filtered.filter(p => p.id !== editorsPick.id).slice(0, 3);

        const epContainer = document.getElementById('featured-product-container');
        if (epContainer && editorsPick) {
            epContainer.innerHTML = `
                <div class="featured-box" id="${this.slugify(editorsPick.title)}">
                    <div class="ep-image-wrapper">
                        <a href="${editorsPick.link}" target="_blank">
                            <img src="${editorsPick.image}" alt="${editorsPick.title}">
                        </a>
                    </div>
                    <div class="ep-content">
                        <div class="stars" style="color: var(--accent-gold); margin-bottom: 10px;">
                            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                        </div>
                        <h2 style="font-family: var(--font-body); font-weight: 800;">${editorsPick.title}</h2>
                        <ul class="ep-benefits">
                            <li><i class="fas fa-check"></i> <span><b>Best For:</b> ${editorsPick.bestFor}</span></li>
                            <li><i class="fas fa-check"></i> <span><b>Benefit:</b> ${editorsPick.keyBenefit}</span></li>
                            <li><i class="fas fa-check"></i> <span><b>Verdict:</b> ${editorsPick.verdict}</span></li>
                        </ul>
                        <div class="price-callout" style="margin-bottom: 2rem;">${editorsPick.price}</div>
                        <a href="${editorsPick.link}" target="_blank" class="btn-buy-now" style="background: var(--accent-emerald); display: block; width: 100%;">
                            Check Price on Amazon
                        </a>
                    </div>
                </div>
            `;
        }

        const altGrid = document.getElementById('alternatives-grid');
        if (altGrid) {
            altGrid.innerHTML = alternatives.map(p => this.createProductCard(p)).join('');
        }
    }

    /**
     * Render the hardcoded page by showing the correct section
     */
    renderHardcodedPage() {
        // Hide all
        document.querySelectorAll('.category-data-section').forEach(section => {
            section.style.display = 'none';
        });

        const targetSectionId = `cat-section-${this.category.toLowerCase().replace(/ /g, '-')}`;
        const targetSection = document.getElementById(targetSectionId);

        if (targetSection) {
            targetSection.style.display = 'block';
        }

        // Update titles
        const displayCat = this.category.charAt(0).toUpperCase() + this.category.slice(1);
        document.title = `Best ${displayCat} Solutions In India (2026) | LUXE FIND`;

        // Finalize auto-scroll for hash
        this.handleHashScroll();
    }

    /**
     * Render the page or fallback
     */
    render() {
        if (document.querySelectorAll('.category-data-section').length > 0) {
            this.renderHardcodedPage();
            return;
        }

        if (document.getElementById('alternatives-grid')) {
            this.renderMoneyPage();
            return;
        }

        if (this.container) {
            const filteredProducts = this.getFilteredProducts();
            this.container.innerHTML = filteredProducts.map(p => this.createProductCard(p)).join('');
            this.animateCards();
        }
    }

    /**
     * Smoothly scroll to the hash element if it exists
     */
    handleHashScroll() {
        const hash = window.location.hash;
        if (!hash) return;

        // Use requestAnimationFrame for smoother scroll handling after DOM updates
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

                target.style.boxShadow = '0 0 30px rgba(5, 150, 105, 0.4)';
                setTimeout(() => {
                    target.style.boxShadow = '';
                }, 2000);
            }
        });
    }

    /**
     * Animate product cards on load
     */
    animateCards() {
        const grid = document.getElementById('alternatives-grid') || this.container;
        if (!grid) return;

        const cards = grid.querySelectorAll('.product-card');
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

    setCategory(category) {
        this.category = category;
        this.render();
    }
}

/**
 * Initialize product renderer on page load
 */
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Product Grid
    const productContainer = document.getElementById('products-container');
    const altGrid = document.getElementById('alternatives-grid');

    if (productContainer || altGrid) {
        const targetId = altGrid ? 'alternatives-grid' : 'products-container';
        const container = document.getElementById(targetId);
        const categoryAttr = container.getAttribute('data-category');
        const urlParams = new URLSearchParams(window.location.search);
        const categoryParam = urlParams.get('type'); // Changed from 'category' to 'type' to match nav links
        const category = categoryParam || categoryAttr || 'all';

        const renderer = new ProductRenderer(targetId, category);
        renderer.render();
        window.productRenderer = renderer;

        // Also listen for hash changes
        window.addEventListener('hashchange', () => {
            renderer.handleHashScroll();
        });
    }

    // Initialize Comparison Table (Global one if exists)
    const comparisonContainer = document.getElementById('comparison-body');
    if (comparisonContainer) {
        const compRenderer = new ComparisonRenderer('comparison-body');
        compRenderer.render();
        window.comparisonRenderer = compRenderer;
    }
});
