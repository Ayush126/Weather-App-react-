import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        | Developed by{" "}
        <a target="_blank" href="">
          Ayush Verma
        </a>{" "}
        | Powered by{" "}
        <a target="_blank" href="https://openweathermap.org/api">
          Weather API
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
