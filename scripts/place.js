document.addEventListener("DOMContentLoaded", () => {
    // Update last modified date
    document.getElementById("last-modified").textContent = new Date().toLocaleString();

    // Get wind speed and temperature
    const temperature = parseFloat(document.getElementById("temperature").textContent);
    const windSpeed = parseFloat(document.getElementById("wind-speed").textContent);

    // Wind chill calculation function
    function calculateWindChill(temp, wind) {
        if (temp <= 10 && wind > 4.8) {
            return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1) + "°C";
        } else {
            return "N/A";
        }
    }

    // Display wind chill
    document.getElementById("wind-chill").textContent = calculateWindChill(temperature, windSpeed);
});
