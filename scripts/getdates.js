// Function to set the current year
function setCurrentYear() {
    const yearElement = document.getElementById('currentyear');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
}

// Function to set the last modified date
function setLastModified() {
    const lastModifiedElement = document.getElementById('lastModified');
    lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;
}

// Initialize date functions when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setCurrentYear();
    setLastModified();
});