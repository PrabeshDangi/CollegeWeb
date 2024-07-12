import React, {  useRef } from 'react'
import "./Videoplayer.css"
import Collegevideo from "../../assets/Collegevideo.mp4"

const Videoplayer = ({play,setPlay}) => {

    const player=useRef(null)
    const closePlayer=(e)=>{
        if(e.target===player.current)
        {
            setPlay(false)
        }
    }

  return (
    <div className={`videoplayer ${play?'':'hide'}`} ref={player} onClick={closePlayer}>
        <video src={Collegevideo} autoPlay muted controls></video>

    </div>
  )
}

export default Videoplayer