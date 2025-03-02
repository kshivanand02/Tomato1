import React, { useState } from 'react'
import  "./home.css"
import Header from './header'
import Exploremenu from './Exploremenu'
import FoodDisplay from './foodlist'
import Appdownload from './Appdownload'

const Home = () => {

  const[category,setcategory]=useState("All")
  return (
    <div>
        <Header/>
        <Exploremenu category={category} setcategory={setcategory}/>
         <FoodDisplay category={category} /> 
         <Appdownload/>
    </div>
  )
}

export default Home
