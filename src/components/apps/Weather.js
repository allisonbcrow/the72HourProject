import React, { useState, useEffect } from 'react';


function Weather(props) {
  const [localweather, setLocalweather] = useState('');
  const [query, setQuery] = useState('');
  const [temp, setTemp] = useState('');
  const [unit, setUnit] = useState('');

   


  const oppositeUnit = unit === "C" ? "F" : "C";


const convert = () => {
  if (unit === "C") {
    const temp = localweather * 1.8 + 32;
    setTemp(Math.round(temp));
    setUnit(oppositeUnit);
  }


  if (unit === "F") {
    const temp = ((localweather - 32) * 5) / 9;
    setTemp(Math.round(temp));
    setUnit(oppositeUnit);
  }
};


useEffect(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lon = position.coords.longitude;
      const lat = position.coords.latitude;
      console.log(lat);
      console.log(lon);
      const API_KEY = '3b66b0c3c2f2e8c4e63630359492b5bf';
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => console.log(props.main.temp));
      })
  }
},[])



    return (
      <div>


        <p>Temperature!{Math.round(props.responseObj.main.temp)} {props.unit}</p>
        <button onClick={convert()}>Convert to {props.oppositeUnit}</button>
        <span className="value">{props.temp}{props.unit}</span>

      </div>

    )
}

  export default Weather;