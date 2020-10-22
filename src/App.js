import React from 'react';

import './App.css';
import Map from "./app/containers/Map";
import Card from "./app/containers/Card";
import Predictions from "./app/containers/Predictions";
import Footer from "./app/components/Footer";

function App() {
  return (
    <div className="App">
        <div style={{margin: "auto",
            position: "relative"}}>
       <Card />
       <Predictions />
       <Map />
        </div>
        <Footer/>
    </div>
  );
}

export default App;
