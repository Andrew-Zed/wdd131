// document.addEventListener("DOMContentLoaded", () => {
//     const yearSpan = document.getElementById("currentYear");
//     yearSpan.textContent = new Date().getFullYear();
// });

// Hamburger Menu Toggle
document.getElementById('hamburgerBtn').addEventListener('click', function() {
    const primaryNav = document.getElementById('primaryNav');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    
    if (primaryNav.classList.contains('open')) {
        primaryNav.classList.remove('open');
        hamburgerBtn.innerHTML = '&#9776;'; // Hamburger symbol
    } else {
        primaryNav.classList.add('open');
        hamburgerBtn.innerHTML = '✕'; // X symbol
    }
});

// Update Copyright Year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Update Last Modified Date
document.getElementById('lastModified').textContent = document.lastModified;