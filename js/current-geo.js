function getCurrentCity(data) {
    resetFavCity();
    data.then((curCity) => {
        addCityToPage(curCity, addMainCity, true)

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
        getCurrentCity(requestCityInfoByLocation(position.coords.latitude, position.coords.longitude));
    };

    let setDefault = function () {
        getCurrentCity(requestCityInfoByName(default_city))
    }

    navigator.geolocation.getCurrentPosition(geoSuccess, setDefault);

}
