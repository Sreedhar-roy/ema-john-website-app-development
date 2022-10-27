import React from 'react';
import logo from'../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/Home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/About">About</a>
                <a href="/inventory">Inventory</a>
            </div>
        </nav>
    );
};

export default Header;