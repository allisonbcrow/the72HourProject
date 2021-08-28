import React, {useState, useEffect} from 'react';


const Ticketmaster = () => {
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null);
    const [eventList, setEventList] = useState([]);
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

    
    
useEffect(() => {
    if (lat && lng ){
        fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=0ps2AGABt3YGhVyPttfk6QbywhTcsVUT&latlong='+`${lat},${lng}`)
        .then(response => response.json())
        .then(data => setEventList(data._embedded.events));
    }
}, [lat, lng]);
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
               {eventList.map(event => <div><h1>{event.name}</h1></div>)}   
             <br />
             <br />
             <br />
             <div><h4>See your events on the map:</h4></div>
            </div>
        </div>
    );
}

export default Ticketmaster;

