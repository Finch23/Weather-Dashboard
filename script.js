$(document).ready(function() {
   
    $('#btn').on('click', function() {
        var searchTerm = $('#search').val().trim();
        var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + searchTerm + '&units=metric&appid=5150c61f635c968ae048dcba10041960';
        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function(response) {
            console.log(response);
            $('.city').html('<h3>' + response.name + '</h3>');
            var tempF = (response.main.temp) * 1.80 + 32;
            $('.temperature').html('<p>Temperature: ' + tempF.toFixed(0) + ' F</p>');
            $('.humidity').html('<p>Humidity: ' + response.main.humidity + '%</p>');
            $('.windspeed').html('<p>Wind speed: ' + response.wind.speed + ' MPH</p>');



        });
    });





})