import React from 'react'
import './Testimonials.css'
import img1 from '../../assets/img/landing/img1.jpeg'
import img2 from '../../assets/img/landing/img2.jpeg'
import img3 from '../../assets/img/landing/img3.png'
import img4 from '../../assets/img/landing/img4.jpeg'
import img5 from '../../assets/img/landing/img5.jpeg'


const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonialsInner">
      <div className="item img img1" style={{backgroundImage:`url(${img1})`, backgroundSize:'cover'}}></div>
      <div className="item content2"><div className="outerText"><div className="innerText1"><p>“Vaani helped me find new possibilities for my business”</p></div><div className="innerText2"><div></div><p>Majnu Gayen</p><p>56 years old</p><p>Shop owner in Mayanagar</p></div></div></div>
      <div className="item img img2" style={{backgroundImage:`url(${img2})`, backgroundSize:'cover'}}></div>
      <div className="item content2"><div className="outerText"><div className="innerText1"><p>“Vaani helped me find new possibilities for my business”</p></div><div className="innerText2"><div></div><p>Majnu Gayen</p><p>56 years old</p><p>Shop owner in Mayanagar</p></div></div></div>
      <div className="item img img3" style={{backgroundImage:`url(${img3})`, backgroundSize:'cover'}}></div>
      <div className="item content2"><div className="outerText"><div className="innerText1"><p>“Vaani helped me find new possibilities for my business”</p></div><div className="innerText2"><div></div><p>Majnu Gayen</p><p>56 years old</p><p>Shop owner in Mayanagar</p></div></div></div>
      <div className="item img img4" style={{backgroundImage:`url(${img4})`, backgroundSize:'cover'}}></div>
      <div className="item content2"><div className="outerText"><div className="innerText1"><p>“Vaani helped me find new possibilities for my business”</p></div><div className="innerText2"><div></div><p>Majnu Gayen</p><p>56 years old</p><p>Shop owner in Mayanagar</p></div></div></div>
      <div className="item img img5" style={{backgroundImage:`url(${img5})`, backgroundSize:'cover'}}></div>
      <div className="item content2"><div className="outerText"><div className="innerText1"><p>“Vaani helped me find new possibilities for my business”</p></div><div className="innerText2"><div></div><p>Majnu Gayen</p><p>56 years old</p><p>Shop owner in Mayanagar</p></div></div></div>
      </div>
    </div>
  )
}

export default Testimonials
