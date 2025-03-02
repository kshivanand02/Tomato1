import React, { useState } from 'react'
import { assets2 } from './assets/frontend_assets/assets'
import './Loginpopup.css'
const Loginpopup = ({setshowlogin}) => {
const[currstate,setcurrstate]=useState("Sign Up")

  return (
    <div className='loginpopup'>
    <form action="" className='loginpopupcontainer'>
      <div className='loginpopuptitle'>
        <h2>{currstate}</h2>
        <img onClick={()=>{setshowlogin(false)}} src={assets2.cross_icon} alt="" />
      </div>
      <div className='loginpopupinput'>
        {currstate==="login"?<></>:<input type="text" placeholder='Enter your Name' required />}
             <input type="email"  placeholder='Enter your Email ' required/>
             <input type="password" name="" id="" placeholder='Password' />
      </div>
      <button>{currstate==="Sign Up"?"Create account":"Login"}</button>
      <div className='loginpopupcondition'>
      <input type="checkbox" name="" id=""  required/>
      <p>By Continuning i agree terms and conditions</p>
      </div>
      {currstate === 'login' ? (
  <div className='cond'> 
    <p className='c'>Create a new account?</p>
    <span className='click' onClick={()=>setcurrstate("Sign Up")}>Click Here</span>
  </div>
) : (
  <div className='cond'>
    <p>Already have an account?</p>
    <span className='click'  onClick={()=>setcurrstate("login")}>Login here</span>
  </div>
)}

       
       
    </form>
    </div>
  )
}

export default Loginpopup
