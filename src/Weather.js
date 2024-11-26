import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
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
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="mostly cloudy"
          />
          31 °C
          <div className="detail">
            <ul>
              <li>Precipitation: 0%</li>
              <li>Humidity: 65%</li>
              <li>Wind: 11 km/h</li>
            </ul>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Weather</li>
            <li>Wednesday 21:00</li>
            <li>Mostly cloudy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
