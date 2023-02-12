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
              placeholder="enter a city.."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="search" className="btn btn-primary" />
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
          <img
            src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
            alt="mostly cloudy"
          ></img>
          4°C
        </div>

        <div className="col-6">
          <ul>
            <li>Precipitation: 2%</li>
            <li>Humidity: 50%</li>

            <li>Wind: 8 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
