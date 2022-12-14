import React from 'react';
import { Link } from 'react-router-dom';
import logo from'../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/About">About</Link>
                <Link to="/order">Order</Link>
                <Link to="/inventory">Inventory</Link>
            </div>
        </nav>
    );
};

export default Header;