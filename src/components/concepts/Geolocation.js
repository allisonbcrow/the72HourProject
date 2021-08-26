import React from 'react';

const Geolocation = () => {

        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(function(position) {
                console.log("Latitude is:", position.coords.latitude);
                console.log("Longitude is:", position.coords.longitude);
            });
        }
    

        return (
            <div>

            </div>
        );

};

export default Geolocation;