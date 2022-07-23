import React from "react";
import Logo from "./assets/insta logo.png";
import Camera from "./assets/camera.png";

const Header = () => {
  return (
    <div>
      {" "}
      <header>

        <div className="nav">
          <img src={Logo} alt="insta-logo"></img>
          <img src={Camera} alt="camera"></img>
        </div>
      </header>
    </div>
  );
};

export default Header;
