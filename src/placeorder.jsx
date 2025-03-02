import React from 'react';
import "./placeorder.css";
import { StoreContext } from './contact';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Placeorder = () => {
  const {  gettotalcartamount } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
  
      <form action="" className='placeorder'>
        <div className="placeorderleft">
          <p className="title">Delivery Information</p>
          <div className="multifields">
            <input type="text" placeholder='First-Name' />
            <input type="text" placeholder='Last-Name' />
          </div>
          <input type="email" placeholder='Email-Address' />
          <input type="text" placeholder='Street' />
          <div className="multifields">
            <input type="text" placeholder='City' />
            <input type="text" placeholder='State' />
          </div>
          <div className="multifields">
            <input type="text" placeholder='Zip-code' />
            <input type="text" placeholder='Country' />
          </div>
          <input type="text" placeholder='Phone' />
        </div>
        
        <div className="placeorderright">
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
                <b>Total:</b>
                <b>{gettotalcartamount() + 2}</b>
              </div>
            </div>
            <button type="button" onClick={() => navigate('/order')}>PROCEED TO PAY</button>
          </div>
        </div>
      </form>
  );
}

export default Placeorder;
