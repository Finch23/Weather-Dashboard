$(document).ready(function() {

    var dateTime = moment().format('MMM / Do / YYYY');
    var searchTerm;
    var uvi = 'https://api.openweathermap.org/data/2.5/uvi?appid=' + '5150c61f635c968ae048dcba10041960';
    var fiveDay = 'http://api.openweathermap.org/data/2.5/forecast?q='

    $('#btn').on('click', function() {
        var searchTerm = $('#search').val().trim();
        var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + searchTerm + '&units=metric&appid=5150c61f635c968ae048dcba10041960';
        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function(response) {
            console.log(response);
            var icon = response.weather[0].icon;
            $('.city').html('<h3>' + response.name + ' ' + "(" + dateTime + ")" + icon + '</h3>');
            var tempF = (response.main.temp) * 1.80 + 32;
            $('.temperature').html('<p>Temperature: ' + tempF.toFixed(0) + ' F</p>');
            $('.humidity').html('<p>Humidity: ' + response.main.humidity + '%</p>');
            $('.windspeed').html('<p>Wind speed: ' + response.wind.speed 
            + ' MPH</p>');
            uvi = uvi + '&lat=' + response.coord.lat + '&lon=' + response.coord.lon; 
            $.ajax({
                url: fiveDay + searchTerm + '&appid=' + '5150c61f635c968ae048dcba10041960',
                method: 'GET'
            }).then(function(five) {
                console.log(five);
                for(var i = 5; i <= five.list.length; i++) {
                    var iconImg = five.list[i].weather[0].icon;
                    var iconurl = "https://openweathermap.org/img/wn/" + iconImg + ".png";
                    var imgIcon = $("<img>").attr("src", iconurl);
                    var cardDiv = $("<div>").attr("class","card text-white bg-primary m-1");
                    var cardHeader = $("<h5>").attr("class","card-header").text(five.list[i].dt);
                    var cardBodyDiv =$("<div>").attr("class","card-body text-center");
                    var fahrenheitTemp = Math.floor(five.list[i].main.temp * 1.80 +32);
                    var temp = $("<h5>").attr("class", "card-text").html(fahrenheitTemp + '&#8457');
                    var humidity = $("<p>").attr("class", "card-text").text("Humidity: " + five.list[i].main.humidity);
                    cardBodyDiv.append(imgIcon, temp, humidity);
                    cardDiv.append(cardHeader, cardBodyDiv);
                    $("#forecast").append(cardDiv);   
                }
            });
        });

    });

    function uviIndex() {
        var uvi = 'https://api.openweathermap.org/data/2.5/uvi?appid=' + '5150c61f635c968ae048dcba10041960';
         $.ajax({
             url: uvi,
             method: 'GET'
         }).then(function(res) {
                $('.uvIndex').html('<p>UV Index: ' + res.value + '</p>')

         });
     };

});