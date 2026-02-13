// LUXE FIND - Premium Interactivity 2.0

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const preloader = document.getElementById('preloader');
    const productGrid = document.querySelector('.product-grid');
    const productCards = document.querySelectorAll('.product-card');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const categoryCards = document.querySelectorAll('.category-card');

    // --- Preloader & Performance ---
    // Wait for critical images but have a fallback timeout
    const hidePreloader = () => {
        setTimeout(() => {
            preloader.classList.add('fade-out');
            document.body.style.overflow = 'auto';
        }, 500); // Shorter delay for snappier feel
    };

    if (document.readyState === 'complete') {
        hidePreloader();
    } else {
        window.addEventListener('load', hidePreloader);
    }

    // Safety timeout for preloader
    setTimeout(() => {
        if (!preloader.classList.contains('fade-out')) {
            preloader.classList.add('fade-out');
            document.body.style.overflow = 'auto';
        }
    }, 2500);

    // --- Navigation & Scroll ---
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinksList = document.querySelector('.nav-links');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinksList.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinksList.classList.remove('active');
                mobileToggle.classList.remove('active');
            });
        });
    }

    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
    }

    // --- Trending Products Logic (Home Page) ---
    const trendingContainer = document.getElementById('trending-products');
    if (trendingContainer && typeof ProductRenderer !== 'undefined') {
        const trRenderer = new ProductRenderer('trending-products');
        // Filter products with 'Trending' tag
        const trendingData = products.filter(p => p.tags && p.tags.includes('Trending'));

        if (trendingData.length > 0) {
            trendingContainer.innerHTML = trendingData.map(p => trRenderer.createProductCard(p)).join('');
        } else {
            // Fallback if no trending products found (show 3 regular)
            trendingContainer.innerHTML = products.slice(0, 3).map(p => trRenderer.createProductCard(p)).join('');
        }
    }

    // --- Intersection Observer (Optimized) ---
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, index * 80);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.section, .category-card, .product-card, .feature-item, .section-header').forEach(el => {
        el.classList.add('reveal-on-scroll');
        revealObserver.observe(el);
    });
});

// Smooth Scroll for generic links
document.querySelectorAll('a[href^="#"]:not([href^="#cat-"])').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
