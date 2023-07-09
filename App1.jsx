import React from 'react'
import Navbar1 from './Navbar'
import { Route,Routes } from 'react-router-dom'

//pages impot here...
import About1 from './About1'
import Home1 from './Home1'
import Contact1 from './Contact1'
import Service1 from './Service1'
import Footer from './Footer'
import Navbar from './Navbar'


const App1 = () => {
  return (
    <div>
         
        <Navbar/>


        <Routes> 

          
          <Route path='/' element={<Home1/>}/>
          <Route path='/about' element={<About1/>}/>
          <Route path='contact' element={<Contact1/>}/>
          <Route path='/service' element={<Service1/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App1;