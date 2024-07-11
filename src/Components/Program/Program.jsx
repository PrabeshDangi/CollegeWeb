import React from 'react'
import "./Program.css"
import Program1 from "../../assets/program-1.png"
import Program2 from "../../assets/program-2.png"
import Program3 from "../../assets/program-3.png"
import  ProgramIcon1 from "../../assets/program-icon-1.png"
import  ProgramIcon2 from "../../assets/program-icon-2.png"
import  ProgramIcon3 from "../../assets/program-icon-3.png"

const Program = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={Program1} alt="" />
            <div className='caption'>
                <img src={ProgramIcon1} alt="" />
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={Program2} alt="" />
            <div className='caption'>
                <img src={ProgramIcon2} alt="" />
                <p>Masters Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={Program3} alt="" />
            <div className='caption'>
                <img src={ProgramIcon3} alt="" />
                <p>Doctoral Degree</p>
            </div>
        </div>
    </div>
  )
}

export default Program