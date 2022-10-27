import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';

import './Shop.css'


const Shop = () => {
    
    // const [products, setProducts] = useState([]);
    const products = useLoaderData();
    const [cart, setCart] = useState([]);


    useEffect(()=>{
        const storedCart = getStoredCart();
        for(const id in  storedCart){
            const addedProduct = products.find(product => product.id===id);
            console.log(addedProduct);
        }

    },[]);

    const handleAddToCart=(product)=>{
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Products 
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Products> )
                }
            </div>
            <div className='product-shop-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;