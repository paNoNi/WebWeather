function addWeatherInfoPlate() {
    loadCitiesInfo()
    alert(citiesInfo)
    citiesInfo.forEach((value, key) => {
        alert(`${value}: ${key}`)
    })
}

addWeatherInfoPlate()