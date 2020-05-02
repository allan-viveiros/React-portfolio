import React, {useState} from 'react';
import {Route, NavLink, Switch} from "react-router-dom";

import './header-sass.scss';
import Home from '../../pages/home';
import About from '../../pages/about';
import MyWorks from '../../pages/my-works';
import Contact from '../../pages/contact';


function Header () {

    const [openMenu, setOpenMenu] = useState(false);
    const [menuBtn, setMenuBtn] = useState('menu-btn show');
    const [menu, setMenu] = useState('menu close');
    const [menuNav, setMenuNav] = useState('menu-nav close');
    const [menuBrand, setMenuBrand] = useState('menu-brand close');
    const [menuNavItem, setMenuNavItem] = useState('nav-item close');

    const handleOpenMenu = () => {   
        if(openMenu !== true) {
            setMenuBtn('menu-btn close');

            setMenu('menu show');
            setMenuNav('menu-nav show');
            setMenuBrand('menu-brand show');
            setMenuNavItem('nav-item show');
        }
        else {
            setMenuBtn('menu-btn show');

            setMenu('menu close');
            setMenuNav('menu-nav close');
            setMenuBrand('menu-brand close');
            setMenuNavItem('nav-item close');
        }

        setOpenMenu(!openMenu);
        //console.log(openMenu);
        //console.log(menuBtn);
    }

    
    return(
        <div>

            <div className="main-header">
                <div className={menuBtn} onClick={handleOpenMenu}>
                    <div className="btn-line"></div>
                    <div className="btn-line"></div>
                    <div className="btn-line"></div>
                </div>

                <div className={menu}>
                    <div className={menuBrand}>
                        <div className="portrait"></div>
                    </div>

                    <ul className={menuNav}>
                        <li className={menuNavItem}>
                            <NavLink exact to="/" className="nav-link" activeClassName="active" onClick={handleOpenMenu}> Home </NavLink>
                        </li>
                        <li className={menuNavItem}>
                            <NavLink to="/about" className="nav-link" activeClassName="active" onClick={handleOpenMenu}> About Me </NavLink> 
                        </li>
                        <li className={menuNavItem}>
                            <NavLink to="/my_works" className="nav-link" activeClassName="active" onClick={handleOpenMenu}> My Works </NavLink>
                        </li>
                        <li className={menuNavItem}>
                            <NavLink to="/contact" className="nav-link" activeClassName="active" onClick={handleOpenMenu}> How to reach Me </NavLink> 
                        </li>
                    </ul>
                </div>  

            </div>

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/my_works" component={MyWorks} />
                <Route path="/contact" component={Contact} />
            </Switch>
            
        </div>
    )
   
}


export default Header;
