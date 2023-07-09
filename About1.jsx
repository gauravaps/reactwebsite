import React from 'react'
import aboutpic from "../Website/aboutpic.jpg"

import Common from './Common';




const About1 = () => {
  return (
    <div> 
       <Common name="Welcome to tech world"  imgpic={aboutpic} btnname='Contact Now' btnlink='/contact'/>   
          
    </div>
  )
}

export default About1; 