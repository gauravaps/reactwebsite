import React from 'react'
import { Link } from 'react-router-dom';



const Common = (props) => {
  return (
    <div>

<section id='header' className='header'> 

<div className='contain-fluid'>
  <div className='row'>
    <div className='col-10 mx-auto'>
      <div className='row'> 
      <div className='gauravtech'>
        <h1 className='h-1'>{props.name}  {props.homename}<strong className='brand'> <br /> gaurav technical</strong>
        </h1>
        
        
       
        <h2 className='my-3'> we are team of talented developer making website </h2>
        
        <div className='mt-3'> 
        <Link to={props.btnlink} className='btn-get'> {props.btnname} </Link>
        </div>
      </div>
      <div className='head-pic'>
        <img src={props.imgpic} className='img-fluid' alt="nothing show" />
      

      </div>
      </div>
        </div>

  </div>

</div>


</section>

    </div>
  )
}

export default Common;