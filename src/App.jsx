import React, { useState } from 'react'
import Navbar from './navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './home'
import Cart from './cart'
import Footer from './footer'
import Loginpopup from './Loginpopup'
import Placeorder from './placeorder'
const App = () => {
  const [showligin,setshowlogin]=useState()
  return (
    <>
    {showligin?<Loginpopup setshowlogin={setshowlogin}/>:<></>}
    <div className='app'>
      <Navbar setshowlogin={setshowlogin}/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path='/order' element={<Placeorder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
