import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css'

const Products = (props) => {
    const { name, id, img, seller, ratings, price } = props.product;

   
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price : ${price}</p>
                <p><small>Seller : {seller}</small></p>
                <p><small>Ratings : {ratings}</small></p>
            </div>
            <button onClick={()=>props.handleAddToCart(props.product)} className='btn-cart'>
                <p className="btn-text">Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Products;