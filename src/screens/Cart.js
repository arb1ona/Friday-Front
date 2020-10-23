import React from 'react';
import './Cart.css'

function Cart({ src, title, description, price }) {
    return (
        <div className='cart'>
            <img src={src} alt="" />
            <div className="cart__info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                {/* <h3>{price}</h3> */}
            </div>
        </div>
    )
}

export default Cart
