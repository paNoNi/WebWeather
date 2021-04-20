function addWeatherInfoPlate() {
    let citiesInfo = loadCitiesInfo()
    Promise.all(citiesInfo).then(r =>
        citiesInfo.forEach(function (cityInfo) {
                cityInfo.then(cityValues => {
                    loading(cityValues.name)
                    setTimeout(update_page, 1500, cityValues);
                })
            }
        ))
}

function update_page(cityInfo) {
    let weatherPanel = document.querySelector('.weather-panel')
    let city_name = fix_name(cityInfo['name'])
    let weatherInfo = '<div id=' + city_name + ' class="weather_info">\n\
                        ' + get_plate_hat(cityInfo) + '\n\
                        ' + get_weather_info(cityInfo) + '\n\
                        </div>'
    remove_load(city_name)
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

function loading(city_name) {
     let weatherPanel = document.querySelector('.weather-panel')
    let short_name = fix_name(city_name)
    let weatherInfo = temp_loading(short_name)
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
    console.log(ball)
    ball.remove()
}

addWeatherInfoPlate()
