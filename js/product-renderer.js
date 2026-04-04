/**
 * LUXE FIND - Product Renderer (Dynamic Version)
 * Handles category section generation, visibility, and smart guide filtering.
 */

class ProductRenderer {
    constructor(category = 'all', containerId = 'dynamic-category-content') {
        this.category = decodeURIComponent(category);
        this.container = document.getElementById(containerId);
        this.allProducts = (typeof products !== 'undefined' && Array.isArray(products)) ? products : [];
        this.categoryProducts = this.filterProducts();
    }

    filterProducts() {
        if (this.category.toLowerCase() === 'all') return this.allProducts;
        return this.allProducts.filter(p => {
            if (!p.category) return false;
            const matchCat = this.category.toLowerCase();
            if (Array.isArray(p.category)) {
                return p.category.some(c => c.toLowerCase() === matchCat);
            } else if (typeof p.category === 'string') {
                return p.category.toLowerCase() === matchCat;
            }
            return false;
        });
    }

    slugify(text) {
        if (!text) return '';
        return text.toString().normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
    }

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
                <td data-label="Action"><a href="#${this.slugify(p.title)}" class="btn-table-buy">View Details</a></td>
            </tr>
        `).join('');

        return `<div id="compare-prices-table" class="money-table-container"><table class="money-table"><thead><tr><th>Product Name</th><th>Best For</th><th>Price</th><th>Action</th></tr></thead><tbody>${rows}</tbody></table></div>`;
    }

    /**
     * Generate Featured Section with Smart Guide Filter
     */
    generateFeaturedSection() {
        const featured = this.categoryProducts.find(p => p.isFeatured) || this.categoryProducts[0];
        if (!featured) return '';

        // Only show guide if category relates to "skin"
        const showGuide = this.category.toLowerCase().includes('skin') || this.category.toLowerCase().includes('serum');

        const guideHTML = showGuide ? `
            <div style="background: #fff5f7; border: 2px dashed #f472b6; border-radius: 12px; padding: 1rem; margin: 1.5rem 0; text-align: center;">
                <p style="color: #be185d; font-weight: 700; margin-bottom: 0.5rem; font-size: 0.8rem;">✨ BOOSTER GUIDE ✨</p>
                <h4 style="color: #831843; margin-bottom: 0.5rem; font-size: 1.1rem;">The 7-Day Glass Skin Blueprint</h4>
                <a href="https://imojo.in/glassskin" target="_blank" style="background: #be185d; color: white; padding: 0.6rem 1.2rem; border-radius: 6px; text-decoration: none; font-weight: bold; display: inline-block; font-size: 0.85rem;">Get it for ₹99</a>
            </div>` : '';

        return `
            <section class="featured-dominance" id="${this.slugify(featured.title)}">
                <div class="section-header">
                    <span class="sub">Our #1 Recommendation</span>
                    <h2 style="font-size: clamp(2rem, 5vw, 2.8rem);">🏆 Best for ${featured.bestFor || 'Specific Concern'}</h2>
                </div>
                <div class="featured-box">
                    <div class="ep-image-wrapper">
                        <a href="${featured.link}" target="_blank"><img src="${featured.image}" alt="${featured.title}"></a>
                    </div>
                    <div class="ep-content">
                        <div class="stars">${this.generateStars(featured.rating)}<span style="font-size: 0.8rem; color: var(--text-muted); margin-left: 5px;">(${featured.rating || '5.0'}/5)</span></div>
                        <h2 style="font-family: var(--font-body); font-weight: 800; margin: 10px 0;">${featured.title}</h2>
                        <ul class="ep-benefits">${(featured.pros || []).slice(0, 2).map(pro => `<li><i class="fas fa-check"></i> <span>${pro}</span></li>`).join('')}</ul>
                        <div class="price-callout">${featured.price}</div>
                        <a href="#details-${this.slugify(featured.title)}" class="btn-details-toggle">🔍 View Full Details</a>
                        <div id="details-${this.slugify(featured.title)}" class="product-details-content">
                            <div class="details-grid">
                                <div class="details-item"><h5>Key Ingredients</h5><p>${featured.ingredients || featured.description}</p></div>
                                <div class="details-item"><h5>How to Use</h5><p>${featured.usage || 'Refer to packaging.'}</p></div>
                            </div>
                        </div>
                        ${guideHTML}
                        <a href="${featured.link}" target="_blank" class="btn-buy-now" style="margin-top: 1rem;">Check Price on Amazon</a>
                    </div>
                </div>
            </section>
        `;
    }

    /**
     * Create Product Card with Smart Guide Filter
     */
    createProductCard(p) {
        // Smart Check: Show guide ONLY for skin-related products
        const showGuide = (p.category && JSON.stringify(p.category).toLowerCase().includes('skin')) || 
                         (this.category.toLowerCase().includes('skin'));

        const guideMiniHTML = showGuide ? `
            <div style="padding: 0 1rem; margin-bottom: 1rem;">
                <a href="https://imojo.in/glassskin" target="_blank" style="display: block; background: #fff5f7; color: #be185d; text-align: center; padding: 0.5rem; border-radius: 6px; border: 1px solid #fbcfe8; text-decoration: none; font-size: 0.8rem; font-weight: 600;">
                    🎁 Add Glass Skin Guide (₹99)
                </a>
            </div>` : '';

        return `
            <div class="product-card" id="${this.slugify(p.title)}">
                <div class="product-card-top">
                    <div class="product-card-img-container">
                        <a href="${p.link}" target="_blank"><img src="${p.image}" alt="${p.title}" class="product-card-img"></a>
                    </div>
                    <div class="product-card-meta">
                        <div class="stars">${this.generateStars(p.rating)}</div>
                        <span class="best-for-tag">${p.bestFor || 'Expert Choice'}</span>
                        <h4>${p.title}</h4>
                        <div class="price-callout">${p.price}</div>
                        <a href="#details-${this.slugify(p.title)}" class="btn-details-toggle">🔍 View Details</a>
                    </div>
                </div>
                <div id="details-${this.slugify(p.title)}" class="product-details-content">
                    <div class="details-grid">
                        <div class="details-item"><h5>Why We Picked It</h5><p>${p.whyPicked || p.description}</p></div>
                    </div>
                </div>
                ${guideMiniHTML}
                ${p.reviewLink ? `<a href="${p.reviewLink}" class="btn-buy" style="margin-bottom: 0.5rem; background: var(--accent-gold); color: black;">Read Science Guide</a>` : ''}
                <a href="${p.link}" target="_blank" class="btn-buy-now">Check Price on Amazon</a>
            </div>
        `;
    }

    generateAlternativesGrid() {
        const featured = this.categoryProducts.find(p => p.isFeatured) || this.categoryProducts[0];
        const alternatives = this.categoryProducts.filter(p => p !== featured);
        if (alternatives.length === 0) return '';
        const cards = alternatives.map(p => this.createProductCard(p)).join('');
        return `<section class="alternatives-container"><div class="section-header"><h2>Expert-Approved Alternatives</h2></div><div class="product-grid">${cards}</div></section>`;
    }

    generateStars(rating = 5) {
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) stars += '<i class="fas fa-star"></i>';
            else if (i - 0.5 <= rating) stars += '<i class="fas fa-star-half-alt"></i>';
            else stars += '<i class="far fa-star"></i>';
        }
        return stars;
    }

    render() {
        if (!this.container) return;
        this.container.innerHTML = '';
        if (this.categoryProducts.length === 0) {
            this.container.innerHTML = '<p style="text-align:center; padding: 5rem;">No products found.</p>';
            return;
        }

        const html = `${this.generateComparisonTable()}${this.generateFeaturedSection()}${this.generateAlternativesGrid()}`;
        this.container.innerHTML = html;

        const displayCat = this.category.charAt(0).toUpperCase() + this.category.slice(1).replace(/-/g, ' ');
        document.title = `Best ${displayCat} Solutions (2026) | LUXE FIND`;
        
        const headline = document.getElementById('hero-headline');
        if (headline) headline.innerText = `Stop ${displayCat} in 14 Days`;

        setTimeout(() => this.handleHashScroll(), 300);
    }

    handleHashScroll() {
        const hash = window.location.hash;
        if (!hash) return;
        const target = document.getElementById(hash.substring(1)) || document.querySelector(hash);
        if (target) {
            const offsetPosition = target.getBoundingClientRect().top + window.pageYOffset - 100;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    }
}

/**
 * Global Initialization
 */
function toggleDetails(id) {
    const details = document.getElementById(id);
    if (details) {
        details.classList.toggle('active');
        const btn = details.previousElementSibling;
        if (btn && btn.classList.contains('btn-details-toggle')) {
            btn.innerHTML = details.classList.contains('active') ? '🔼 Close Details' : '🔍 View Full Details';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('type');
    if (categoryParam && document.getElementById('dynamic-category-content')) {
        const renderer = new ProductRenderer(categoryParam, 'dynamic-category-content');
        renderer.render();
        window.productRenderer = renderer;
    }
    window.addEventListener('hashchange', () => { if (window.productRenderer) window.productRenderer.handleHashScroll(); });
});
