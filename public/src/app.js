import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
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
