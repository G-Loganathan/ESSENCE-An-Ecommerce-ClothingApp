import React from 'react'
import "../css/Footer.css"

const Footer = () => {
  return (
    <div className="footer__container">

        <div className="footer__content">
            <h2 className="title">ESSENCE</h2>
            <ul className="footer__nav">
                <li>CONTACT</li>
                <li>BLOG</li>
                <li>TERMS & CONDITIONS</li>
                <li>PRIVACY POLICY</li>
            </ul>
            <div className="icons-div">
                <i className="fa-brands fa-pinterest"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-x-twitter"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-solid fa-envelope"></i>
            </div>
            <p className='credits'>Developed By <a href="www.linkedin.com/in/loganathan-g">Loganathan</a> | <i className="fa-solid fa-paper-plane"></i> loganathan2624@gmail.com</p>
        </div>

    </div>

  )
}

export default Footer