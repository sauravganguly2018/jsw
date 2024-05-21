import React, { useState, useEffect } from "react";
// import '../Pages/Home/Home.css';
// import '../../Variables.css';
import { CgProfile } from "react-icons/cg";
import { TiLocationArrowOutline } from "react-icons/ti";
import "../../../App.css";
import "../../../Variables.css";
import jswVaaniLogo from "../../../assets/img/landing/jswvaani.png";
import nearMe from "../../../assets/img/landing/near_me.png";
import a from "../../../assets/img/landing/a.png";
import profile from "../../../assets/img/landing/profile.png";
import menu from "../../../assets/img/landing/menu.png";
import "./Header.css";
import { useFontSize } from "../FontSizeContext";

const Header = () => {
  const { increaseFontSize, decreaseFontSize } = useFontSize();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="header" data-aos="fade-down">
        <div className="jswVaaniLogo">
          <img src={jswVaaniLogo}></img>
        </div>
        <div className="headerDetails">
          <div className="incrementFont" onClick={increaseFontSize}>
            A +
          </div>
          <div className="deccrementFont" onClick={decreaseFontSize}>
            A -
          </div>
           {/* <button onClick={decreaseFontSize}>Decrease Font Size</button>
      <button onClick={increaseFontSize}>Increase Font Size</button> */}
          {/* <img className="a-menu" src={nearMe}></img> */}
          <TiLocationArrowOutline className="a-menu location" />
          <p className="a-menu">
            Baranagar
          </p>
          <img src={a}></img>
          {/* <img className="a-menu" src={profile}></img> */}
          <CgProfile className="a-menu profile" />
          {/* <img src={menu}></img> */}
          <div className="hamburger-menu">
            <div className="bar"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
