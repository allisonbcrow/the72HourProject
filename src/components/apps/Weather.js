import React, { useState, useEffect } from 'react';


function Weather() {
    const API_KEY = '3b66b0c3c2f2e8c4e63630359492b5bf';
    const [localweather, setLocalweather] = useState([]);
    const [query, setQuery] = useState("");
    const [temp, setTemp] = React.useState(localweather.main && localweather.main.temp);
    const [unit, setUnit] = React.useState("C");
console.log(temp)

    const getLonLat = () => {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const lon = position.coords.longitude;
                const lat = position.coords.latitude;
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
                    .then(response => response.json())
                    .then(result => {
                        setLocalweather(result)
                        return;
                    })
                    .catch(err => console.log(err));
            })
}
}

useEffect(() => {
    getLonLat();
}, [])


    const searchInput = (e) => {
        e.preventDefault()
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${API_KEY}`)
            .then(response => response.json())
            .then(result => {
                setLocalweather(result)
                setQuery("")
            })
            .catch(err => console.log(err));
    }

    const oppositeUnit = unit === "C" ? "F" : "C";

    const convert = () => {
        if (unit === "C") {
            const newNum = setTemp * 1.8 + 32;
            setTemp(Math.round(newNum));
            setUnit(oppositeUnit);
        }

        if (unit === "F") {
            const newNum = ((setTemp - 32) * 5) / 9;
            setTemp(Math.round(newNum));
            setUnit(oppositeUnit);
        }
    };

    function WeatherDisplay(props) {
      return (
   <div>
              <p>
                  Temperature {props.localweather.main && props.localweather.main.temp} {props.unit}
              </p>
              <button onClick={props.convert}>Convert to {props.oppositeUnit}</button>
              <span className="value">{props.newNum}{props.unit}</span>
          </div>
      )
  }
  
    return (
        <WeatherDisplay 
        localweather={localweather}
        getLonLat={getLonLat} 
        searchInput={searchInput} 
        setQuery={setQuery}
        convert={convert}
        oppositeUnit={oppositeUnit}
        temp={temp}
        unit={unit}
        />
    )

}
export default Weather;