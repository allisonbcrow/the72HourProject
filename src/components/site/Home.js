import React from "react";
import NASA from "../apps/NASA";
import Ticketmaster from '../apps/Ticketmaster'
import Weather from '../apps/Weather'
import Geolocation from "../concepts/Geolocation";

const Home = () => {
    return (
        <div className="main">
            <div className="mainDiv">
            <Geolocation/>
      <NASA/>
      <Weather/>
      <Ticketmaster/>
            </div>
        </div>
    );
}

export default Home;