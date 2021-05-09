function addWeatherInfoPlate() {
    let citiesInfo = loadCitiesInfo();
    citiesInfo.then((data) => {
        for (let i = 0; i < data.length; i++) {
            requestCityInfoByName(data[i]).then((cityInfo) => {
                addCityToPage(cityInfo, addCityTitle);
            });
        }
    });
}

function addCityToPage(data, addFunc, istop) {
    let cityName = data.name.replaceAll(' ', '');
    setLoading(cityName, istop);
    sleep(2000).then(r => {
        addFunc(data);
        removeFragment('.' + cityName);
    });
}


addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        addCity()
    }
})


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

addWeatherInfoPlate()