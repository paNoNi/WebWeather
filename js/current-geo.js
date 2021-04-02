let default_city = 'Moscow';
const fav_city = "favorite"

navigator.geolocation.getCurrentPosition(function (position) {
    let requestUrlPrefix = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}&lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
    return getCurrentCity(requestUrlPrefix)
}, function () {
    let last_fav_city = localStorage.getItem(fav_city)
    if (last_fav_city != null) {
        default_city = last_fav_city
    }
    let requestUrlPrefix = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}&q=${default_city}`;
    return getCurrentCity(requestUrlPrefix)
})

function getCurrentCity(request) {
    fetch(request)
        .then(response => response.json())
        .then(data => {
            saveCity(fav_city, data.name)
            return getDescription(data)
        })
        .catch(err => alert(err));
}