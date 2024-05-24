import React from 'react'
import { IoLogoYoutube } from "react-icons/io5";
import logo from "../assets/Images/logo.jpg";



function Head() {
  return (
    <div 
    className ='flex justify-between items-center'>
    <img src = {logo}/>
      
      <ul className = 'flex gap-4 md: gap-14' >
        <li className ='hover:font-bold cursor-pointer'>Home</li>
        <li className ='hover:font-bold cursor-pointer'> About Us</li>
        <li className ='hover:font-bold cursor-pointer'> Contac Us </li>
      </ul>
      <button className = 'bg-red-500 rounded-full text-white flex ' >Subscribe <IoLogoYoutube className = 'ml-3 text[20px]'/> </button>
    </div>
  )
}

export default Head
