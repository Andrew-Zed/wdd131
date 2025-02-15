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

// Temple data array with 10 temples
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Logan Utah Temple",
      location: "Logan, Utah, United States",
      dedicated: "1884, May, 19",
      area: 119619,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/logan-utah/400x250/logan-temple-768119-wallpaper.jpg"
    },
    {
      templeName: "Boston Massachusetts Temple",
      location: "Boston, Massachusetts, United States",
      dedicated: "1997, June, 13",
      area: 69600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/boston-massachusetts/400x400/boston-temple-lds-408087-wallpaper.jpg"
    },
    {
      templeName: "Melbourne Australia Temple",
      location: "Melbourne, Australia",
      dedicated: "2000, June, 16",
      area: 10700,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/melbourne-australia/400x250/melbourne-australia-temple-lds-1025169-wallpaper.jpg"
    }
];

// Function to create temple cards
function createTempleCards(filteredTemples) {
    const templeGrid = document.querySelector('.temple-grid');
    templeGrid.innerHTML = '';
    
    filteredTemples.forEach(temple => {
        const card = document.createElement('section');
        const name = document.createElement('h3');
        const location = document.createElement('p');
        const dedication = document.createElement('p');
        const area = document.createElement('p');
        const img = document.createElement('img');
        
        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} square feet`;
        
        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', `${temple.templeName} Temple`);
        img.setAttribute('loading', 'lazy');
        
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);
        
        templeGrid.appendChild(card);
    });
}

// Initialize with all temples
document.addEventListener('DOMContentLoaded', () => {
    createTempleCards(temples);
    
    // Get all navigation links
    const homeLink = document.querySelector('nav a[aria-current="page"]');
    const nonUtahLink = document.getElementById('nonutah');
    const navLinks = document.querySelectorAll('nav a');
    
    // Find the specific links by their text content
    let oldLink, newLink, largeLink, smallLink;
    
    // Check if we need to add an 'Old' link
    let hasOldLink = false;
    
    navLinks.forEach(link => {
        const text = link.textContent.trim();
        if (text === 'New') {
            newLink = link;
        } else if (text === 'Large') {
            largeLink = link;
        } else if (text === 'Small') {
            smallLink = link;
        } else if (text === 'Old') {
            oldLink = link;
            hasOldLink = true;
        }
    });
    
    // If there's no 'Old' link, create and add it
    if (!hasOldLink) {
        const navList = document.querySelector('.nav-list');
        const oldLi = document.createElement('li');
        oldLink = document.createElement('a');
        oldLink.setAttribute('href', '#');
        oldLink.textContent = 'Old';
        oldLi.appendChild(oldLink);
        
        // Insert after Home link and before Non Utah link
        if (nonUtahLink && nonUtahLink.parentNode) {
            navList.insertBefore(oldLi, nonUtahLink.parentNode);
        } else {
            navList.appendChild(oldLi);
        }
    }
    
    // Home (all temples)
    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('main h2').textContent = 'Home';
        createTempleCards(temples);
    });
    
    // Non-Utah temples
    nonUtahLink.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('main h2').textContent = 'Non-Utah Temples';
        const nonUtahTemples = temples.filter(temple => !temple.location.includes('Utah'));
        createTempleCards(nonUtahTemples);
    });
    
    // Old temples (before 1900)
    oldLink.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('main h2').textContent = 'Old Temples (before 1900)';
        const oldTemples = temples.filter(temple => {
            const year = parseInt(temple.dedicated.split(', ')[0]);
            return year < 1900;
        });
        createTempleCards(oldTemples);
    });
    
    // New temples (after 2000)
    if (newLink) {
        newLink.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('main h2').textContent = 'New Temples (2000 or later)';
            const newTemples = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(', ')[0]);
                return year >= 2000;
            });
            createTempleCards(newTemples);
        });
    }
    
    // Large temples (>90k sq ft)
    if (largeLink) {
        largeLink.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('main h2').textContent = 'Large Temples (>90,000 sq ft)';
            const largeTemples = temples.filter(temple => temple.area > 90000);
            createTempleCards(largeTemples);
        });
    }
    
    // Small temples (<10k sq ft)
    if (smallLink) {
        smallLink.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('main h2').textContent = 'Small Temples (<10,000 sq ft)';
            const smallTemples = temples.filter(temple => temple.area < 10000);
            createTempleCards(smallTemples);
        });
    }
});