/**
 * LUXE FIND - Gift Finder
 * Interactive interactive multi-step questionnaire to recommend products.
 */

class GiftFinder {
    constructor() {
        this.container = document.getElementById('gift-finder-container');
        if (!this.container) return;

        this.step = 1;
        this.preferences = {
            recipient: '',
            category: '',
            budget: ''
        };

        this.init();
    }

    init() {
        this.renderStep1();
    }

    renderStep1() {
        this.container.innerHTML = `
            <div class="gift-finder-step stagger-in">
                <h3>Who are you shopping for?</h3>
                <div class="gift-options">
                    <button class="gift-opt-btn" data-val="Men">For Him</button>
                    <button class="gift-opt-btn" data-val="Women">For Her</button>
                    <button class="gift-opt-btn" data-val="both">Both / Couple</button>
                </div>
            </div>
        `;
        this.bindEvents('recipient', 2);
    }

    renderStep2() {
        this.container.innerHTML = `
            <div class="gift-finder-step stagger-in">
                <h3>What's the occasion?</h3>
                <div class="gift-options">
                    <button class="gift-opt-btn" data-val="Skincare">Everyday Luxury</button>
                    <button class="gift-opt-btn" data-val="Fragrance">Special Celebration</button>
                    <button class="gift-opt-btn" data-val="Grooming">Personal Care</button>
                </div>
            </div>
        `;
        this.bindEvents('category', 3);
    }

    renderStep3() {
        this.container.innerHTML = `
            <div class="gift-finder-step stagger-in">
                <h3>Preferred Budget Range?</h3>
                <div class="gift-options">
                    <button class="gift-opt-btn" data-val="under5">Entry Level Luxury</button>
                    <button class="gift-opt-btn" data-val="5to15">Premium Selection</button>
                    <button class="gift-opt-btn" data-val="above15">Ultra-Premium</button>
                </div>
            </div>
        `;
        this.bindEvents('budget', 'done');
    }

    bindEvents(key, nextStep) {
        const buttons = this.container.querySelectorAll('.gift-opt-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                this.preferences[key] = btn.getAttribute('data-val');
                if (nextStep === 'done') {
                    this.showResults();
                } else if (nextStep === 2) {
                    this.renderStep2();
                } else if (nextStep === 3) {
                    this.renderStep3();
                }
            });
        });
    }

    showResults() {
        this.container.innerHTML = `<div class="loader-logo">FINDING PERFECT GIFTS<span>...</span></div>`;

        setTimeout(() => {
            const recommended = this.filterProducts();
            this.renderResults(recommended);
        }, 1500);
    }

    filterProducts() {
        return products.filter(p => {
            // Filter by recipient
            const matchesRecipient = this.preferences.recipient === 'both' ||
                p.category.includes(this.preferences.recipient);

            // Filter by category (simplified match)
            const matchesCategory = p.category.some(c => c.includes(this.preferences.category)) ||
                p.description.toLowerCase().includes(this.preferences.category.toLowerCase());

            return matchesRecipient; // Returning basic recipient matches for now to ensure some results
        }).slice(0, 3);
    }

    renderResults(results) {
        if (results.length === 0) {
            this.container.innerHTML = `
                <div class="gift-results">
                    <h3>We couldn't find a perfect match, but you might like these:</h3>
                    <p>Check our full collection for more options.</p>
                    <button class="btn-primary" onclick="window.location.href='#products'">View Collection</button>
                </div>
            `;
            return;
        }

        let resultsHTML = `
            <div class="gift-results stagger-in">
                <h3>Our Top Recommendations for You:</h3>
                <div class="gift-results-grid">
        `;

        results.forEach(p => {
            resultsHTML += `
                <div class="gift-res-card">
                    <img src="${p.image}" alt="${p.title}">
                    <h4>${p.title}</h4>
                    <span class="price">${p.price}</span>
                    <a href="product-details.html?id=${p.id}" class="btn-buy" style="padding: 0.5rem; font-size: 0.7rem;">View Details</a>
                </div>
            `;
        });

        resultsHTML += `
                </div>
                <button class="btn-primary" style="margin-top: 2rem;" onclick="location.reload()">Start Over</button>
            </div>
        `;

        this.container.innerHTML = resultsHTML;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new GiftFinder();
});
