import React from 'react'
import './chef.css'
import {images} from '../../constants'
import SubHeading from '../SubHeading/SubHeading'



const Chef = () => {
  return (
    <div className="app__bg app__wrapper section__padding">

      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="chef" />
      </div>

      <div className="app__wrapper_info">
        <SubHeading title="Chef's Word"/>

        <h1 className="headtext__cormorant">What We Believe In</h1>

        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote" />
            <p className="p__opensans">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis veritatis illum doloremque dignissimos!
             

            </p>
          </div>
          <p className="p__opensans">Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.Itos eos obcaecati magni cum at cumque perferendis Deleniti, optio. Blanditiis Veritatis Illum Doloremque Dignissimos, Eos Obcaecati Magni Cum At Cumque Perferendis!
          </p>
        </div>
        <div className="app__chef-sign">
          <p>Kevin Luo</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="signature" />
        </div>

      </div>

    </div>
  )
}

export default Chef