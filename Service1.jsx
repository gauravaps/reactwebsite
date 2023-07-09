import React from 'react'
import aboutpic from "../Website/aboutpic.jpg"
import Sdata from './Sdata'
import Card from './Card'

const Service1 = () => {
  return (
    <div> 

    {
      Sdata.map((val,ind)=>{
        return <Card key={ind}  imgsrc={val.imgscr} title={val.title}/>
      })
    }

    </div>
  )
}

export default Service1