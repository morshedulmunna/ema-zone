import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (propos) => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    const { img, name, seller, price, stock } = propos.product;
    // console.log(propos.product);
    return (
        <div className='product-item-container'>
            <div className=" product-image" >
                <img src={img} alt="" />
            </div>
            <div className=" product-name" >
                <h4> {name} </h4>
                <br />
                <p><small> by {seller} </small></p>
                <p>$ {price} </p>
                <br />
                <p><small>Only {stock} left in stock - Order soon </small></p>
                <button
                    className="main-btn"
                    onClick={()=>propos.handleAddProduct(propos.product)}
                > {element} add to cart</button>
            </div>

        </div>
    );
};

export default Product;