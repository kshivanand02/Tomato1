import React from 'react'
import './footer.css'
import { assets } from './assets/admin_assets/assets'
import { assets2 } from './assets/frontend_assets/assets'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footercontent'>
        <div className='footercontentleft'>
            <img src={assets.logo} alt="" />
            <p>This is indians most trusted online food delivery app </p>
            <div className='footersocialicons'>
                <img src={assets2.facebook_icon} alt="" />
                <img src={assets2.twitter_icon} alt="" />
                <img src={assets2.linkedin_icon} alt="" />
            </div>
        </div>
        <div className='footercontentcenter'>
            <h2>Company</h2>
           <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy</li>
           </ul>

        </div>

        <div className='footercontentright'>
            <h2>GET IN TOUCH</h2>
               <ul>
                <li>+91 9912515918</li>
                <li>shivanand@gmail.com</li>
               </ul>
        </div>

      </div>
      <hr />
      <p className='footercopyright'>All Rights are reserved for Tomato.com website www.tomato.in/ac shivanand</p>
    </div>
  )
}

export default Footer
