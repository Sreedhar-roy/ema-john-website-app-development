import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Order = () => {
    const {products, initialCart}=useLoaderData(); //{ products: products, initialCart: initialCart }
    return (
        <div>
            <h2>This is orders: {products.length}</h2>
            <p>initialCart ; {initialCart.length}</p>
        </div>
    );
};

export default Order;