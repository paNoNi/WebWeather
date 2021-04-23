function get_weather_info(city_info) {
    return '<ul>\n\
            <li>\n\
                <p>Ветер</p>\n\
                <p>' + get_direction_wind(parseInt(city_info.wind_dir)) + ' ' + city_info.wind_speed + 'm/s</p>\n\
            </li>\n\
            <li>\n\
                <p>Облачность</p>\n\
                <p>' + city_info.clouds + '</p>\n\
            </li>\n\
            <li>\n\
                <p>Давление</p>\n\
                <p>' + city_info.pressure + ' hpa</p>\n\
            </li>\n\
            <li>\n\
                <p>Влажность</p>\n\
                <p>' + city_info.humidity + '%</p>\n\
            </li>\n\
            <li>\n\
                <p>Координаты</p>\n\
                <p>' + Math.round(city_info.coord.lat) + ':' + Math.round(city_info.coord.lon) + '</p>\n\
            </li>\n\
        </ul>'
}

function get_favorite_hat(city_info) {
    let city_name = fix_name(city_info['name'], true)
    return '<div class="favorite-city-main-info">\n\
                <h2>' + city_name + '</h2>\n\
                <div>\n\
                    <img src="http://openweathermap.org/img/wn/' + city_info.icon + '@2x.png" alt="Иконка погоды">\n\
                    <p>' + Math.round(city_info.temp) + '°C</p>\n\
                </div>\n\
            </div>'
}

function get_plate_hat(city_info) {
    let city_name = fix_name(city_info.name)
    return '<div>\n\
                <span><p> ' + city_name + ' </p></span>\n\
                <p>' + Math.round(city_info.temp) + '°C</p>\n\
                <img src="http://openweathermap.org/img/wn/' + city_info.icon + '@4x.png" alt="Погода">\n\
                <button onclick="deleteCity(\'' + city_info.name + '\')"><img src="source/icons-action/icons-cancel.svg" alt="Удалить"></button>\n\
            </div>'
}


function get_direction_wind(deg) {
    if ((deg >= 0 && deg < 22.5) || (deg >= 337.5 && deg <= 360)) {
        return 'North';
    } else if (deg >= 22.5 && deg < 67.5) {
        return 'Northeast';
    } else if (67.5 <= deg && deg < 112.5) {
        return 'East';
    } else if (112.5 <= deg && deg < 157.5) {
        return 'Southeast';
    } else if (157.5 <= deg && deg < 202.5) {
        return 'South';
    } else if (202.5 <= deg && deg < 247.5) {
        return 'Southwest'
    } else if (247.5 <= deg && deg < 292.5) {
        return 'West';
    } else {
        return 'Northwest';
    }
}