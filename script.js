$(document).ready(function() {

    var searchTerm;

    $('#btn').on('click', function() {
        var searchTerm = $('#search').val().trim();
        var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + searchTerm + '&units=metric&appid=5150c61f635c968ae048dcba10041960';
        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function(response) {
            var lat = response.coord.lat 
            var lon = response.coord.lon
            console.log(lat, lon);
            $('.city').html('<h3>' + response.name + '</h3>');
            var tempF = (response.main.temp) * 1.80 + 32;
            $('.temperature').html('<p>Temperature: ' + tempF.toFixed(0) + ' F</p>');
            $('.humidity').html('<p>Humidity: ' + response.main.humidity + '%</p>');
            $('.windspeed').html('<p>Wind speed: ' + response.wind.speed 
            + ' MPH</p>');
            uviIndex(lat, lon);
            fiveday();
        });

    });

    function uviIndex(lat, lon) {
        var uvi = 'https://api.openweathermap.org/data/2.5/uvi?appid=' + '5150c61f635c968ae048dcba10041960';
        var lat = res.coord.lat 
        var lon = res.coord.lon
         $.ajax({
             url: uvi,
             method: 'GET'
         }).then(function(res) {
             uvi = uvi + '&lat=' + lat + '&lon=' + lon;

         });
     };

     function fiveday() {
         var forecast = 'https://api.openweathermap.org/data/2.5/forecast?q=' + searchTerm + '&units=metric&appid=5150c61f635c968ae048dcba10041960';
        $.ajax({
            url: forecast,
            method: 'GET'
        }).then(function(five) {
            console.log(five);
        });
     };




});