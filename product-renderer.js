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
     * Render the high-converting money page structure
     */
    renderMoneyPage() {
        if (!this.container && !document.getElementById('alternatives-grid')) return;

        const filtered = this.getFilteredProducts();
        if (filtered.length === 0) return;

        // 1. Update Authority Headline & Meta
        const titleEl = document.getElementById('category-title');
        const descEl = document.getElementById('category-description');
        const displayCat = this.category.charAt(0).toUpperCase() + this.category.slice(1);

        if (titleEl) {
            const headline = `Best ${displayCat} Solutions in India (2026)`;
            titleEl.innerText = headline;
            document.title = `${headline} | LUXE FIND`;

            // Update Meta Description
            let metaDesc = document.querySelector('meta[name="description"]');
            if (!metaDesc) {
                metaDesc = document.createElement('meta');
                metaDesc.name = "description";
                document.head.appendChild(metaDesc);
            }
            metaDesc.content = `Discover the best ${this.category.toLowerCase()} in India. Expert-curated, top-rated solutions for ${this.category.toLowerCase()}.`;
        }

        if (descEl) {
            descEl.innerText = `Struggling with ${this.category.toLowerCase()}? We've researched and shortlisted the most effective products based on ratings, ingredients, and real user results.`;
        }

        // 2. Select Editor's Pick (Highest Rated)
        const sorted = [...filtered].sort((a, b) => b.rating - a.rating);
        const editorsPick = sorted[0];
        const alternatives = sorted.slice(1, 5); // Limit to 4 alternatives

        // 3. Render Editor's Pick
        const epContainer = document.getElementById('editors-pick-container');
        if (epContainer && editorsPick) {
            epContainer.innerHTML = `
                <div class="editors-pick-card">
                    <div class="editors-pick-badge">
                        <i class="fas fa-crown"></i> Editor's Pick – Most Recommended
                    </div>
                    <div class="ep-image-wrapper">
                        <img src="${editorsPick.image}" alt="${editorsPick.title}">
                    </div>
                    <div class="ep-content">
                        <span class="ep-headline">Our #1 Recommendation</span>
                        <h2 style="font-size: 2.2rem; margin-bottom: 1rem;">${editorsPick.title}</h2>
                        <div class="price" style="font-size: 2.2rem; color: var(--accent-gold); font-weight: 700; margin-bottom: 1rem;">
                            ${editorsPick.price}
                        </div>
                        <ul class="ep-benefits">
                            <li><i class="fas fa-check-circle"></i> <span><b>Best For</b> ${editorsPick.bestFor || 'Deep Treatment'}</span></li>
                            <li><i class="fas fa-check-circle"></i> <span><b>Key Benefit</b> ${editorsPick.keyBenefit || 'Visible Transformation'}</span></li>
                            <li><i class="fas fa-check-circle"></i> <span><b>Why It Works</b> Clinically concentration of active ingredients for professional results.</span></li>
                        </ul>
                        <a href="${editorsPick.link}" target="_blank" class="ep-cta">
                            Check Latest Price on Amazon <i class="fas fa-external-link-alt" style="margin-left: 10px; font-size: 0.8rem;"></i>
                        </a>
                    </div>
                </div>
            `;
        }

        // 4. Render Alternatives Grid
        const altGrid = document.getElementById('alternatives-grid');
        if (altGrid) {
            altGrid.innerHTML = alternatives.map(p => this.createProductCard(p)).join('');
        }

        // 5. Render Comparison Table
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
                    <td style="font-size: 0.9rem;">${p.bestFor || '-'}</td>
                    <td style="font-size: 0.9rem;">${p.strength || 'Moderate'}</td>
                    <td style="font-weight: 700; color: var(--accent-gold);">${p.price}</td>
                    <td><a href="${p.link}" target="_blank" class="btn-buy">Check Price</a></td>
                </tr>
            `).join('');
        }
    }

    /**
     * Render all products to the container
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
