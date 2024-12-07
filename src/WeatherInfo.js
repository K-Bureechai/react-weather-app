import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div className="row">
        <div className="col-6">
          <div className="left">
            <WeatherIcon code={props.data.icon} size={52} />
            <WeatherTemperature celsius={props.data.temperature} />
            <div className="detail mt-1">
              <ul className="ps-4">
                <li>Precipitation: 0%</li>
                <li>Humidity: {props.data.humidity}%</li>
                <li>Wind: {props.data.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul className="short-description">
            <li>
              <h3>Weather</h3>
            </li>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
