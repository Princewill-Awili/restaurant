import React from 'react'


import SubHeading from '../SubHeading/SubHeading'
import {images, data} from '../../constants'

const FindUs = () => {
  return (
    <div className="app__bg app__wrapper section__padding" id='contact'>
      <div className="app__wrapper_info">
        <SubHeading title="Contact"/>
        <h1 className="headtext__cormorant" style={{marginBottom:"3rem"}}>Find Us</h1>
        <div className="app__wrapper-content">
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis possimus voluptatum aut cupiditate eum a!
          </p>
          <p className="p__cormorant" style={{color:"#DCCA87", margin:"2rem 0"}}>
            Opening Hours
          </p>
          <p className="p__opensans">
            Mon - Fri: 10:00am - 2:00am
          </p>
          <p className="p__opensans">
            Sat - Sun: 10:00am - 3:00am
          </p>
        </div>
      </div>
      <div className="app__wrapper_img">
        <img src={images.findus} alt="find us" />
      </div>
    </div>
  )
}

export default FindUs