// import React, { useContext } from 'react';
// import './foodlist.css';
// import Fooditem from './fooditem.jsx'
// import { StoreContext } from './contact';
// import { food_list } from './assets/frontend_assets/assets';
// const FoodDisplay = ({ category }) => {
//   // const { food_list } = useContext(StoreContext);  // Corrected context usage

import { useContext } from "react"
import { StoreContext } from "./contact"
import Fooditem from "./fooditem"
import './foodlist.css'
//   return (
//     <div className='fooddisplay' id='fooddisplay'>
//       <h2>Top Dishes near you</h2>
//       <div className="fooddisplaylist">
//             {food_list.map((item,index)=>{
//              { console.log(category,item.category)}
//              if (category==="All"|| category=== item.category){
//               return<Fooditem key={index} id={item._id} description={item.description} price={item.price} image={item.image} name={item.name} />
//              }
               

                
//             })}  
//       </div>
//     </div>
//   );
// };

// export default FoodDisplay;
const   FoodDisplay=({category})=>{
  const {food_list}=useContext(StoreContext)

  return(
    <div className="food-display" id='food-display'>
      <h2>Top Dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item,index)=>{
          if (category==='All'|| category===item.category){
            return  <Fooditem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}  />

          }

          // return  <Fooditem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}  />
        })}
      </div>

    </div>
  )
}

export default FoodDisplay;