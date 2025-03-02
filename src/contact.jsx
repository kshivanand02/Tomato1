// import { createContext, useState } from "react";
// import { food_list } from "./assets/frontend_assets/assets";

import { createContext, useEffect, useState } from "react";
import { food_list } from "./assets/frontend_assets/assets";
// // Create and export the context
// export  const StoreContext = createContext("hello world");

// const StoreContextProvider = (props) => {
//   const [cartitem,setcartitem]=useState({})

//   const addtocart=(itemid)=>{
//    if (!cartitem[itemid]){
//     setcartitem((prev)=>({...prev,[itemid]:1}))
//    }
//    else{
//     setcartitem((prev)=>({...prev,[itemid]:prev[itemid]+1}))
//    }
//   }

//   const removefromcart=(itemid)=>{
//       setcartitem((prev)=>({...prev,[itemid]:prev[itemid]-1}))

//   }

//   const contextValue = {
//     food_list,
//     cartitem,
//     setcartitem,
//     addtocart,
//     removefromcart
//   };

//   return (
//     <StoreContext.Provider value={contextValue}>
//       {props.children}  {/* Corrected typo */}
//     </StoreContext.Provider>
//   );
// };

export const StoreContext=createContext(null)

const StoreContextProvider=(props)=>{
  const [cartitems,setcartitems]=useState({})
  
  const addtocart=(itemid)=>{

    if (!cartitems[itemid]){
      setcartitems((prev)=>({...prev,[itemid]:1}))
    }
    else{
      setcartitems((prev)=>({...prev,[itemid]:prev[itemid]+1}))

    }

  }

  const removefromcart=(itemid)=>{
    setcartitems((prev)=>({...prev,[itemid]:prev[itemid]-1}))
  }


  // useEffect(()=>{
  //   console.log(cartitems)
  // },[cartitems])
  const gettotalcartamount=()=>{
    let totalamount=0;
    for(const item in cartitems){

       if (cartitems[item]>0){
        let iteminfo=food_list.find((product)=>product._id===item)
      totalamount+=iteminfo.price*cartitems[item]
       }
    }
    return totalamount
  }

  const contextValue={
      food_list,
      cartitems,
      setcartitems,
      addtocart,removefromcart,
      gettotalcartamount

  }
  return(
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider
