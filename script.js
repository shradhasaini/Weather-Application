setInterval(showTime, 1000);
function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  am_pm = "AM";

  if (hour > 12) {
    hour -= 12;
    am_pm = "PM";
  }
  if (hour == 0) {
    hr = 12;
    am_pm = "AM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let currentTime = hour + ":" + min + ":" + sec + am_pm;

  document.querySelector(".last-updated").innerHTML =
    "Last Updated : " + currentTime;
}

const getAPI = async (myInput) => {
  if (myInput == "") {
    city = "chandigarh";
  } else {
    city = myInput;
  }
  var temp = document.querySelector(".temp");
  var maxMin = document.querySelector(".max-min");
  var name = document.querySelector(".name");
  var img = document.getElementById("img");
  var main = document.getElementById("main");

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=07e671969be55a2fa3306de2f62c64de`
  );

  const data = await response.json();

  temp.innerHTML = Math.floor(data.main.temp - 273.15) + " &#176;C";
  maxMin.innerHTML =
    "Max | Min : " +
    Math.floor(data.main.temp_max - 273.15) +
    " &#176;C | " +
    Math.floor(data.main.temp_min - 273.15) +
    " &#176;C";
  name.innerHTML = data.name;
  img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  main.innerHTML = data.weather[0].main;

  // console.log(data.weather[0].icon);
  // temp.innerHTML = (Math.floor(data.main.temp - 273.15)) + ' &#176;C'

  // console.log(Math.floor(data.main.temp - 273.15))
  // console.log(Math.floor(data.main.temp_max - 273.15))
  // console.log(Math.floor(data.main.temp_min - 273.15))
  // console.log(data)
};

const getValue = () => {
  var myInput = document.getElementById("myInput").value;
  getAPI(myInput);
};

showTime();

window.addEventListener("load", () => {
  getAPI("");
});
