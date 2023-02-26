import React from 'react'
import "./pGrid.css";
import { Matter_logo } from "../../components";
import { project1, project2 , project3 , project4 , project5} from "../../components";
const PGrid = () => {
  return (
    <div>
    <div className='pGrid-title'>
  <Matter_logo text={"Some Past Projects"}/>
  </div>
    <div class="grid-container">
    <div class="grid-item-1">
    <p>Top Down RPG in Python</p>
    <img src={project1} draggable={false} ></img>
    </div>
    <div class="grid-item-2">
    <p>Command Line Calculator in C</p>
    <img src={project2} draggable={false} ></img>
    </div>
    <div class="grid-item-3">
    <p>Social Media Website in Django</p>
    <img src={project3} draggable={false} ></img>
    </div>
    <div class="grid-item-4">
    <p>Side Scroller in Java</p>
    <img src={project4} draggable={false} ></img>
    </div>
    <div class="grid-item-5">
    <p>Top down RPG in C#</p>
    <img src={project5} draggable={false} ></img>
    </div>
  </div>
  </div>
  )
}

export default PGrid