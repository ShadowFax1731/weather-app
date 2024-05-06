$(document).ready(function () {
    getWeather('New Delhi')
    getWeatherForecast('New Delhi')
})

function getWeather(city) {
    const settings = {
        async: true,
        crossDomain: true,
        url: `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`,
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ef88832100msh07215047c317a22p186d43jsn58018f7ab665',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response)
        setDetails(response)
    });
}

function setDetails(response) {
    $('#cloudsPct').text(response.current.cloud + "%")
    $('#conditions').text(response.current.condition.text)
    $('#conditionsImage').attr('src', response.current.condition.icon)
    $('#temp').text(response.current.temp_c + "°C")
    $('#humidity').text(response.current.humidity + "%")
    $('#uv').text(response.current.uv)
    $('#windSpeed').text(response.current.wind_kph + " kmph")
    $('#windDir').text(response.current.wind_dir)
    $('#cityName').text(response.location.name)
}

$('#newYork').on('click', function () {
    getWeather('New York')
    getWeatherForecast('New York')
})

$('#paris').on('click', function () {
    getWeather('Paris')
    getWeatherForecast('Paris')
})

$('#madrid').on('click', function () {
    getWeather('Madrid')
    getWeatherForecast('Madrid')
})

function getWeatherForecast(city) {
    const settings = {
        async: true,
        crossDomain: true,
        url: `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`,
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ef88832100msh07215047c317a22p186d43jsn58018f7ab665',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    $.ajax(settings).done(function (response) {
        setForecast(response.forecast.forecastday)
    });
}

function setForecast(data) {
    const today = data[0].day
    const tomorrow = data[1].day
    const dayAfter = data[2].day


    $('#today li').eq(0).text("Min. Temperature: " + today.mintemp_c + "°C")
    $('#today li').eq(1).text("Max. Temperature: " + today.maxtemp_c + "°C")
    $('#today li').eq(2).text("WindSpeed (Max): " + today.maxwind_kph + "kmph")

    $('#tomorrow li').eq(0).text("Min. Temperature: " + tomorrow.mintemp_c + "°C")
    $('#tomorrow li').eq(1).text("Max. Temperature: " + tomorrow.maxtemp_c + "°C")
    $('#tomorrow li').eq(2).text("WindSpeed (Max): " + tomorrow.maxwind_kph + "kmph")

    $('#dayAfter li').eq(0).text("Min. Temperature: " + dayAfter.mintemp_c + "°C")
    $('#dayAfter li').eq(1).text("Max. Temperature: " + dayAfter.maxtemp_c + "°C")
    $('#dayAfter li').eq(2).text("WindSpeed (Max): " + dayAfter.maxwind_kph + "kmph")
}


$('#search').on('submit', function (e) {
    e.preventDefault()
    console.log($('#city').val());
    getWeather($('#city').val())
    getWeatherForecast($('#city').val())
    $('#city').val('')
})

$('#redirect').on('click', function () {
    window.location.href = "index.html"
})

$('#showModal').on('click', function () {
    $('#myModal').show()
})

$('#closeModal').on('click', function () {
    $('#myModal').hide()
})