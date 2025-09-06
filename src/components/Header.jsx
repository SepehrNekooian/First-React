import React from 'react'

import {MdLightMode} from "react-icons/md";
import {MdDarkMode} from "react-icons/md";
import {IoLogoTableau, IoSearchOutline} from "react-icons/io5";
import imgwhite from "../../public/img/logo/white.png"
import imgblack from "../../public/img/logo/black.png"

const Header = ({mode, setMode}) => {

 const handLerTheme = () =>{
  //change handlerTheme
  mode=="light"?setMode("dark"):setMode("light");
 }




  return (
    <header className={`container  flex items-center justify-between border-b
    border-red pb-5 py-5 w-full `}>

      <h2 className='text-white-97'><span className='text-red'>C</span>INEMA</h2>

    {/* <img src={imgblack} alt="Logo"/> */}

    <div className={`flex items-center border-2 rounded-full p-2  ${mode=="light" ? "border-white":"text-white-97"} `}>
      <input type="text" placeholder='Search...' className='outline outline-none 
      bg-transparent pl-2  text-white-97'/>
      <IoSearchOutline size={20} className={`cursor-pointer font-bold text-gray-400 ${mode=="light" ? "text-black" : "text-white-97"} `}/>
    </div>

    <button className={`px-4 py-2 ${mode=="light"? " bg-white-97  text-black" : " bg-red text-white-97"} rounded-full`}>Login</button>

  {
    mode=="light" ? (
    <MdDarkMode 
    size={35} 
    className='cursor-pointer text-white-97' 
    onClick={()=>handLerTheme()}
    />
  ) : (
    <MdLightMode size={35} className='cursor-pointer text-white-97' onClick={()=>handLerTheme()}/>
  )}
  






    
    </header>
  )
}

export default Header