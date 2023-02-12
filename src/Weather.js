import React from "react";
// import ReactAnimatedWeather from "react-animated-weather";

import "./Weather.css";

export default function Weather() {
  return (
    <div classNameName="Weather">
      <form>
        <div classNameName="row mt-3">
          <div classNameName="col-9">
            <input
              type="search"
              placeholder="enter a city.."
              classNameName="form-control"
              autoFocus="on"
            />
          </div>
          <div classNameName="col-3">
            <input
              type="submit"
              value="search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>

      <h1>New York</h1>

      <ul>
        <li>Wednesday 7:00</li>
        <li>Partly Cloudy</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Cloudy icon"
              className="weather-icon float-left"
            />
            <div className="float-left">
              <span className="temperature" >
                19
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity: <span id="humidity"></span>%
            </li>
            <li>
              Wind: <span id="wind"></span> km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
