import React from 'react';
import './SideDrawer.css';

const sideDrawer = props => {
    return <aside className="side-drawer">{props.children}</aside>
}

export default sideDrawer;