import React from "react";
import "./style.css";
import textLogo from "./img/textlogo.png";

function Root() {
  return (
    <div>
      <header>
        <img src={textLogo} alt="logo" className="center" />
        {/* client\public\img\textlogo.png */}
        {/* Cannot be in SRC */}
      </header>

      <div className="center2">
        <a className="push" href="/login">
          Get Started
        </a>
      </div>
    </div>
  );
}

export default Root;
