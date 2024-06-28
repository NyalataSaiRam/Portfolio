import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <>
            <nav className='flex items-center m-2 max-h-200 navbar'>
                <motion.p
                    initial={{
                        color: 'white',
                        textShadow: '0px 0px 8px rgba(255, 255, 255, 0.8)'
                    }}
                    animate={{
                        color: [ 'white', '#6EAFFB', 'white' ],
                        textShadow: [
                            '0px 0px 8px rgba(255, 255, 255, 0.8)',
                            '0px 0px 16px rgba(255, 255, 255, 1)',
                            '0px 0px 24px rgba(110, 175, 251, 1)',
                            '0px 0px 32px rgba(110, 175, 251, 1)',
                            '0px 0px 24px rgba(110, 175, 251, 1)',
                            '0px 0px 16px rgba(255, 255, 255, 1)',
                            '0px 0px 8px rgba(255, 255, 255, 0.8)'
                        ]
                    }}
                    transition={{
                        duration: 2,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        repeatType: 'mirror'
                    }}
                    className='logo sarina-regular p-2 pl-20 text-3xl'>Sai Ram</motion.p>


                <ul className='rufina-regular text-.5xl pr-16'>
                    <li ><NavLink to={'/'} className={({ isActive }) => { return (isActive) ? 'active text-blue ' : 'text-white hover:text-blue'; }} >Home</NavLink></li>
                    <li><NavLink to={'/projects'} className={({ isActive }) => { return (isActive) ? 'active text-blue' : 'text-white hover:text-blue'; }}>Projects</NavLink></li>
                    <li><NavLink to={'/about'} className={({ isActive }) => { return (isActive) ? 'active text-blue' : 'text-white hover:text-blue'; }}>About</NavLink></li>
                    <li><NavLink to={'/contact'} className={({ isActive }) => { return (isActive) ? 'active text-blue' : 'text-white hover:text-blue'; }}>Contact</NavLink></li>
                </ul>
            </nav >
            <Outlet />
        </>

    );
};

export default Navbar;
