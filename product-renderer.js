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
     * Create a single product card HTML with Money Page enhancements
     */
    createProductCard(product, isAlternative = true) {
        const categories = Array.isArray(product.category)
            ? product.category.join(' ').toLowerCase()
            : product.category.toLowerCase();

        // Badge logic
        let badgeHTML = '';
        if (product.tags && product.tags.includes('Top Rated')) {
            badgeHTML = '<span class="badge-top-rated">Top Rated <i class="fas fa-star"></i></span>';
        } else if (product.tags && product.tags.includes('Trending')) {
            badgeHTML = '<span class="badge-trending">Trending 🔥</span>';
        }

        const ctaText = Math.random() > 0.5 ? "See Today's Offer" : "Check Latest Price";

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
                    <p style="font-size: 0.75rem; color: var(--accent-gold); font-weight: 700; margin-bottom: 5px; text-transform: uppercase;">
                        ✔ Best For: ${product.bestFor || 'Expert Choice'}
                    </p>
                    <h4 style="margin-bottom: 10px;">${product.title}</h4>
                    <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 5px;">
                        <b>Strength:</b> ${product.strength || 'Moderate'}
                    </p>
                    <p style="font-size: 0.85rem; margin-bottom: 1.5rem; line-height: 1.4;">
                        ${product.keyBenefit || product.description.substring(0, 60) + '...'}
                    </p>
                    <div class="price" style="margin-bottom: 1.5rem;">${product.price}</div>
                    <a 
                        href="${product.link}" 
                        class="btn-buy"
                        target="_blank"
                    >
                        ${ctaText}
                    </a>
                </div>
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

        // --- 1. HERO SECTION (Emotion First) ---
        const categoryHooks = {
            'Anti-Dandruff': {
                headline: '❌ Struggling With Embarrassing Flakes?',
                agitation: 'Clinically backed solutions that actually work — not just temporary fixes. Stop wasting money on products that leave your scalp dry and frustrated.'
            },
            'Hair Growth': {
                headline: '❌ Tired of Seeing Hair in the Drain?',
                agitation: 'Thinning hair isn’t just about looks; it’s about confidence. We’ve found the actives that actually stimulate follicles rather than just coating hair.'
            },
            'Acne & Pimples': {
                headline: '❌ Frustrated With Stubborn Acne?',
                agitation: 'Breakouts don’t just hurt your skin; they hurt your self-esteem. Stop the cycle of trying thousands of products that over-dry and irritate.'
            },
            'Glass Skin / Brightening': {
                headline: '❌ Dull, Uneven Skin Killing Your Glow?',
                agitation: 'You deserve the "Glass Skin" clarity. We’ve identified the serums that actually penetrate rather than just sitting on the surface.'
            },
            'Oil Control': {
                headline: '❌ Done With Greasy Skin & Clogged Pores?',
                agitation: 'Excess sebum shouldn’t ruin your day. Our research reveals the solutions that balance oil levels without stripping your barrier.'
            },
            'Lip Care': {
                headline: '❌ Chapped, Dark Lips Won’t Go Away?',
                agitation: 'Lip care is often the most neglected part of a routine. We’ve found the overnight healers that actually repair rather than just masking dryness.'
            }
        };

        const hook = categoryHooks[this.category] || {
            headline: `❌ Struggling With ${displayCat}?`,
            agitation: `We’ve researched and shortlisted the most effective products for ${this.category.toLowerCase()} based on ratings, ingredients, and real user results.`
        };

        const heroH1 = document.getElementById('hero-headline');
        const heroP = document.getElementById('hero-agitation');
        if (heroH1) heroH1.innerText = hook.headline;
        if (heroP) heroP.innerText = hook.agitation;
        document.title = `Best ${displayCat} Solutions in India (2026) | LUXE FIND`;

        // Update Meta
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.name = "description";
            document.head.appendChild(metaDesc);
        }
        metaDesc.content = `Stop struggling with ${this.category.toLowerCase()}. Discover the best expert-recommended solutions in India for 2026. Top-rated & clinically backed.`;

        // --- 2. SELECT FEATURED & ALTERNATIVES ---
        // Priority products as requested
        const priorityIds = {
            'Anti-Dandruff': 'dandruff-nizoral',
            'Acne & Pimples': 'acne-minimalist',
            'Hair Growth': 'hairfall-mamaearth',
            'Lip Care': 'lip-laneige',
            'Oil Control': 'oily-plum'
        };

        const targetFeaturedId = priorityIds[this.category];
        const editorsPick = filtered.find(p => p.id === targetFeaturedId) || [...filtered].sort((a, b) => b.rating - a.rating)[0];
        const alternatives = filtered.filter(p => p.id !== editorsPick.id).slice(0, 3); // Max 3 alternatives

        // --- 3. RENDER FEATURED (60% focus) ---
        const featuredTitle = document.getElementById('featured-title');
        if (featuredTitle) featuredTitle.innerText = `🏆 #1 Most Recommended for ${displayCat}`;

        const epContainer = document.getElementById('featured-product-container');
        if (epContainer && editorsPick) {
            epContainer.innerHTML = `
                <div class="featured-box">
                    <div class="ep-image-wrapper" style="background: white;">
                        <img src="${editorsPick.image}" alt="${editorsPick.title}" style="max-height: 450px;">
                    </div>
                    <div class="ep-content">
                        <span class="ep-headline" style="color: var(--accent-gold); font-size: 1.1rem; font-weight: 800;">TOP EXPERT CHOICE</span>
                        <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">${editorsPick.title}</h2>
                        <div class="price" style="font-size: 2.2rem; color: var(--accent-gold); font-weight: 700; margin-bottom: 2rem;">
                            ${editorsPick.price}
                        </div>
                        <ul class="ep-benefits" style="margin-bottom: 2rem;">
                            <li><i class="fas fa-check-circle"></i> <span><b>Best For</b> ${editorsPick.bestFor}</span></li>
                            <li><i class="fas fa-check-circle"></i> <span><b>Strength</b> ${editorsPick.strength} Formula</span></li>
                            <li><i class="fas fa-check-circle"></i> <span><b>Key Benefit</b> ${editorsPick.keyBenefit}</span></li>
                            <li><i class="fas fa-check-circle"></i> <span><b>Expectation</b> Visible results within 14 days of regular use.</span></li>
                        </ul>
                        <p style="color: #f44336; font-size: 0.85rem; font-weight: 700; margin-bottom: 1.5rem;">
                            ⚠ Prices & availability may change — check latest offer below.
                        </p>
                        <a href="${editorsPick.link}" target="_blank" class="cta-large" style="width: 100%; text-align: center;">
                            👉 Check Latest Price on Amazon
                        </a>
                    </div>
                </div>
            `;
        }

        // --- 4. RENDER ALTERNATIVES ---
        const altGrid = document.getElementById('alternatives-grid');
        if (altGrid) {
            altGrid.innerHTML = alternatives.map(p => this.createProductCard(p)).join('');
        }

        // --- 5. RENDER COMPARISON TABLE ---
        const tableBody = document.getElementById('comparison-table-body');
        if (tableBody) {
            const tableProducts = [editorsPick, ...alternatives];
            tableBody.innerHTML = tableProducts.map(p => `
                <tr>
                    <td>
                        <div class="table-product">
                            <img src="${p.image}" alt="${p.title}">
                            <span style="font-weight: 600; font-size: 0.9rem;">${p.title}</span>
                        </div>
                    </td>
                    <td style="font-size: 0.9rem;">${p.bestFor}</td>
                    <td style="font-size: 0.9rem;">${p.strength}</td>
                    <td style="font-weight: 700; color: var(--accent-gold);">${p.price}</td>
                    <td><a href="${p.link}" target="_blank" class="btn-buy" style="font-weight: 800; background: var(--primary-black); color: white;">Check Price</a></td>
                </tr>
            `).join('');
        }

        // --- 6. DECISION HELPER ---
        const helperContainer = document.getElementById('decision-logic-container');
        if (helperContainer) {
            helperContainer.innerHTML = `
                <div class="decision-box">
                    <h4>Severe Condition</h4>
                    <p style="font-size: 0.9rem; color: var(--text-muted);">Choose a <b>Strong</b> formula if you have persistent issues and previous products failed.</p>
                </div>
                <div class="decision-box">
                    <h4>Sensitive / Mild</h4>
                    <p style="font-size: 0.9rem; color: var(--text-muted);">Go for a <b>Moderate/Mild</b> formula for regular maintenance without irritation.</p>
                </div>
                <div class="decision-box">
                    <h4>Oily / Congested</h4>
                    <p style="font-size: 0.9rem; color: var(--text-muted);">Select <b>Targeted</b> options if you need specific spot treatment or oil control.</p>
                </div>
            `;
        }

        // --- 7. PSYCHOLOGICAL CLOSE ---
        const closeH2 = document.getElementById('close-headline');
        const closeP = document.getElementById('close-stakes');
        if (closeH2) closeH2.innerText = `⚠ ${displayCat} Won’t Fix Itself`;
        if (closeP) {
            closeP.innerText = `Ignoring ${this.category.toLowerCase()} leads to persistent frustration and loss of confidence. Take the first step toward visible results today.`;
        }
    }

    /**
     * Render all products or money page
     */
    render() {
        // If we are on a category page, use money page rendering
        if (document.getElementById('alternatives-grid')) {
            this.renderMoneyPage();
            return;
        }

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
    }

    // Initialize Comparison Table (Global one if exists)
    const comparisonContainer = document.getElementById('comparison-body');
    if (comparisonContainer) {
        const compRenderer = new ComparisonRenderer('comparison-body');
        compRenderer.render();
        window.comparisonRenderer = compRenderer;
    }
});
