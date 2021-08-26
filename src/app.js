import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';
import Header from './components/site/Header'
import Footer from './components/site/Footer'
import Sidebar from './components/site/Sidebar'
import NASA from './components/apps/NASA'
import Ticketmaster from './components/apps/Ticketmaster'
import Weather from './components/apps/Weather'
import {
  BrowserRouter as Router,
} from 'react-router-dom';

function App() {
  return (
    <div>
      <Header/>
      <NASA/>
      <Weather/>
      <Ticketmaster/>
      <Router>
        <Sidebar/>
        </Router>  
        <Footer/>    
    </div>
  );
}

export default App;


// const weatherApiKey = process.env.WEATHER_API_KEY;
// const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${weatherApiKey}`;