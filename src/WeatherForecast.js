import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">{forecast.time}</div>
            <WeatherIcon code={forecast.icon} size={36} />
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">
                {forecast.temperature.maximum}°
              </span>
              <span className="WeatherForecast-temperature-min">
                {forecast.temperature.minimum}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );

} else {
let apiKey = "a1b23b3d4098a0a16ftb2b02cf94o4d8";
let longitude = props.coordinates.longitude;
let latitude = props.coordinates.latitude;
let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse);

return null;
}
  
  
}
