import React from 'react'

import {
    Route,
    Link,
    Switch
} from 'react-router-dom'

import Home from './Home'
import NASA from '../apps/NASA'
import Ticketmaster from '../apps/Ticketmaster'
import Weather from '../apps/Weather'

const Sidebar = () => (

    <div className="sidebar">
        <div className="sidebar-list-styling">
            <ul className="sidebar-list list-unstyled">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/NASA">NASA</Link></li>
                <li><Link to="/Ticketmaster">Ticketmaster</Link></li>
                <li><Link to="/Weather">Weather</Link></li>
            </ul>
        </div>
        <div className="sidebar-route">
            <Switch>
                <Route exact path="/home"><Home /></Route>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/NASA"><NASA/></Route>
                <Route exact path="Ticketmaster"><Ticketmaster/></Route>
                <Route exact path="/Weather"><Weather/></Route>
            </Switch>
        </div>
    </div>
)

export default Sidebar;