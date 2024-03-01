import React from "react";
import {FaReact, FaBars} from 'react-icons/fa';
import {HiX} from 'react-icons/hi'
import {Link} from 'react-router-dom';
import { useState } from "react";
import './style.scss';


const data = [
    {
        label : 'HOME',
        to : '/'
    },
    {
        label : 'ABOUT ME',
        to : '/about'
    },
    {
        label : 'SKILLS',
        to : '/skills'
    },
    {
        label : 'RESUME',
        to : '/resume'
    },
    {
        label : 'PORTFOLIO',
        to : '/portfolio'
    },
    {
        label : 'CONTACT',
        to : '/contact'
    }
]

const NavBar = () => {

    const [toggleIcon, setToggleIcon]= useState(false);

    const handleToggleIcon =() => {
        setToggleIcon(!toggleIcon);
    };

   

    return(
        <>
            <nav className="navbar">
                <div className="navbar_container">
                    <Link to={'/'} className="navbar_container_logo" >
                        <FaReact size={30} />
                    </Link>
                </div>
                <ul className={`navbar_container_menu ${toggleIcon ? 'active' : ''}`}>
                    {
                        data.map((item, i) => (
                            <li key={i} className="navbar_container_menu_item">
                                <Link className="navbar_container_menu_item_links" to={item.to}>
                                    {item.label}
                                </Link>
                            </li>
                        )

                        )
                    }
                </ul>
                <div className="nav_icon" onClick={handleToggleIcon}>
                    {
                        toggleIcon ? <HiX size={30} /> : <FaBars size={30} />
                    }
                </div>
            </nav>
         </>
    )
}

export default NavBar;