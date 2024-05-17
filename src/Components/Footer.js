import React from 'react'
import './Footer.css'
import arrow from '../assets/img/landing/arrow.png'

const Footer = () => {
  return (
    <div className="footer">
      <h4>Stay in Touch</h4>
      <div className="inputEmail">
      <input type="email" id="email" name="email" placeholder='Enter email' required/>
      <button className="footerButton">Get updates <img src={arrow}></img></button>
      </div>
    </div>
  )
}

export default Footer
