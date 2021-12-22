// api.openweathermap.org/data/2.5/weather?q={Phialdelphia}&appid={"66aac07673b20258f189cdd690356547"
// }

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
var cityName;

var searchBtn = document.querySelector("#search");
var inputEl = document.querySelector("#input");
var cityEl = document.querySelector("#city");
var tempEl = document.querySelector("#temp")

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