function getCurrentCity(request) {
    resetFavCity();
    owRequest(request).then((data) => {
        saveCity(fav_city, data.name)
        addCityToPage(data, addMainCity, true)

    }).catch(err => alert(err));

}

if (navigator.geolocation) {
    console.log('Geolocation is supported!');
} else {
    console.log('Geolocation is not supported for this Browser/OS version yet.');
}

window.onload = function () {
    getCurrentPos()
};

function getCurrentPos() {

    let geoSuccess = function (position) {
        getCurrentCity(getURLCoords(position.coords.latitude, position.coords.longitude))
    };

    let setDefault = function () {
        getCurrentCity(getURLCity(default_city))
    }

    navigator.geolocation.getCurrentPosition(geoSuccess, setDefault);

}
