const request_key = 'cities';
let cities = loadCities();

function loadCities() {
    try {
        return JSON.parse(localStorage.getItem(request_key));
    } catch (err) {
        console.log(err)
    }
    return []
}

function saveCity(key, name) {
    if (cities.includes(name)) {
        return
    }
    cities.push(name)
    localStorage.setItem(key, JSON.stringify(cities))
}

function deleteCity(name) {
    if (!cities.includes(name)) {
        return
    }
    let id_name = cities.indexOf(name)
    if (~id_name) cities.slice(id_name, 1)
    localStorage.setItem(request_key, JSON.stringify(cities))
}