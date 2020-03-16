import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavLinks.css';

const navLinks = props => {
    return <ul className="nav-links">
        <li>
            <NavLink to="/" exact>All Places</NavLink>
        </li>
        <li>
            <NavLink to="/id/places" exact>My Places</NavLink>
        </li>
        <li>
            <NavLink to="/places/new" exact>Add place</NavLink>
        </li>
        <li>
            <NavLink to="/user/auth" exact>Authenticate</NavLink>
        </li>
    </ul>
}

export default navLinks;