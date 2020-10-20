import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import MapChart from "../components/MapChart";

function Map(props) {
    const {countries} = props;
    const [markers,setMarkers] = useState([]);

    useEffect(()=>{

        let objects = countries.map(({name,latitude,longitude,alpha2})=>{
            return {
                markerOffsetY: -1,
                name: name,
                coordinates: [longitude, latitude],
                alpha2:alpha2
            };
        });

        setMarkers(objects);

    },[countries]);

    return (
        <MapChart markers={markers}/>
    );
}
const mapStateProps =(state)=>{
    return {
        countries: state.countries,
    }
}

export default connect(mapStateProps)(Map);
