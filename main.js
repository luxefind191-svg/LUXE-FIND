// Sticky Navigation
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-luxe-dark/90', 'shadow-lg');
        navbar.classList.remove('glass');
    } else {
        navbar.classList.remove('bg-luxe-dark/90', 'shadow-lg');
        navbar.classList.add('glass');
    }
});

// Scroll Animations (Simple Intersection Observer)
const animatedElements = document.querySelectorAll('.animate-slide-up, .fade-in-section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
    });
}, {
    threshold: 0.1
});

// Add base classes for animation if not present via Tailwind config utility
animatedElements.forEach(el => {
    // We expect these to be handled by Tailwind classes in HTML, 
    // but here we can add logic if needed. 
    // For now, the CSS animation classes handle the initial load.
    // For scroll-triggered animations:
    if (!el.classList.contains('animate-slide-up')) { // Only apply to non-auto-animated ones
        el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
        observer.observe(el);
    }
});

console.log('Luxe Find script loaded');
