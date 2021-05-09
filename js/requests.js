const requestUrlPrefix = `https://webbab3.herokuapp.com`;
const weatherCityUrl = `${requestUrlPrefix}/weather/city`;
const weatherCoordinatesUrl = `${requestUrlPrefix}/weather/coordinates`;
const favouritesUrl = `${requestUrlPrefix}/favourites`;
const default_city = 'Moscow';


async function requestCityInfoByName(cityName) {
    let response = await fetch(`${weatherCityUrl}?q=${cityName}`);
    if (response.status === 200) {
        return await response.json();
    }
    throw new Error(`Request errored with status ${response.status}`);
}

async function loadCities() {
    return getFavourites().then(favorites => {
        return favorites;
    }).catch((err) => {
        console.log(err);
        return [];
    });
}


function deleteCity(city_info) {
    let nameCity = city_info.className;
    let fullName = nameCity.replaceAll('_', ' ');

    removeFragment('#' + nameCity);

    deleteFavouriteCity(fullName);
}

function addCity() {
    let city = document.getElementById('input-city').value;

    let inputCity = document.querySelector('#input-city');
    inputCity.value = '';

    addFavouriteCity(city).then((response) => {
        if (response === false) {
            alert('City already exists');
            return;
        }
        addCityToPage(response, addCityTitle)

    }).catch((e) => {
        alert(e);
    });
}


async function requestCityInfoByLocation(lat, lon) {
    let response = await fetch(`${weatherCoordinatesUrl}?lat=${lat}&long=${lon}`);
    if (response.status === 200) {
        return await response.json();
    }
    throw new Error(`Request errored with status ${response.status}`);
}

async function getFavourites() {
    let response = await fetch(favouritesUrl);
    if (response.status === 200) {
        const json = await response.json();
        return json.favouriteCitiesNames;
    }
    throw new Error(`Request errored with status ${response.status}`);
}

async function addFavouriteCity(cityName) {
    let response = await fetch(`${favouritesUrl}?q=${cityName}`, {method: "POST"});
    if (response.status === 201) {
        return await response.json();
    }

    if (response.status === 409) {
        return false;
    }

    throw new Error(`Request errored with status ${response.status}`);
}

async function deleteFavouriteCity(cityName) {
    let response = await fetch(`${favouritesUrl}?q=${cityName}`, {method: "DELETE"});
    if (response.status !== 200) {
        throw new Error(`Request errored with status ${response.status}`);
    }
}
