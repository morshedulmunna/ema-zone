import { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const first20Data = fakeData.slice(0, 20);
    const [products, setProducts] = useState(first20Data);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        setCart([...cart, product]);

    }

    return (
        <div className="shop-container" >
            <div className="product-container">
                {
                    products.map(product =>
                        <Product
                            handleAddProduct={handleAddProduct}
                            product={product}
                        ></Product>)
                }
            </div>

            <div className="cart-container">
                <Cart cart = {cart} ></Cart>
            </div>

        </div>
    );
};

export default Shop;