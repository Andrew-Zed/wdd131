// // document.addEventListener("DOMContentLoaded", () => {
// //     const yearSpan = document.getElementById("currentYear");
// //     yearSpan.textContent = new Date().getFullYear();
// // });

// // Hamburger Menu Toggle
// document.getElementById('hamburgerBtn').addEventListener('click', function() {
//     const primaryNav = document.getElementById('primaryNav');
//     const hamburgerBtn = document.getElementById('hamburgerBtn');
    
//     if (primaryNav.classList.contains('open')) {
//         primaryNav.classList.remove('open');
//         hamburgerBtn.innerHTML = '&#9776;'; // Hamburger symbol
//     } else {
//         primaryNav.classList.add('open');
//         hamburgerBtn.innerHTML = '✕'; // X symbol
//     }
// });

// // Update Copyright Year
// document.getElementById('currentYear').textContent = new Date().getFullYear();

// // Update Last Modified Date
// document.getElementById('lastModified').textContent = document.lastModified;

// Error monitoring
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.message);
});

// Performance monitoring
const performanceObserver = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
        console.log(`${entry.name}: ${entry.startTime.toFixed(2)}ms`);
    });
});

performanceObserver.observe({ entryTypes: ['resource', 'navigation'] });

// Hamburger Menu Toggle
const hamburgerBtn = document.getElementById('hamburgerBtn');
const primaryNav = document.getElementById('primaryNav');

if (hamburgerBtn && primaryNav) {
    hamburgerBtn.addEventListener('click', function() {
        const isExpanded = primaryNav.classList.contains('open');
        
        primaryNav.classList.toggle('open');
        hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
        hamburgerBtn.innerHTML = isExpanded ? 
            '<span class="hamburger-icon">&#9776;</span>' : 
            '<span class="close-icon">✕</span>';
    });
}

// Update Copyright Year
const currentYearElement = document.getElementById('currentYear');
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

// Update Last Modified Date
const lastModifiedElement = document.getElementById('lastModified');
if (lastModifiedElement) {
    lastModifiedElement.textContent = document.lastModified;
}

// Lazy loading images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    if ('loading' in HTMLImageElement.prototype) {
        console.log('Native lazy loading supported');
    } else {
        console.log('Native lazy loading not supported');
        // Could add fallback here if needed
    }
});