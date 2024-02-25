import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="vbar_links">
                <NavLink to="/about"> О сайте</NavLink>
                <hr/>
                <NavLink to="/postPages"> Посты</NavLink>
            </div>
        </div>
    );
};

export default Navbar;