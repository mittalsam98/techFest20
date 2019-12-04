import React from 'react'
import { Link } from 'react-router-dom';

import classes from './Toolbar.module.css'
import logo from '../../assests/image/logo/newLogo_1.png';

import DrawerToggleButton from '../DrawerToggleButton/DrawerToggleButton';

const Toolbar = props => (

    <header className={classes.toolbar}>
        <nav className={classes.toolbar__navigation}>
            <div className={classes.toolbar__toggle_button}>
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <Link to="/"><div className={classes.toolbar__logo}><img src={logo} alt="tFLogo" width="90px" /></div></Link>
            <div className={classes.spacer} />
            <div className={classes.toolbar_navigation_items}>
                <ul className={classes.links}>
                    <li className={classes.links_items}><Link to="/about">ABOUT</Link></li>
                    <li className={classes.links_items}><Link to="/gallary">GALLARY</Link></li>
                    <li className={classes.links_items}><Link to="/sponsors">SPONSORS</Link></li>
                    <li className={classes.links_items}><Link to="/contact">CONTACT</Link></li>
                </ul>
            </div>
        </nav>
    </header>
)

export default Toolbar
