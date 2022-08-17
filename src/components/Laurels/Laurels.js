import React from 'react'
import './laurels.css'

import {images, data} from '../../constants'
import SubHeading from '../SubHeading/SubHeading'

const AwardCard = ({award:{imgUrl, title, subtitle}}) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="award" />
    <div className="app__laurels_awards-card_content">
      <p className="p__Cormorant" style={{color:'#DCCA87'}}>{title}</p>
      <p className="p__Cormorant" style={{color:'white'}} >{subtitle}</p>
    </div>
  </div>
)

const Laurels = () => {
  return (
    <div className="app__bg app__wrapper section__padding" id='awards'>

      <div className="app__wrapper_info">
        <SubHeading title="Awards & Recognition"/>
        <h1 className="headtext__cormorant">Our Laurels</h1>
        <div className="app__laurels_awards">
          {data.awards.map((award)=> (
            <AwardCard award={award} key={award.title}/>
          ))}
        </div>
      </div>

      <div className="app__wrapper_img">
        <img src={images.laurels}/>
      </div>
    </div>
  )
}

export default Laurels