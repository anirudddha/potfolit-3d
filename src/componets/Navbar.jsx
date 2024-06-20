import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './nav.css';

const withouSidebarRoutes = ["/home","/about","/contact","project"];

const Navbar = () => {
    const { pathname } = useLocation();

    if (withouSidebarRoutes.some((item) => pathname.includes(item))) 

    return (

        <header className='header'>
            <NavLink to="/home" className=" items-center justify-center flex text-lg gap-7 font-medium">
                <p className='blue-gradient_text name'>Aniruddha</p>
                {/* Home */}
            </NavLink>
            <nav className='flex text-lg gap-7 font-medium'>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black-500'}>
                    About
                </NavLink>
                <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black-500'}>
                    Projects
                </NavLink>
            </nav>
        </header>

    )
    else return null;
}

export default Navbar
