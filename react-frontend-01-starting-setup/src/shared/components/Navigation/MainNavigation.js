import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from '../Navigation/SideDrawer';
import Backdrop from '../UIElements/Backdrop/Backdrop';
import './MainNavigation.css';

const MainNavigation = props => {
    const [drawerIsOpen , setDrawerIsOpen] = useState(false);

    const openDrawer = () => {
        setDrawerIsOpen(true);
    }

    const closeDrawer = () =>{
        setDrawerIsOpen(false);
    }

    return ( 
        <div>
            {drawerIsOpen && <Backdrop onClick={closeDrawer} />}
            {drawerIsOpen && (<SideDrawer>
                <nav className="main-navigation__drawer-nav">
                    <NavLinks />
                </nav>
            </SideDrawer>)}
            <MainHeader>
                <button className="main-navigation__menu-btn" onClick={openDrawer}>
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className="main-navigation__title">
                <Link to="/">Your Places</Link> 
                </h1>
                <nav className="main-navigation__header-nav">
                    <NavLinks />
                </nav>
        </MainHeader>
        </div>
        )
};

export default MainNavigation;