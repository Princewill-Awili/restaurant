import React from 'react'
import './newsLetter.css'

import SubHeading from '../SubHeading/SubHeading'

const NewsLetter = () => {
  return (
    <div className="app__newsLetter">
      <div className="app__newsLetter-heading">
        <SubHeading title="NewsLetter"/>
        <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
        <p className="p__opensans">Never miss our updates</p>
      </div>
      <div className="app__newsLetter-input flex__center">
        <input type="email" placeholder='Enter your e-mail address...' />
        <button className='custom__button'>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter