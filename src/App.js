import "./App.css";
import "./Weather.css";

import "bootstrap/dist/css/bootstrap.css";
import Weather from  "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        
        <Weather />
        <footer>
          This project is coded by sara zolfaghari and is
          <a
            href="https://github.com/serah2023/new-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
