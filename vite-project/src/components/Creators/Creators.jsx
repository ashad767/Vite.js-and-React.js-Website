import React from 'react'
import ReactRoundedImage from "react-rounded-image";
import "./creators.css";

const Creators = (props) => {
  return (
    <div>
    <div className='Creators'>
    <div className='name_format'>
    <p>{props.name}</p>
    </div>
    <div className='profile_images'>
    <ReactRoundedImage image={props.image} imageWidth="140" imageHeight="140"  roundedSize="5" roundedColor="#000000" hoverColor="#702963"/>
    </div>
    <div className='profile_text'>
    <p>{props.text}</p>
    </div>
    </div>
    </div>
  )
}

export default Creators