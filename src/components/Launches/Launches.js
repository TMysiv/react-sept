import React, {useEffect, useState} from 'react';
import Launch from "../Launch/Launch";

const Launches = () => {

    let [launches,setLaunches] = useState([]);

    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/')
                .then(value => value.json())
                .then(launches =>{
                    let filter = launches.filter(launches => launches.launch_year !=='2020');
                    setLaunches(filter)
                })
    })
    return (

        <div>
            {launches.map(launch => <Launch key = {launch.flight_number} value ={launch}/>)}
        </div>
    );
};

export default Launches;