import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, prd)=> total+ prd.price,0);

    let shipping = 0;
    if(totalPrice > 75){
        shipping= 0
    }
    else if(totalPrice > 15) {
        shipping= 4.99;
    }
    else if ( totalPrice > 0){
        shipping= 12.99
    }



    const total = Number((totalPrice + shipping ).toFixed(2)) ;



    return (
        <div className='cart-item'>
            <h4>Order Summery</h4>
            <p>Items Order: {cart.length} </p>
            <p><small>Shipping Cost: {shipping} </small></p>
            <p> total Price: {total} </p>
        </div>
    );
};

export default Cart;