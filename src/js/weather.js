function success(pos) {

  const url = `/.netlify/functions/weatherapi?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&units=imperial`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log('data :', data);



      document.querySelector("#city").textContent = data.name;
      document.querySelector("#temp").textContent = data.main.temp + " F";
      document.querySelector("#main").textContent = data.weather[0].main;
      document.querySelector("#desc").textContent = data.weather[0].description;
      document.querySelector("#icon").setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
      document.querySelector("#weather_wrapper").classList.remove("hidden");

    })
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, error);
}
