import React, {useEffect} from 'react';
import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup,
    Marker
} from "react-simple-maps";
import axios from '../requests/axios';
import requests from "../requests/requests";
import {connect} from "react-redux";
import {setCountries,setStatusByCountry,setPredictions} from "../actions/actions";
import './styles/MapChart.css';

function MapChart(props) {


   useEffect(()=>{
        const request = axios.get(requests.fetchCountries);
        request.then(request=>props.dispatch(setCountries(request.data)));
    },[]);

    const handleClick =(alpha2,name)=>{
        fetchStatusByCountry(alpha2,name);
        fetchPredictionByCountry(alpha2)
        // window.scrollTo(0, 0);
    };

    const fetchStatusByCountry = (alpha2,name)=>{

        const request = axios.get(requests.fetchStatusByCountry+alpha2);
        request.then(request => props.dispatch(setStatusByCountry(request.data,name)));
    };

    const fetchPredictionByCountry =(alpha2)=>{

        const request = axios.get(requests.fetPredictionByCountry+alpha2);
        request.then(request => props.dispatch(setPredictions(request.data)))
            .catch((error)=>{
                props.dispatch(setPredictions([]))
            });
    };

    const geoUrl =
        "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

    return (
        <div className="map-chart">
            <ComposableMap>
                <ZoomableGroup zoom={1.5}>
                    <Geographies
                        geography={geoUrl}
                        fill="#EAEAEC"
                        stroke="#bfbfbf"
                    >
                        {({ geographies }) =>
                            geographies.map(geo => (
                                <Geography key={geo.rsmKey} geography={geo} />
                            ))
                        }
                    </Geographies>
                    {props.markers.map(({ name, coordinates, markerOffsetY,alpha2 }) => (
                        <Marker key={name} coordinates={coordinates} className="mark">
                            <circle
                                onClick={e=>{handleClick(alpha2,name)}}
                                r={1.2}
                                fill="#F00"
                                strokeWidth={2}
                                className="circle"
                            />
                            <text
                                className="marker-text"
                                textAnchor="middle"
                                y={markerOffsetY}
                            >
                                {name}
                            </text>
                        </Marker>
                    ))}
                </ZoomableGroup>
            </ComposableMap>
        </div>
    );
}

export default connect()(MapChart);
