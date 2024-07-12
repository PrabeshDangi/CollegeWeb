import React, { useRef } from 'react'
import "./Testimonial.css"
import nextbtn from "../../assets/next-icon.png"
import backbtn from "../../assets/back-icon.png"
import user1 from "../../assets/user-1.png"
import user2 from "../../assets/user-2.png"
import user3 from "../../assets/user-3.png"
import user4 from "../../assets/user-4.png"


const Testimonial = () => {

    const slider= useRef()
    let tx=0;

    const SlideForward=()=>{
        if(tx > -50)
        {
            tx -= 25;
        }
        slider.current.style.transform=`translateX(${tx}%)`

    }
    const SlideBackward=()=>{

        if(tx <0)
        {
            tx +=25
        }
        slider.current.style.transform=`translateX(${tx}%)`

    }

  return (
    <div className='testimonial'>
        <img src={nextbtn} alt="" className='next-btn' onClick={SlideForward}/>
        <img src={backbtn} alt="" className='back-btn' onClick={SlideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user1} alt="" />
                            <div>
                            <h3>Test Kumari</h3>
                            <span>BMC, Nepal</span>
                            </div>
                        </div>
                        
                        <p>
                    Choosing to pursue my degree at BMC was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                    </p>
                    </div>
                    
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user2} alt="" />
                            <div>
                            <h3>Test Bahadur</h3>
                            <span>BMC, Nepal</span>
                            </div>
                        </div>
                        
                        <p>
                    Choosing to pursue my degree at BMC was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                    </p>
                    </div>
                   
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user3} alt="" />
                            <div>
                            <h3>Test User</h3>
                            <span>BMC, Nepal</span>
                            </div>
                        </div>
                       
                        <p>
                    Choosing to pursue my degree at BMC was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                    </p>
                    </div>
                    
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user4} alt="" />
                            <div>
                            <h3>Test Jung</h3>
                            <span>BMC, Nepal</span>
                            </div>
                        </div>
                       
                        <p>
                    Choosing to pursue my degree at BMC was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                    </p>
                    </div>
                    
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonial