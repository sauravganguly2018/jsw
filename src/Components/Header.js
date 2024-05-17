import React, { useState, useEffect } from 'react';
import '../Pages/Home/Home.css';
import '../Variables.css';
import '../App.css';
import jswVaaniLogo from '../assets/img/landing/jswvaani.png';
import nearMe from '../assets/img/landing/near_me.png';
import a from '../assets/img/landing/a.png';
import profile from '../assets/img/landing/profile.png';
import menu from '../assets/img/landing/menu.png';
import './Header.css'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return (
        <>
            {/* <div className='displayFix'  data-aos="slide-up">
                <div className="div-3">
                    <div className="JSW-vaani-logo">
                        <div className="overlap-group">
                            <div className="div-4"></div>
                            <img className="jsw-logo" src={JSWLogo} alt="JSW Logo" />
                           
                        </div>
                    </div>
                    <div className="div-5">
                        <div className="div-6">
                            <img className="img" src={NearMe} alt="Near Me" />
                            <div className="text-wrapper">Baranagar</div>
                        </div>
                        <div className="div-5">
                            <div className="group-wrapper">
                                <div className="group">
                                    <div className="overlap-group-2">
                                        <img className="vector" src={Vector} alt="Vector" />
                                        <div className="a">A</div>
                                    </div>
                                </div>
                            </div>
                            <img className="img" src={AccountCircle} alt="Account Circle" />
                        </div>
                        <img className="img" src={Menu} alt="Menu" onClick={toggleMenu} />
                    </div>

                    <div className={`navbar ${isOpen ? 'open' : ''}`}>
                        <div className="text-wrapper-2">About us</div>
                        <div className="text-wrapper-2">Our services</div>
                        <div className="text-wrapper-2">Our stakeholders</div>
                        <div className="text-wrapper-2">Our presence</div>
                        <div className="text-wrapper-2">Contact us</div>
                    </div>
                </div>

            </div> */}

            <div className="header">
                <div className="jswVaaniLogo">
                    <img src={jswVaaniLogo}></img>
                </div>
                <div className="headerDetails">
                    <img className="a-menu" src={nearMe}></img>
                    <p className="a-menu">Baranagar</p>
                    <img  src={a}></img>
                    <img className="a-menu" src={profile}></img>
                    <img src={menu}></img>
                </div>
            </div>
        </>
    )
};

export default Header;