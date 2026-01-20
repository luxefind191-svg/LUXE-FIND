/**
 * LUXE FIND - Product Renderer
 */

class ProductRenderer {
    constructor(containerId, category = 'all') {
        this.container = document.getElementById(containerId);
        this.category = category;
        this.products = typeof products !== 'undefined' ? products : [];
    }

    getFilteredProducts() {
        if (this.category === 'all') {
            return this.products;
        }
        return this.products.filter(product =>
            product.category.toLowerCase() === this.category.toLowerCase()
        );
    }

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

        this.container.innerHTML = filteredProducts
            .map(product => this.createProductCard(product))
            .join('');

        this.animateCards();
    }

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

    setCategory(category) {
        this.category = category;
        this.render();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('products-container');

    if (container) {
        const categoryAttr = container.getAttribute('data-category');
        const urlParams = new URLSearchParams(window.location.search);
        const categoryParam = urlParams.get('category');

        const category = categoryParam || categoryAttr || 'all';

        const renderer = new ProductRenderer('products-container', category);
        renderer.render();

        window.productRenderer = renderer;
    }
});
