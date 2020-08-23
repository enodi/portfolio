import React from "react";
import "./App.css";
import work from "./assets/1.png";
import work1 from "./assets/3.png";
import logo from "./assets/2.png";
import logo1 from "./assets/4.png";
import logo2 from "./assets/5.png";
import logo3 from "./assets/6.png";
import logo4 from "./assets/7.png";
import logo5 from "./assets/8.png";

const App = () => {
  return (
    <div style={{ backgroundColor: "#212121", width: "100%", height: "100%" }}>
      <div className="container" style={{ padding: "4em 0" }}>
        <div className="row" style={{ color: "#fff" }}>
          <div className="col-md-4 col-sm-12">
            <h2 style={{ fontSize: "2em", lineHeight: 1.5 }}>Hello!</h2>
            <h3 style={{ fontSize: "2em", lineHeight: 1.5 }}>
              I am Enodi Audu.
            </h3>
            <p style={{ fontSize: "1.1em" }}>
              I am a Frontend Software Engineer based in Lagos, Nigeria. I
              specialize in building exceptional web and mobile applications
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <div className="row">
              <ul className="col-md-6 col-sm-12">
                <li style={{ fontSize: "0.8em" }}>Javascript (ES6+)</li>
                <li style={{ fontSize: "0.8em" }}>React Native</li>
                <li style={{ fontSize: "0.8em" }}>React</li>
              </ul>
              <ul className="col-md-6 col-sm-12">
                <li style={{ fontSize: "0.8em" }}>HTML & CSS</li>
                <li style={{ fontSize: "0.8em" }}>Redux</li>
                <li style={{ fontSize: "0.8em" }}>NodeJS</li>
              </ul>
            </div>
          </div>
          <div className="col-md-8 col-sm-12">
            <div className="card-columns">
              <div className="card">
                <img className="card-img" src={work} alt="timer" />
              </div>
              <div className="card">
                <img className="card-img" src={work1} alt="onboarding 1" />
              </div>
              <div className="card">
                <img className="card-img" src={logo} alt="savings" />
              </div>
              <div className="card">
                <img className="card-img" src={logo1} alt="onboarding 2" />
              </div>
              <div className="card">
                <img className="card-img" src={logo2} alt="home" />
              </div>
              <div className="card">
                <img className="card-img" src={logo3} alt="login" />
              </div>
              <div className="card">
                <img className="card-img" src={logo4} alt="timer 2" />
              </div>
              <div className="card">
                <img className="card-img" src={logo5} alt="plans" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
