import React, { useState, useEffect } from "react";
import ReactPlayer from 'react-player';
import Header from "../../Components/CommonComponents/Header/Header";
import { BiMessageAlt } from "react-icons/bi";
import VideoPath from '../../assets/video/jswvaani.mp4';
import Landing from '../../Components/Landing/Landing';
import OurStory from '../../Components/OurStory/OurStory';
import Dashboard from '../../Components/Dashboard/Dashboard';
import Testimonials from '../../Components/Testimonials/Testimonials';
import UpcomingEvents from '../../Components/UpcomingEvents/UpcomingEvents';
import Footer from '../../Components/CommonComponents/Footer/Footer';

const Home = () => {

    return (
        <>
            <Header />
            <div className="floatingChat">
                <BiMessageAlt style={{ width: "100%", height: "100%" }} />
            </div>

            <ReactPlayer
                url={VideoPath}
                width="100vw"
                height="100vh"
                style={{ marginTop: '50px' }}
                controls={true} // Hide video controls
                playing={true} // Start video playback automatically
                loop={true} // Loop the video
            />
            <Landing/>
            <OurStory />
            <Dashboard />
            <Testimonials />
            <UpcomingEvents />
            <Footer />
        </>

    );
};

export default Home;