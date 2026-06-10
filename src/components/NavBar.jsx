import React, {useEffect, useState} from 'react'
import {navLinks} from "../constants/index.js";

const NavBar = () => {
    const [scrolled, setScrolled] =useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(true);
        }
        window.addEventListener('scroll', handleScroll);
        return ()=> window.removeEventListener('scroll', handleScroll);
    },[])
    return (
        <header className={`navbar ${scrolled ?'scrolled':'not-scrolled'}`}>
            <div className="inner">
                <div className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center font-bold">
                    <a href="#hero">VG</a>

                </div>
                    <a className="logo" href="#hero">
                        Victor | Guerrero
                    </a>
                <nav className="desktop"
                    >
                    <ul >{navLinks.map(({link, name})=>(
                        <li key={name} className="group">
                            <a href={link} >
                                <span >{name}</span>
                                <span className="underline"></span>
                            </a>
                        </li>
                    ))}</ul>
                </nav>
                <a href="#contact" className="contact-btn group:">
                    <div className="inner">
                        <span >Contacto</span>
                    </div>
                </a>
            </div>
        </header>
    )
}
export default NavBar
