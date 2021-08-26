import React, { useState } from 'react';

const baseURL = 'api.openweathermap.org/data/2.5/weather?;';
const key = '3b66b0c3c2f2e8c4e63630359492b5bf';


const Weather = () => {
  const [latitude, setlatitude] = useState('');
  const [longitude, setlongitude] = useState('');
  const [city, setcity] = useState('');
  const [temperature, setTemperature] = useState([]);


  const fetchResults = () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=indianapolis&appid=${key}`;
    // let url = `${baseURL}at=${latitude}&lon=${longitude}&appid=${key}&units=metric`
    url = latitude ? url + `&latitude=${latitude}` : url;
    url = longitude ? url + `&longitude=${longitude}` : url;
  }

  let fetchURL = async () => {
    let response = await fetch(baseURL);
    let data = await response.json();
    setTemperature(data.main.temp);
  };

          return (
            <div className="main">
              <div className="mainDiv">
                <div className="weather-item">{temperature} </div>
              </div>
            </div>
          )
};


// getPosition = () => {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// }
// getWeather = async (latitude, longitude) => {
//   let WEATHER_API_KEY= '3b66b0c3c2f2e8c4e63630359492b5bf';
//   const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?;at=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`);
//   const data = await api_call.json();


//   this.setState({
//     lat: latitude,
//     lon: longitude,
//     city: data.name,
//     temperatureC: Math.round(data.main.temp),
//     temperatureF: Math.round((data.main.temp) * 1.8 + 32),
//     icon: data.weather[0].icon,  
//   })
// }

// componentDidMount() {
//   this.getPosition()
//   .then((position) => {
//     this.getWeather(position.coords.latitude, position.coords.longitude)
//   })
//   .catch((err) => {
//     this.setState({ errorMessage: err.message });
//   });

//   this.timerID = setInterval(
//     () => 
//     this.getWeather(this.state.lat, this.state.lon),
//     60000
//   );
// }

// componentWillUnmount() {
//   clearInterval(this.timerID);
// }

// render() {
//   const { city, temperatureC, temperatureF, icon} = this.state;
//    if (city) {
//      return (
//     <div className="App">
//       <div className="weather-box">
//         <div className="weather-item">{city}</div>
//         <div className="weather-item">{temperatureC} &deg;C <span className="slash">/</span> {temperatureF} &deg;F</div>
//         <div>
//           <img className="weather-icon" src={`http://openweathermap.org/img/w/${icon}.png`} alt="weather icon"/>
//       </div>
//     </div>
//     </div>
//      );
//    }
//   else {
//     return (
//       <div>Loading...</div>
//     )
//   }}}




export default Weather;
