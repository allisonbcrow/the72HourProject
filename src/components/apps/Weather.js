function Weather(props) {
  const [localweather, setLocalweather] = useState('');
  const [query, setQuery] = useState('');
  const [temp, setTemp] = useState(0);
  const [unit, setUnit] = useState('C');
  let [responseObj, setResponseObj] = useState({});

   

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
       .then(response => {
          //  setResponseObj(response)
           console.log(response)
           setTemp(response.main.temp)
       })
})}}
,[])

            

const oppositeUnit = unit === "C" ? "F" : "C";

 

const convert = () => {
  if (unit === "C") {
    setTemp(((temp * 9/5) + 32).toFixed(0));
    setUnit(oppositeUnit);
  }




  if (unit === "F") {
    setTemp(((temp - 32) *  5/9).toFixed(0));
    setUnit(oppositeUnit);
  }
};


    return (
      <div id="weather">

        <p>Your Temperature!</p>
        <button onClick={convert}>Convert to °{oppositeUnit}</button>
        <span className="value">{(Math.round(temp))}°{unit}</span>

      </div>

    )
}

  export default Weather;

