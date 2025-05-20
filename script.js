const apikey = "45942d5d43ec521ae5e206751dcb4001";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid = ${apikey}`);
    var data = await response.json();
    console.log(data);
}

checkWeather();