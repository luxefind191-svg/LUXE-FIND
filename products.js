
// Map categories to their data files
const PRODUCT_FILES = [
    '/data/products/women/skincare.json',
    '/data/products/women/makeup.json',
    '/data/products/women/fragrance.json',
    '/data/products/men/skincare.json',
    '/data/products/men/grooming.json',
    '/data/products/men/fragrance.json',
    '/data/products/unisex/essentials.json'
];

async function loadProducts() {
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) return;

    // Show loading state
    productGrid.innerHTML = '<div class="col-span-full text-center text-white text-xl animate-pulse">Loading exclusive collection...</div>';

    try {
        // Fetch all data files in parallel
        const responses = await Promise.all(PRODUCT_FILES.map(file => fetch(file).then(res => {
            if (!res.ok) throw new Error(`Failed to load ${file}`);
            return res.json();
        }).catch(err => {
            console.warn(`Error loading ${file}:`, err);
            return [];
        })));

        // Flatten array of arrays
        const allProducts = responses.flat();

        // Render all products
        renderProducts(allProducts);

        // After rendering, apply the filter from URL if present
        const urlParams = new URLSearchParams(window.location.search);
        const categoryParam = urlParams.get('category');
        if (categoryParam) {
            // Trigger the existing filter logic if possible, or just manually filter
            const filterBtns = document.querySelectorAll('.filter-btn');
            filterBtns.forEach(btn => {
                if (btn.dataset.filter === categoryParam) {
                    btn.click();
                }
            });
        }

    } catch (error) {
        console.error('Error loading products:', error);
        productGrid.innerHTML = '<div class="col-span-full text-center text-red-400">Unable to load collection. Please try again later.</div>';
    }
}

function renderProducts(products) {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';

    if (products.length === 0) {
        productGrid.innerHTML = '<div class="col-span-full text-center text-gray-400">No products found.</div>';
        return;
    }

    products.forEach(product => {
        const card = document.createElement('a');
        const productId = product.id || product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        card.href = `product-detail.html?id=${productId}`;
        card.className = 'product-card group block animate-slide-up';
        card.dataset.category = product.gender;

        card.innerHTML = `
          <div class="relative rounded-xl overflow-hidden glass mb-4">
              <img src="${product.imageUrl}"
                  alt="${product.name}"
                  class="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700">
              <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300">
              </div>
          </div>
          <h3 class="font-serif text-lg text-white group-hover:text-luxe-gold transition-colors">${product.name}</h3>
          <p class="text-gray-500 text-sm mb-2 capitalize">${product.gender} / ${product.category}</p>
          <span class="text-luxe-gold font-bold">$${product.price}</span>
      `;

        productGrid.appendChild(card);
    });
}

// Export for use 
export { loadProducts };

// Auto-init 
if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', loadProducts);
}
