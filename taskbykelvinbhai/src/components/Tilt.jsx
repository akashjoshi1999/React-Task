import React, { useEffect, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt';
import './Tilt.css'

const Tilt = ({children}) => {
    const tiltRef = useRef();
    useEffect(()=>{
        const tiltNode = tiltRef.current
        const vanillaTiltOptions = {
          max: 25,
          speed: 400,
          glare: true,
          'max-glare': 0.5,
        }
        VanillaTilt.init(tiltNode, vanillaTiltOptions)
        return () => {
          tiltNode.vanillaTilt.destroy()
        }
    },[]);
    return (
        <div ref={tiltRef} className="tilt-root">
            <div className="tilt-child">{children}</div>
        </div>
    )
}

export default Tilt
