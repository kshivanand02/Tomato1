import React from 'react'
import './exploremenu.css'
import { menu_list } from './assets/frontend_assets/assets'
const Exploremenu = ({category,setcategory}) => {
  return (
    <div className='exploremenu' id="exploremenu">
      <h1>Explore our menu</h1>
      <p className='exploremenutext'>Choose from a diverse menu featuring a delicatable items list</p>
      <div className='exploremenulist'>
         {menu_list.map((item,index)=>{
                     return(
                        <div onClick={()=>setcategory(prev=>prev===item.menu_name?"All":item.menu_name)}   key={index} className='exploremenulistitem'>
                            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                     )
         })}
      </div>
      <hr />
    </div>
  )
}

export default Exploremenu
