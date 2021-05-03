function loadCities(key) {
    try {
        if (key === fav_city) {
            return localStorage.getItem(key);
        }
        return JSON.parse(localStorage.getItem(key));
    } catch (err) {
        console.log(err)
    }
    return []
}

function saveCity(key, name) {
    let cities = loadCities(key)
    if (key === fav_city) {
        cities = name
        localStorage.setItem(key, cities)
        return;
    }

    if (cities === null) {
        cities = []
    }
    if (cities.includes(name)) {
        return;
    }
    cities.push(name)
    localStorage.setItem(key, JSON.stringify(cities))
}

addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        addCity()
    }
})


function deleteCity(city_info) {
    let nameCity = city_info.className;
    let fullName = nameCity.replaceAll('_', ' ');

    let cities = loadCities(request_key)
    if (!cities.includes(fullName)) {
        return;
    }
    removeFragment('#' + nameCity)
    let id_name = cities.indexOf(fullName)
    if (~id_name) cities.splice(id_name, 1)
    localStorage.setItem(request_key, JSON.stringify(cities))
}

function addCity() {
    let city = document.getElementById('input-city').value;
    let cities = loadCities(request_key);

    let inputCity = document.querySelector('#input-city');
    inputCity.value = '';

    if (cities.includes(city)) {
        return;
    }

    owRequest(getURLCity(city)).then((data) => {
        let city_name = data.name
        if (city_name === undefined) {
            alert('Wrong city name')
            return
        }
        if (cities.includes(city_name)) {
            return;
        }
        saveCity(request_key, city_name)
        addCityToPage(data, addCityTile)


    }).catch(err => alert(err))
}
