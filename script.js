async function getWeather() {
    let city = document.getElementById("cityInput").value;
    let apiKey = "7c887a3ac9d10f31f94df084895d25a6"; // Replace with your OpenWeather API Key
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        document.getElementById("weatherInfo").innerHTML = `
            <h2>${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
    } catch (error) {
        document.getElementById("weatherInfo").innerHTML = "<p>City not found!</p>";
    }
}
