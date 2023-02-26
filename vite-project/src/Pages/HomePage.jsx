import React from 'react'
import { Footer, Header, Whoarewe} from "../containers";
import { Navbar, PicSlider} from "../components";
import "./App.css";
const HomePage = () => {
  return (
    <div className='App'>
    <div className="nav__color">
    <Navbar />
  </div>
    <Header />
  <Whoarewe/>
  <PicSlider/>
  <Footer />
</div>
  )
}

export default HomePage