function addCityTile(city) {
    let mainContainer = document.querySelector('div.weather-panel');
    let hatTemplate = document.querySelector('#template_city_info');
    let descriptionTemplate = document.querySelector('#template_description');

    // Изменим параметры шапки инфоячейки
    let header = hatTemplate.content.querySelector('div');

    let btn = hatTemplate.content.querySelector('button');

    let ps = header.querySelectorAll('p');
    // Название города
    ps[0].textContent = fix_name(city.name);

    setFields(header, descriptionTemplate, city);

    let newContainer = document.createElement('div');
    newContainer.className = 'weather_info';

    newContainer.append(hatTemplate.content.cloneNode(true));
    newContainer.append(descriptionTemplate.content.cloneNode(true));
    mainContainer.append(newContainer);

}

function addMainCity(city) {
    let mainContainer = document.querySelector('.main-city');
    let hatTemplate = document.querySelector('#template_fav_city_info');
    let descriptionTemplate = document.querySelector('#template_description');

    // Изменим параметры шапки инфоячейки
    let header = hatTemplate.content.querySelector('div');

    let nameCity = header.querySelector('h2');
    // Название города
    nameCity.textContent = fix_name(city.name, true);

    setFields(header, descriptionTemplate, city);

    let div_description = document.createElement('div');
    div_description.className = 'weather_info';
    div_description.append(descriptionTemplate.content.cloneNode(true));
    mainContainer.append(hatTemplate.content.cloneNode(true));
    mainContainer.append(div_description);

}

function setFields(header, descriptionTemplate, city) {

    // Температура
    let temp = header.querySelectorAll('p');
    temp.textContent = Math.round(city.temp) + '°C';

    // Иконка погоды
    let icon = header.querySelector('img');
    icon.src = 'https://openweathermap.org/img/wn/' + city.icon + '@2x.png';

    // Изменим параметры тела инфоячейки
    let body = descriptionTemplate.content.querySelector('ul')

    ps = body.querySelectorAll('p')
    // Ветер
    let wind = ps[1];
    wind.textContent = get_direction_wind(parseInt(city.wind_dir)) + ' ' + city.wind_speed + 'm/s';

    // Облачность
    let cloudy = ps[3];
    cloudy.textContent = city.clouds;

    // Давление
    let pressure = ps[5];
    pressure.textContent = city.pressure + 'hpa';

    // Влажность
    let humanity = ps[7];
    humanity.textContent = city.humidity + '%';

    // Координаты
    let coords = ps[9];
    coords.textContent = Math.round(city.coord.lat) + ':' + Math.round(city.coord.lon);

}

function setLoading(nameCity, istop = false) {
    let cont;
    if (istop) {
        cont = document.querySelector('li.main-city');

    } else {
        cont = document.querySelector('div.weather-panel');
    }
    let template = document.querySelector('#template-loading')

    let loading = document.createElement('div')
    loading.className = 'windows8 ' + nameCity
    loading.append(template.content.cloneNode(true))
    cont.append(loading)
}

function removeFragment(nameCity) {
    let loading = document.querySelector('.' + nameCity)
    loading.remove()
}

function resetFavCity() {
    let fcmi = document.querySelector('.favorite-city-main-info');
    let wi = document.querySelector('.weather_info');

    if (fcmi === null || wi === null) {
        return
    }

    fcmi.remove();
    wi.remove()
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