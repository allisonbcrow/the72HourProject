import React, {useState, useEffect} from 'react';


const Ticketmaster = () => {
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null);
    const latlon= lat + lng;

    const getLocation = () => {
        if (!navigator.geolocation) {
            setStatus('Geolocation is not supported by your browser');
        } else {
            setStatus('Locating...');
            navigator.geolocation.getCurrentPosition((position) => {
                setStatus(null);
                setLat(position.coords.latitude);
                setLng(position.coords.longitude);
            }, () => {
                setStatus('Unable to retrieve your location');
            });
        }
    }

    fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=0ps2AGABt3YGhVyPttfk6QbywhTcsVUT')
    .then(response => response.json())
    .then(data => console.log(data));
    // .then(function(response) {
    //     return response.json();
    // })
    // .then(function(json) {
    //     const eventItems = json.results;
    // })

    return(
        <div className="App">
            <h1>Coordinates</h1>
            <button onClick={getLocation}>Get Location</button>
            <p>{status}</p>
            {lat && <p>Latitude: {lat}</p>}
            {lng && <p>Longitude: {lng}</p>}
            <br />
            <br />
            <div><h1>Events Near You:</h1>
             {/* <p> {data}</p>  */}
             <br />
             <br />
             <br />
             <div><h4>See your events on the map:</h4></div>
            </div>
        </div>
    );
}

export default Ticketmaster;

