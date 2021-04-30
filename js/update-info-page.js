function addWeatherInfoPlate() {
    let citiesInfo = loadCitiesInfo()
    for (let i = 0; i < citiesInfo.length; i++) {
        citiesInfo[i].then((data) => {
            addCityToPage(data, addCityTile)
        })
    }
}

function addCityToPage(data, addFunc, istop) {
    let cityName = data.name.replaceAll(' ', '');
    setLoading(cityName, istop);
    sleep(2000).then(r => {
        addFunc(data);
        removeFragment(cityName);
    });
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

addWeatherInfoPlate()
setInterval(addWeatherInfoPlate, 1000 * 60 * 10)