async function loadCitiesInfo() {
    return await loadCities();
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
        lat: data.lat,
        lon: data.lon,
        icon: data.weather[0].icon,
        dt: data.dt,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        vis: 0
    }
}
