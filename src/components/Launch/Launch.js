import React from 'react';

const Launch = ({value}) => {
    return (
        <div>
            <h2>{value.mission_name}</h2>
            <h3>{value.launch_year}</h3>
            <img src={value.links.mission_patch_small} alt = {value.mission_name}/>
        </div>
    );
};

export default Launch;