// Product Array
const products = [
    { id: "fc-1888", name: "flux capacitor" },
    { id: "fc-2050", name: "power laces" },
    { id: "fs-1987", name: "time circuits" },
    { id: "ac-2000", name: "low voltage reactor" },
    { id: "jj-1969", name: "warp equalizer" }
];

// Populate Product Select Dropdown
const productSelect = document.getElementById("product");
products.forEach(product => {
    let option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

// Local Storage Counter for Reviews
const reviewForm = document.getElementById("reviewForm");
if (reviewForm) {
    reviewForm.addEventListener("submit", (event) => {
        let reviewCount = localStorage.getItem("reviewCount") || 0;
        localStorage.setItem("reviewCount", ++reviewCount);
    });
}

// Display Review Count on Confirmation Page
const reviewCountDisplay = document.getElementById("reviewCount");
if (reviewCountDisplay) {
    reviewCountDisplay.textContent = localStorage.getItem("reviewCount") || 0;
}
