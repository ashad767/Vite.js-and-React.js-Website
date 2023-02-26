import React from 'react'
import { Creators, Matter_logo } from "../../components";
import { Jaden, Ali , Ashad} from "../../components";
import "./whoarewe.css";
const Whoarewe = () => {
  return (
    <div className='Whoarewe' id='wmatter'>
    <div className='Whoarewe-title'>
    <Matter_logo text={"who Are We"}/>
    </div>
    <div className='Whoarewe-text'>
    <p>We are a group of computer science students currently studying at the University of Windsor, we have created this website as a way to get our hands dirty
    with full stack development. <br></br><br></br>This website consists of React.js as the main frontend, Django as the backend and SQLite for Database management.
    </p>
    </div>
    <div>
    <table className='Creator-boxes'>
    <tr>
    <td > <Creators name={"Jaden Varghese"} image={Jaden} text={"first year computer science student with an interest in fullstack development"}/> </td> 
    <td align='center' ><Creators name={"Ali Ghosn"}  image={Ali} text={"Second year computer science student with extensive knowledge in data structures and algorithms. Commited to making code as clean ,efficient and functional as possible."}/></td>
    <td align='right'><Creators name={"Ashad Ahmed"} image={Ashad} text={"Second year computer science student with a passion for fullstack development and an excellent understanding of many important engineering concepts."}/></td>
    </tr>
    </table>
    <div className="line">
    <hr></hr>
    </div>
    </div>
    </div>
    
    
    
  )
}

export default Whoarewe