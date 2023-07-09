import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
  return (
    <div className='cardm-1'> 
   
   <div className="cardm-2" style={{"width": "250px"}}>
  <img className='piccard' src={props.imgsrc} alt="a snow-capped mountain range"/>
  <div className="card-body">
    <h2 className="card-title">{props.title}</h2>
    <p className="card-text">This is a photo of web-development appication. How majestic.</p>
    <Link to="#" className="btn-secondary">Learn more</Link>
  </div>
</div>

    </div>
  )
}

export default Card;