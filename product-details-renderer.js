/**
 * LUXE FIND - Product Details Renderer
 * Parses URL for product ID and renders details
 */

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('product-details-container');
    if (!container) return;

    // Get product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (!productId) {
        showError('Product ID not found.');
        return;
    }

    // Find product in database
    const product = products.find(p => p.id === productId);

    if (!product) {
        showError('Product not found in our database.');
        return;
    }

    renderProductDetails(product, container);
});

function renderProductDetails(product, container) {
    const categories = Array.isArray(product.category)
        ? product.category.join(', ')
        : product.category;

    // Generate Stars
    const fullStars = Math.floor(product.rating || 5);
    const hasHalfStar = (product.rating % 1) >= 0.5;
    let starsHTML = '';
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) starsHTML += '<i class="fas fa-star"></i>';
        else if (i === fullStars && hasHalfStar) starsHTML += '<i class="fas fa-star-half-alt"></i>';
        else starsHTML += '<i class="far fa-star"></i>';
    }

    // Generate Pros & Cons
    const prosHTML = (product.pros || []).map(p => `<li><i class="fas fa-plus-circle" style="color: #4CAF50;"></i> ${p}</li>`).join('');
    const consHTML = (product.cons || []).map(c => `<li><i class="fas fa-minus-circle" style="color: #f44336;"></i> ${c}</li>`).join('');

    container.innerHTML = `
        <div class="details-image-wrapper">
            <img src="${product.image}" alt="${product.title}" class="details-image">
            ${product.isFeatured ? '<span class="featured-badge">Top Choice</span>' : ''}
        </div>
        <div class="details-info">
            <div class="details-meta">
                <span class="badge">${categories}</span>
                <span class="badge">Expert Reviewed</span>
            </div>
            <h1>${product.title}</h1>
            
            <div class="rating-container">
                <div class="stars">${starsHTML}</div>
                <span class="rating-value">${product.rating || '5.0'}/5.0</span>
            </div>

            <span class="details-price">${product.price}</span>
            
            <div class="details-description">
                ${product.description}
            </div>
            
            <div class="pros-cons-grid">
                <div class="pros-box">
                    <h4><i class="fas fa-thumbs-up"></i> Why We Love It</h4>
                    <ul>${prosHTML || '<li>Rigorously tested quality</li><li>Premium luxury branding</li>'}</ul>
                </div>
                <div class="cons-box">
                    <h4><i class="fas fa-exclamation-circle"></i> Considerations</h4>
                    <ul>${consHTML || '<li>Premium price point</li>'}</ul>
                </div>
            </div>

            <a href="${product.link}" target="_blank" class="btn-primary btn-checkout">
                Check Price on Official Site <i class="fas fa-external-link-alt" style="margin-left: 10px;"></i>
            </a>
            
            <div class="affiliate-trust-banner">
                <i class="fas fa-shield-check"></i>
                <p>Purchasing through our links supports our independent research at no extra cost to you.</p>
            </div>
        </div>
    `;
}

function showError(message) {
    const container = document.getElementById('product-details-container');
    container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 100px 0;">
            <h2 style="color: var(--accent-gold); margin-bottom: 2rem;">Oops!</h2>
            <p style="font-size: 1.2rem; color: #ccc; margin-bottom: 3rem;">${message}</p>
            <a href="index.html#products" class="btn-primary">Return to Collection</a>
        </div>
    `;
}
