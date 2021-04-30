const apiKey = "959ff036391e56de6e56139562a2cec7";

const request_key = 'cities';
let default_city = 'Moscow';
const fav_city = "favorite"

function getURLCity(cityName) {
    return `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}&q=${cityName}`;
}

function getURLCoords(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}&lat=${lat}&lon=${lon}`;
}


function owRequest(requestUrlPrefix) {
    return fetch(requestUrlPrefix)
        .then(response => response.json())
        .then(data => {
            return getDescription(data);
        }).catch(err => console.log(err));
}