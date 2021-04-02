let citiesInfo = new Map();

function loadCitiesInfo() {
    cities.forEach(function (city, i, cities) {
        addCityToArray(city);
    })
}

function addCityToArray(city) {
    let requestUrlPrefix = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}&q=${city}`;
    fetch(requestUrlPrefix)
        .then(response => response.json())
        .then(data => {
            let cityInfo = getDescription(data)
            citiesInfo.set(city, cityInfo);
        })

        .catch(err => alert(err));
}


function getDescription(data) {
    let cityInfo = new Map();

    cityInfo.set('name', data.name);
    cityInfo.set('temp', data.main.temp);
    cityInfo.set('wind_speed', data.wind.speed);
    cityInfo.set('wind_dir', data.wind.deg);
    cityInfo.set('clouds', data.weather.description);
    cityInfo.set('pressure', data.main.pressure);
    cityInfo.set('humidity', data.main.humidity);
    cityInfo.set('coord', data.coord);

    return cityInfo
}
