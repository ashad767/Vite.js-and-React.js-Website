import React from "react";
import "../../components/BlobButton/blobButton.css";
const BlobButton = (props) => {
  return (
    <a href="#whatMatter">
      <button class="glow-on-hover" type="button">
        {props.text}
      </button>
    </a>
  )
}
export default BlobButton;