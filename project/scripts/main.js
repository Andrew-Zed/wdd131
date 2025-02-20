// JavaScript for Tech Innovations Blog

document.addEventListener("DOMContentLoaded", function () {
    // Display last modified date in the footer
    const lastModified = document.createElement("p");
    lastModified.textContent = `Last Updated: ${document.lastModified}`;
    document.querySelector("footer").appendChild(lastModified);

    // Add interactive hover effects to articles
    document.querySelectorAll("article").forEach(article => {
        article.addEventListener("mouseenter", () => {
            article.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
            article.style.transform = "scale(1.02)";
            article.style.transition = "all 0.3s ease-in-out";
        });

        article.addEventListener("mouseleave", () => {
            article.style.boxShadow = "none";
            article.style.transform = "scale(1)";
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});
