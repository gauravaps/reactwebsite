import React from 'react'
import  head from'../Website/head.jpg'
import Common from './Common'


const Home1 = () => {
  return (
    <div>
        <Common name="Welcome to home page"  imgpic={head} btnname="Start Now" btnlink='/service'/>
    </div>
  )
}

export default Home1;