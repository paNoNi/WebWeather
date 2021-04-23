let default_city = 'Moscow';
const fav_city = "favorite"

function getCurrentCity(request) {
    fetch(request)
        .then(response => response.json())
        .then(data => {
            saveCity(fav_city, data.name)
            let city_info = getDescription(data)
            setTimeout(update_cur_page, 1600, city_info)
        })
        .catch(err => alert(err));
}

if (navigator.geolocation) {
    console.log('Geolocation is supported!');
} else {
    console.log('Geolocation is not supported for this Browser/OS version yet.');
}

window.onload = function () {
    get_current_pos()
};

function get_current_pos() {
    let startPos;
    let geoSuccess = function (position) {
        startPos = position;
        let requestUrlPrefix = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}&lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
        getCurrentCity(requestUrlPrefix)
        update_cur_page()
    };
    navigator.geolocation.getCurrentPosition(geoSuccess);

}

function update_cur_page(cityInfo) {
    let weatherPanel = document.querySelector('.main-city')
    weatherPanel.innerHTML = get_favorite_hat(cityInfo) + '\n\
            <div class="weather_info">\n\
                ' + get_weather_info(cityInfo) + '\n\
            </div>'
}

function clear_panel() {
    let weatherPanel = document.querySelector('.main-city')
    weatherPanel.innerHTML = ''

}