import React from 'react'
import "./Hero.css"
import arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>
            We ensure improved learning for a better society.

            </h1>
            <p>Our innovative curriculum is made to give students the information, abilities, and experiences they need to succeed in the fast-paced field of education.

            </p>
            <button className="btn">Explore More <img src={arrow} alt="Arrow"/></button>
        </div>
    </div>
  )
}

export default Hero