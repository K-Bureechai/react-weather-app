import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import axios from "axios";


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  function handleResponse(response) {
    setWeatherData({
        ready:true,
        temperature:response.data.main.temp,
    humidity:response.data.main.humidity,
    date: new Date(response.data.dt * 1000),
    description:response.data.weather[0].description,
    iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    city: response.data.name,
    wind: response.data.wind.speed,
 })
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <div className="row">
          <div className="col-6">
            <img src={weatherData.iconUrl} alt={weatherData.description} />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <div className="unit">
              <span className="celsius"> °C </span>
              <span className="fahrenheit"> °F</span>
            </div>
            <div className="detail mt-1">
              <ul className="ps-4">
                <li>Precipitation: 0%</li>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} km/h</li>
              </ul>
            </div>
          </div>
          <div className="col-6">
            <ul className="short-description">
              <li>
                <h3>Weather</h3>
              </li>
              <li>
                <FormattedDate date={weatherData.date} />
              </li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "0efb4fc16a9ed98dc0b3aafd8491d6ad";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
