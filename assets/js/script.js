// GIVEN a weather dashboard with form inputs

// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history

// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe

// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

// api.openweathermap.org/data/2.5/weather?q={Phialdelphia}&appid={"66aac07673b20258f189cdd690356547"}

// api.openweathermap.org/data/2.5/forecast?q={Philadelphia}&appid={"66aac07673b20258f189cdd690356547"}

// api.openweathermap.org/data/2.5/forecast?q={Philadelphia},{state code}&appid={"66aac07673b20258f189cdd690356547"}

// api.openweathermap.org/data/2.5/forecast?q={Philadelphia},{state code},{country code}&appid={"66aac07673b20258f189cdd690356547"}

// location.name
// forecast.windSpeed.unit
// forecast.humidity.unit

// var mytable = "<table><tr>";
// for (var CELL of ARRAY) {  mytable += "<td>" + CELL + "</td>"; }
// mytable += "</tr></table>";
// document.getElementById("ID").innerHTML = mytable;

// URL to use
// https://api.openweathermap.org/data/2.5/weather?q=philadelphia&appid=66aac07673b20258f189cdd690356547

var apiKey = "66aac07673b20258f189cdd690356547";
var cityName; "#city";

var searchBtn = document.querySelector("#search");
var inputEl = document.querySelector("#input");
var cityEl = document.querySelector("#city");
var humidity = document.querySelector("#humidity");
var tempEl = document.querySelector("#temp");

searchBtn.addEventListener("click", function(){
    cityName = inputEl.value;
    var URL1 = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=" + apiKey+ "&units=imperial";

    fetch(URL1).then(function(res){
        return res.json();
    }).then(function(data){
        console.log(data);
        cityEl.textContent = data.name;
        var lat = data.coord.lat;
        var lon = data.coord.lon;
        var URL2 = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&appid=" + apiKey+ "&units=imperial";

        fetch(URL2).then(function(res){
            return res.json();
        }).then(function(data){
            console.log(data)
            // everything else needs to be in here
            tempEl.textContent = data.current.temp + " °c";
            humidityEl.textContent = data.humidity;
            windSpeedEl.textContent = data.windSpeed;
            uvIndexEl.textContent = data.uv.index;


        })


    })

})