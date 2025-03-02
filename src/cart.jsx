import React, { useContext } from 'react';
import './cart.css';
import { StoreContext } from './contact'; // Removed StoreContextProvider, as it's not used here
import {useNavigate} from 'react-router-dom'
const Cart = () => {
  const { cartitems, food_list, removefromcart,gettotalcartamount } = useContext(StoreContext); // Using the context-provided food_list
  const navigate=useNavigate()
  console.log(cartitems, food_list, removefromcart);
  return (
    <div className='cart'>
      <div className="cartitem">
        <div className="cartitemtitle">
          <h1 className="">These are your Favourite Items </h1>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          console.log(item);
          console.log(cartitems);
          //console.log(cartitems[item.itemid]);
          if (cartitems[item._id] > 0) { // Ensure cartitems[item.itemid] is valid
            return (
              <div className="">
              <div className="cart-items-titile-cart-items-item" key={item.itemid}>
                <img src={item.image} alt={item.name}  id ='cartimg'/> 
                <div className="itemdetails">
                <p> Item Name:-{item.name}</p>
                <p>Item Price:-{item.price}</p>
                <p>Item Count:-{cartitems[item._id]}</p>
                <p>Total Price:-{item.price * cartitems[item._id]}</p>
                
                </div>
                
              </div>
              <hr />
              </div>
            );
          }
          else {
            console.log("JFDKFDKL");
          }
          return null; // Avoid returning undefined
        })}
      </div>
     <div className="cartbottom">
      <div className="carttotal">
        <h2>Cart Total</h2>
        <div>
          <div className="carttotaldetails">
            <p>Subtotal</p>
            <p>{gettotalcartamount()}</p>
          </div>
          <hr />
          <div className="carttotaldetails">
            <p>Delivery Fee</p>
            <p>{2}</p>
          </div>
          <div className="carttotaldetails">
            <b>Total:-</b>
            <b>{gettotalcartamount()+2}</b>
          </div>
        </div>
 <button onClick={()=>navigate('/order')}>PROCEED TO CHECK</button> 

      </div>
      <div className="cartpromocode">
        <div>
          <p>If you have promo code Enter it here</p>
          <div className="cartpromocodeinput">
            <input type="text" placeholder='Promo-code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
     </div>

    </div>
  );
};

export default Cart;
