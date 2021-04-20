const request_key = 'cities';
const apiKey = "959ff036391e56de6e56139562a2cec7";

function loadCities(key) {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (err) {
        console.log(err)
    }
    return []
}

function saveCity(key, name) {
    let cities = loadCities(request_key)
    if (cities === null) {
        cities = []
    }
    if (cities.includes(name)) {
        return
    }
    cities.push(name)
    localStorage.setItem(key, JSON.stringify(cities))
}


function addCityToArray(city) {
    let requestUrlPrefix = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}&q=${city}`;
    return fetch(requestUrlPrefix)
        .then(response => response.json())
        .then(data => {
            return getDescription(data);
        }).catch(err => console.log(err));
}


function deleteCity(city_info) {
    let cities = loadCities(request_key)
    if (!cities.includes(city_info.id)) {
        return
    }
    let id_name = cities.indexOf(city_info.id)
    if (~id_name) cities.splice(id_name, 1)
    localStorage.setItem(request_key, JSON.stringify(cities))
    clear_panel()
    addWeatherInfoPlate()
}

function addCity() {
    let city = document.getElementById('input-city').value;
    let requestUrlPrefix = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}&q=${city}`;
    fetch(requestUrlPrefix)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let city_name = data.name
            if (city_name === undefined) {
                alert('Wrong city name')
                return
            }
            saveCity(request_key, city_name)
            clear_panel()
            addWeatherInfoPlate()
        })

        .catch(err => alert(err))
}
