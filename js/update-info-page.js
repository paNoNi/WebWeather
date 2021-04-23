function addWeatherInfoPlate() {
    let citiesInfo = loadCitiesInfo()
    Promise.all(citiesInfo).then(r =>
        citiesInfo.forEach(function (cityInfo) {
                cityInfo.then(cityValues => {
                    let name = cityValues.name;
                    let id_name = name.replaceAll(' ', '-');
                    loading(id_name);
                    setTimeout(update_page, 1500, cityValues, id_name);
                })
            }
        ))
}

function update_page(cityInfo, id_name) {
    let weatherPanel = document.querySelector('.weather-panel')
    let weatherInfo = '<div id=' + id_name + ' class="weather_info">\n\
                        ' + get_plate_hat(cityInfo, id_name) + '\n\
                        ' + get_weather_info(cityInfo) + '\n\
                        </div>'
    remove_load(id_name)
    weatherPanel.innerHTML += weatherInfo
}

function fix_name(name, is_fav = false) {
    let max_len = 8
    if (is_fav) {
        max_len = 16
    }
    if (name.length > max_len) {
        let matches = name.match(/\b(\w)/g);
        return matches.join('')
    }
    return name
}

function clear_panel() {
    let weatherPanel = document.querySelector('.weather-panel')
    weatherPanel.innerHTML = ''

}

function loading(name) {
    let weatherPanel = document.querySelector('.weather-panel')
    let weatherInfo = temp_loading(name)
    weatherPanel.innerHTML += weatherInfo
}

function temp_loading(city_name) {
    return '<div class="windows8" id="' + city_name + '"> \n\
                <div class="wBall1">\n\
                    <div class="wInnerBall"></div>\n\
                </div>\n\
                <div class="wBall2">\n\
                    <div class="wInnerBall"></div>\n\
                </div>\n\
                <div class="wBall3">\n\
                    <div class="wInnerBall"></div>\n\
                </div>\n\
                <div class="wBall4">\n\
                    <div class="wInnerBall"></div>\n\
                </div>\n\
                <div class="wBall5">\n\
                    <div class="wInnerBall"></div>\n\
                </div>'
}

function remove_load(city_name) {
    let ball = document.querySelector('#' + city_name)
    ball.remove()
}

addWeatherInfoPlate()
setInterval(addWeatherInfoPlate, 10 * 60 * 1000)
