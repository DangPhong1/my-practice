import './weather.css';
import './App.css';
import Weather from './Weather.js'
import React, { useState } from "react";
function App() {
  const [city, setCity] = useState("");

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  return (    
    <div>
        
      <h1 className="h1">Weather In</h1>
      <input placeholder='Nhap ten thanh pho' className= "input"type="text" value={city} onChange={handleCityChange} />
      <Weather city={city} />
       
    </div>
  );
}

export default App;
