import React from "react";
import "./style.css";

function Root() {
  return (
    <div>
      <header>
        <img src="./img/textlogo.PNG" alt="logo" className="center" />
        {/* client\public\img\textlogo.png */}
        {/* Cannot be in SRC */}
      </header>

      <div class="center2">
        <a class="push" href="home.html">
          Get Started
        </a>
      </div>
    </div>
  );
}

export default Root;
