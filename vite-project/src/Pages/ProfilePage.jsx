import React from 'react'
import { Profile} from "../components";
import { Footer } from '../containers';
import "./profilePage.css";
const ProfilePage = () => {
  return (
    <div>
    <Profile/>
    <div className='Profile_page_Footer'>
    <Footer/>
    </div>
    </div>
  )
}

export default ProfilePage