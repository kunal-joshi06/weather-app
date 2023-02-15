const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c9d1b095b4msh2fcbc8f91396477p1fc5e6jsna388859a5147",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

  const getWeatherDetails = (city) =>{
    cityName.innerHTML=city;
    fetch(
        `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          humidity.innerHTML = response.humidity;
          temp.innerHTML = response.temp;
          feels_like.innerHTML=response.feels_like;
          wind_speed.innerHTML = response.wind_speed;
        })
        .catch((err) => console.error(err));
  }

submit.addEventListener("click", (e)=>{
    e.preventDefault();
    getWeatherDetails(city.value);
})

getWeatherDetails("Delhi");