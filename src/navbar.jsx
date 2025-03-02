import React, { useState } from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
import {assets} from './assets/admin_assets/assets'
import {assets2} from './assets/frontend_assets/assets'
const Navbar = ({setshowlogin}) => {
    const[menu,setmenu]=useState("Home")

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt=""  className='logo'/></Link>
      <ul className='navbarmenu'>
        
        <li  onClick ={()=>setmenu("home")} className={menu==="home"?"active":""}>Home</li>
        <a href='#exploremenu' onClick ={()=>setmenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
        <a href='#appdownload' onClick ={()=>setmenu("mobileapp")} className={menu==="mobileapp"?"active":""}>Mobile-App</a>
        <a href='#Footer' onClick ={()=>setmenu("contactus")} className={menu==="contactus"?"active":""}>Contact Us</a>
      </ul>
      <div className='navbarright'>
        <img src={assets2.search_icon} alt="" />
        <div className='navbarsearchicon'>
         <Link to='/cart'><img src={assets2.basket_icon} alt="" /></Link> 
          <div className='dot'></div>
        </div>
          <button onClick={()=>setshowlogin(true)}>Sign in</button>
      </div>
    </div>
    
  )
}

export default Navbar
