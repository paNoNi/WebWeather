function loadCitiesInfo() {
    let citiesInfo = []
    let cities = loadCities(request_key)
    if (cities !== null) {
        cities.forEach(function (city, i, cities) {
            citiesInfo.push(addCityToArray(city));
        })
    }
    return citiesInfo
}

function getDescription(data) {
    return {
        name: data.name,
        temp: data.main.temp,
        wind_speed: data.wind.speed,
        wind_dir: data.wind.deg,
        clouds: data.weather[0].description,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        coord: data.coord,
        icon: data.weather[0].icon,
        dt: data.dt,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        vis: 0
    }
}
