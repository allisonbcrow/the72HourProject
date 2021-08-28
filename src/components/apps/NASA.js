import React, { useState, useEffect } from "react";
const NASA = (props) => {
    const [NASAImg, setNASAImg] = useState("");
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null);
    const latlon = lat + lng;
  function getNASAImg() {
    // const baseURL =
    //   "https://api.nasa.gov/planetary/earth/imagery/date?api_key=26NGKr0DLIKJVwuABhcPReibvZd7oV2EqeQ3xSR0";
    // const key = '26NGKr0DLIKJVwuABhcPReibvZd7oV2EqeQ3xSR0'

    const testURL =
      `https://api.nasa.gov/planetary/earth/imagery?lon=${lng}&lat=${lat}&date=2020-02-01&api_key=26NGKr0DLIKJVwuABhcPReibvZd7oV2EqeQ3xSR0`;

    fetch(testURL).then((res) => setNASAImg(res.url));
  }

  useEffect(() => {
      if (lat&&lng) {

          getNASAImg();
        }
  }, [lat,lng]);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
          console.log(latlon);
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };

  return (
    <div className="App">
        <button onClick={getLocation}>Get My Location</button>
      <img style={{ height: 190, width: 190 }} src={NASAImg} />
      <p>{status}</p>
      {lat && <p>Latitude: {lat}</p>}
      {lng && <p>Longitude: {lng}</p>}
    </div>
  );
};

export default NASA;
