import React from "react";
import { Matter_logo, BlobButton } from "../../components";
import "./header.css";
const Header = () => {
  return (
    <div className="matter_header section__padding" id="home">
      <div className="matter_header-content">
        <Matter_logo text={"WELCOME TO MATTER"} />
      </div>
      <div className="matter_header-text">
        <p>
          {" "}
          A new Revolutionary Social Media Site built to change the world
        </p>
      </div>
      <div className="button_format">
      <BlobButton text={"Click To Learn More"} />
      </div> 
      <div className="line">
      <hr></hr>
      </div>
    </div>
  );
};

export default Header;
