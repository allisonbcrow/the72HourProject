import React, {Component} from 'react';
// import { geolocated } from 'react-geolocated';
import {render} from "react-dom";

const baseURL = 'https://api.nasa.gov/planetary/earth/imagery/date';
const key = 'sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC';

class NASA extends Component {
    
    constructor(props) {
        super(props);
        this.state = { date: [] };  
 };


 fetchResults = () => {
     let url = `${baseURL}?api-key=${key}`;
     
     fetch(url)
     .then(res => res.json())
     .then(json => this.setState({ date: json.data }))
     .catch(err => console.log(err));
 };

 componentDidMount() {
       navigator.geolocation.getCurrentPosition(function(position) {
         console.log("Latitude is :", position.coords.latitude);
         console.log("Longitude is :", position.coords.longitude);
     });
    };

 
 render() {
     return (
         <div>
          <img src={this.fetchResults } />
         </div>
     );
   }
}

render(<NASA />, document.getElementById("root"));

export default NASA;


// function NASA({ coords }) {
//     const [Intialized, setIntialized] = useState(false);
// }

// const getSatellite = async () => { 
//     const { latitude, longitude } = coords;
//     const { data } = await (latitude, longitude);
//     const keyword = (
//         data.results[0].address_components.find(c =>
//             c.types.includes("locality")
//             ) || {}
//             ).long_name;
//             localStorage.setItem("keyword", keyword);
//             // keywordStore.setKeyword(keyword);
            
//             return (
//                 <div className="main">
//                     <div className="mainDiv">
//                         <button type="button" onClick={getSatellite} >Get Image</button>
//                     </div>
//                 </div>
//             );
//         };
    
// export default geolocated({
//     positionOptions: {
//         enableHighAccuracy: false
//     },
//     userDecisionTimeout: 5000
// }) (NASA);