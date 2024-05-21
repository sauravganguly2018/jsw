import React, { useState, useEffect } from "react";
import girlsImg from "../../assets/img/landing/girimg.png";
import ruler from "../../assets/img/landing/Group-237655.png";
import ruler1 from "../../assets/img/landing/Group-237656.png";
import frame67 from "../../assets/img/landing/Frame-67.png";
import "./Landing.css";
import "../../App.css";
import "../../Variables.css";
import { useFontSize } from '../CommonComponents/FontSizeContext';


const Landing = () => {
  const { fontSize, incrementFontSize, decrementFontSize } = useFontSize();

  return (
    <>
      <div className="outer">
        <div className="circle"></div>
        <div className="outer1">
          <div className="innerDiv" data-aos="slide-up">
            <img className="img1" src={girlsImg}></img>
            <div className="contentDiv contentDiv1">
            {/* style={{ fontSize: `${fontSize + 22}px` }} */}
              <p>join our family of women enterpreneurs!</p>
              {/* style={{ fontSize: `${fontSize + 35}px` }}
              style={{ fontSize: `${fontSize + 22}px` }} */}
              <p><span >253</span> and counting</p>
              <div className="registerButton">
              {/* style={{ fontSize: `${fontSize + 21}px` }} */}
                <p>Register</p>
                {/* style={{ fontSize: `${fontSize + 14}px` }} */}
                <p>to join as community partner</p>
              </div>
            </div>
            <div className="bottomRuler">
              <img src={ruler}></img>
            </div>
          </div>
          <div className="innerDiv" data-aos="slide-up">
            <div className="contentDiv contentDiv2">
            {/* style={{ fontSize: `${fontSize + 22}px` }} */}
              <p>Collaborate with us as a partner</p>
              {/* style={{ fontSize: `${fontSize + 35}px` }}
              style={{ fontSize: `${fontSize + 22}px` }} */}
              <p><span>24</span> and counting</p>
              {/* style={{ fontSize: `${fontSize + 35}px` }} */}
              <div className="registerButton">
              {/* style={{ fontSize: `${fontSize + 21}px` }} */}
                <p >Register</p>
                {/* style={{ fontSize: `${fontSize + 14}px` }} */}
                <p >to join as community partner</p>
              </div>
            </div>
            <img className="img2" src={frame67}></img>
            <div className="bottomRuler">
              <img src={ruler1}></img>
            </div>
          </div>
        </div>
      </div>
      {/* <OurStory />
      <Dashboard />
      <Testimonials />
      <UpcomingEvents />
      <Footer /> */}
    </>
  );
};

export default Landing;
