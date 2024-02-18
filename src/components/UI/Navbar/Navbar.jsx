import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <div classNamena="vbar_links">
                <Link to="/about"> О сайте</Link>
                <Link to="/postPages"> Посты</Link>
            </div>
        </div>
    );
};

export default Navbar;