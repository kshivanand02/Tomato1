import React, { useContext, useState } from 'react'
import './fooditem.css'
import { assets2 } from './assets/frontend_assets/assets'
import { StoreContext } from './contact'
const Fooditem = ({id,name,price,description ,image}) => {
  const [itemcount,setitemcount]=useState(0)
  const{cartitem,addtocart,removefromcart}=useContext(StoreContext)

  return (
    <div className='fooditem'>
      <div className="fooditemimagecontainer">
        
         <img className='fooditemimage' src={image} alt="" />
         {!itemcount[id]
              ? <img  className="add" onClick={()=>{addtocart(id)}} src={assets2.add_icon_white}/>:<div className='fooditemcounter'>
                <img onClick={()=>removefromcart(id)} src={assets2.remove_icon_red} alt="" />
                <p>{cartitem[id]}</p>
                <img onClick={()=>addtocart(id)} src={assets2.add_icon_green} alt="" />
              </div>

         }
      </div>
      <div className="fooditeminfo"></div>
          <div className="fooditemnamerating">
            <p>{name}</p>
            <img src={assets2.rating_starts} alt="" />
          </div>
          <p className='fooditemdesc'>{description}</p>
          <p className='fooditemprice'>{price}</p>
    </div>
  )
}

export default Fooditem
