import React from 'react'
import "./picslider.css";
import {motion} from 'framer-motion'
import{useRef,useEffect,useState} from "react";
import images from "../images.js"
const PicSlider = () => {
    const [width,setwidth] = useState(0);
    const slider = useRef();

    useEffect(() =>{
        setwidth(slider.current.scrollWidth - slider.current.offsetWidth + 440);
    },[]);

  return (
    <div className='container1' id='features'>
    <motion.div ref={slider} className='slider' whileTap={{cursor: "grabbing"}}>
    <motion.div drag="x"  dragConstraints={{right:0, left: -width}}className='inner-slider'>
    {images.map(image =>{
        return(
            <motion.div className='item'>
            <img src={image} alt=""></img>
            </motion.div>
        );
    })}
    </motion.div>
    </motion.div>
    </div>
  )
}

export default PicSlider