import React from 'react'
import './footer.css'

import FooterOverlay from '../FooterOverlay/FooterOverlay'
import NewsLetter from '../NewsLetter/NewsLetter'
import {images} from '../../constants'

import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi'

const Footer = () => {
  return (
    <div className="app__footer section__padding">
      <FooterOverlay/>
      <NewsLetter/>

      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">5 W 53rd Street, New York, NY 10091, USA</p>
          <p className="p__opensans">+1 345 56 660</p>
          <p className="p__opensans">+1 346 45 790</p>
        </div>
        <div className="app__footer-links_logo">
          <img src={images.gericht} alt="footer logo"/>
          <p className="p__opensans">
            "The best way to find yourself is to lose yourself in the service of others."
          </p>
          <img src={images.spoon} alt="spoon" className='spoon__img' style={{marginTop:"15px"}}/>
          <div className="app__footer-links_icons">
            <FiFacebook/>
            <FiTwitter/>
            <FiInstagram/>
          </div>
        </div>
        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p__opensans">Monday-Friday:</p>
          <p className="p__opensans">8:00am - 12:00am</p>
          <p className="p__opensans">Saturday-Sunday:</p>
          <p className="p__opensans">7:00am -11:00pm</p>
        </div>
      </div>
      <div className="footer__copyright">
        <p className="p__opensans">2022 Geritch. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer