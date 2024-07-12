import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Program/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonial from './Components/Testimonials/Testimonial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Videoplayer from './Components/Videoplayer/Videoplayer'

const App = () => {
  const [play,setPlay]=useState(false);


  return (
    <div>
      <Navbar/>
      <Hero/>
    <div className="container">
      <Title subtitle='Our Programs' title='What We Offer'/>
      <Program/>
      <About setPlay={setPlay}/>
      <Title subtitle='gallery' title='Campus Photos'/>
      <Campus/>
      <Title subtitle='Testimonials' title='What Students Say'/>
      <Testimonial/>
      <Title subtitle='Contact Us' title='Get Tn Touch'/>
      <Contact/>
      <Footer/>
    </div>
    <Videoplayer play={play} setPlay={setPlay}/>
    </div>
  )
}

export default App