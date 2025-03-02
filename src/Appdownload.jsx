import React from 'react'
import './Appdownload.css'
import { assets2 } from './assets/frontend_assets/assets'
const Appdownload = () => {
  return (
    <div className='appdownload' id="appdownload">
   <p>For better experience download <br />Tomato app</p>
   <div className='appdownloadplatform'>
    <img src={assets2.play_store} alt="" />
    <img src={assets2.app_store} alt="" />
   </div>
      
    </div>
  )
}

export default Appdownload
