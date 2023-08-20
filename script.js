const apiKey="8306c4b500f5f1ec45b7f641e9928a86";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }
    var data = await response.json();
console.log(data)

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed  + "km/hr";

if (data.weather[0].main == "clouds"){
    weatherIcon.src="images/clouds.png";
}else if(data.weather[0].main == "clear"){
    weatherIcon.src="images/clear.png";
}else if(data.weather[0].main == "Rain"){
    weatherIcon.src="images/rain.png";
}else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src="images/drizzle.png";
}else if(data.weather[0].main == "Mist"){
    weatherIcon.src="images/mist.png";
}
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
