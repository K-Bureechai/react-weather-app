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
    console.log(forecast[0]);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">{forecast[0].time}</div>
            <WeatherIcon code={forecast[0].condition.icon} size={36} />
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">
                {forecast[0].temperature.maximum}°
              </span>
              <span className="WeatherForecast-temperature-min">
                {forecast[0].temperature.minimum}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "bd79ao40tde3dec118ca46bc3e6dd55f";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
