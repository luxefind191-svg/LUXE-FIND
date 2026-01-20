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
        }, 800);
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
    }, 4000);

    // --- Navigation & Scroll ---
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // --- Category Filtering Logic ---
    const filterProducts = (filter) => {
        // Update active button state
        filterBtns.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-filter') === filter);
        });

        productCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 400);
            }
        });
    };

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterProducts(btn.getAttribute('data-filter'));
        });
    });

    // Make category cards interactive for filtering
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const filter = card.getAttribute('data-filter');
            filterProducts(filter);
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Handle Nav link filtering (Men/Women)
    document.querySelectorAll('.nav-links a[href^="#cat-"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const filter = link.getAttribute('href').replace('#cat-', '');
            if (filter === 'men' || filter === 'women') {
                e.preventDefault();
                filterProducts(filter);
                document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

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
