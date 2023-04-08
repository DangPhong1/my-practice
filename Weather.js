import React, { useState, useEffect } from "react";
import axios from "axios";
const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=30cca3cf59c040bd80e110005230603&q=${city}`
      );
      setWeatherData(result.data);
    };  
    fetchData();
  }, [city]);

  return (
    <div className="info">
      {weatherData && (
        <div>
          <p className="weather-city">{weatherData.location.name}</p>
          <p className="weather-temperature"> {weatherData.current.temp_c}°C</p>
          <p className="weather-condition"> {weatherData.current.condition.text} <br /> 
          <img src={weatherData.current.condition.icon} alt="https://www.svgrepo.com/svg/475581/sunny" /></p>
          <p className="weather-humidity">Humidity: {weatherData.current.humidity}%</p>
          <p className="weather-feelLikes">Feels Like {weatherData.current.feelslike_c} °C</p>
        </div>
      )}
    </div>
  );
};

export default Weather;