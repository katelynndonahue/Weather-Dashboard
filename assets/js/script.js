api.openweathermap.org/data/2.5/weather?q={Phialdelphia}&appid={"66aac07673b20258f189cdd690356547"
}

api.openweathermap.org/data/2.5/forecast?q={Philadelphia}&appid={"66aac07673b20258f189cdd690356547"}

api.openweathermap.org/data/2.5/forecast?q={Philadelphia},{state code}&appid={"66aac07673b20258f189cdd690356547"}

api.openweathermap.org/data/2.5/forecast?q={Philadelphia},{state code},{country code}&appid={"66aac07673b20258f189cdd690356547"}

location.name
forecast.windSpeed.unit
forecast.humidity.unit



var mytable = "<table><tr>";
for (var CELL of ARRAY) {  mytable += "<td>" + CELL + "</td>"; }
mytable += "</tr></table>";
document.getElementById("ID").innerHTML = mytable;