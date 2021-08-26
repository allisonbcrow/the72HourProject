import React, {useState} from 'react';
import { geolocated } from 'react-geolocated';

const baseURL = 'https://api.nasa.gov/planetary/earth/imagery';
const key = 'sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC';

const NASA = () => {
    const [latitude, setLatitude] = useState('');
    const [longitude, setlongitude] = useState('');
    const [satellite, setSatellite] = useState([])

    const fetchSatellite = () => {
        let url = `${baseURL}?api-key=${key}`;

        url = latitude ? url + `&latitude=${latitude}` : url;
        url = longitude ? url + `&longitude=${longitude}` : url;

        fetch(url)
        .then(res => res.json())
        .then(data => setSatellite(data.response.docs))
    };

    const showImg = () => {

    }

    return (
        <div className="main">
            <div className="mainDiv">
                <img src={satellite} />
            </div>
        </div>
    );
};
export default NASA;