import React, { useState, useEffect } from "react";
import ReactPlayer from 'react-player';
import girlsImg from "../../assets/img/landing/girimg.png";
import ruler from "../../assets/img/landing/Group-237655.png";
import ruler1 from "../../assets/img/landing/Group-237656.png";
import frame67 from "../../assets/img/landing/Frame-67.png";
import "./Landing.css";
import "../../App.css";
import "../../Variables.css";
import Header from "../../Components/Header";
import ChatTyping from "../../assets/img/chat-typing-svgrepo-com.svg";
import OurStory from "./OurStory";
import Dashboard from "./Dashboard";
import Testimonials from "./Testimonials";
import UpcomingEvents from "./UpcomingEvents";
import Footer from "../../Components/Footer"
import VideoPath from "../../assets/video/jswvaani.mp4"
import { BiMessageAlt } from "react-icons/bi";

const Landing = () => {
  const [showHeader, setShowHeader] = useState(false);
  useEffect(() => {
    function handleScroll() {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setShowHeader(scrollTop > 0);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* <div className="frame">
                <div className="div">
                    <div className="overlap">
                        <img className="chat-typing-svgrepo" src={ChatTyping} alt="Chat Typing" />
                    </div>
                    {showHeader && <Header />}
                </div>
            </div> */}
      <Header/>
      <div className="floatingChat">
      <BiMessageAlt style={{width:"100%", height:"100%"}}/>
      </div>
      <ReactPlayer 
        url={VideoPath}
        width="100vw"
        height="100vh"
        style={{marginTop:'50px'}}
        controls={true} // Hide video controls
        playing={true} // Start video playback automatically
        loop={true} // Loop the video
      />
      <div className="outer">
        <div className="circle"></div>
        <div className="outer1">
          <div className="innerDiv">
            <img className="img1" src={girlsImg}></img>
            <div className="contentDiv contentDiv1">
              <p>join our family of women enterpreneurs!</p>
              <p><span>253</span> and counting</p>
              <div className="registerButton">
                <p>Register</p>
                <p>to join as community partner</p>
              </div>
            </div>
            <div className="bottomRuler">
              <img src={ruler}></img>
            </div>
          </div>
          <div className="innerDiv">
            <div className="contentDiv contentDiv2">
              <p>Collaborate with us as a partner</p>
              <p><span>24</span> and counting</p>
              <div className="registerButton">
                <p>Register</p>
                <p>to join as community partner</p>
              </div>
            </div>
            <img className="img2" src={frame67}></img>
            <div className="bottomRuler">
              <img src={ruler1}></img>
            </div>
          </div>
        </div>
      </div>
      <OurStory/>
      <Dashboard/>
      <Testimonials/>
      <UpcomingEvents/>
      <Footer/>
    </>
  );
};

export default Landing;
