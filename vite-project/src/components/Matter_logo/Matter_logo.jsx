import React from 'react'
import "../../components/Matter_logo/matter_logo.css";
const Matter_logo = (props) => {
  return (
    <div class="container2">
    <div class="container">
    <p class="glitch">
        <span>{props.text}</span>
        {props.text}
        <span>{props.text}</span>
    </p>
    </div>
</div>
  )
}

export default Matter_logo