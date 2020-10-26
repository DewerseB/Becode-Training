import React from 'react';
import { Link } from "react-router-dom";
import './header.css';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/about">About</Link>
                    </li>
                    <li>
                    <Link to="/furnitures">Furnitures</Link>
                    </li>
                    <li>
                    <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                    <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;