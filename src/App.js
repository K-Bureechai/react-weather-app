import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/kwanta-bureechai-543821256/"
            target="_blank"
            rel="noreferrer"
          >
            Kwanta
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/K-Bureechai/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open source on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
