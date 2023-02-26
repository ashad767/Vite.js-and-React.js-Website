import React from "react";
import "./profile.css";
import ReactRoundedImage from "react-rounded-image";
import profilePic from "../../assets/profilePic.jpg";

const Profile = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card_contents">
          <div className="profile_image">
            <ReactRoundedImage
              image={profilePic}
              imageWidth="150"
              imageHeight="150"
              roundedSize="8"
            />
          </div>
          <div className="profile_information">
            <div className="name">
              <p>Jaden Varghese</p>
            </div>
            <div className="user_info">
              <div className="followers">
                <p>Followers<br></br>50</p>
              </div>
              <div className="posts">
                <p>Posts<br></br>50</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
