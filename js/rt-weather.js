const apiKey = "959ff036391e56de6e56139562a2cec7";

function addCity() {
    let city = document.getElementById('input-city').value;
    let requestUrlPrefix = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}&q=${city}`;
    fetch(requestUrlPrefix)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let city_name = data.name
            if (city_name === undefined) {
                alert('Wrong city name')
                return
            }
            saveCity(request_key, city_name)
        })

        .catch(err => alert(err))
}
