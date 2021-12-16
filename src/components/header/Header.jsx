import React, { useEffect, useRef, useState } from 'react';
import './header.scss';
import { Link, useLocation } from "react-router-dom";
import { BsSun, BsFillMoonFill } from 'react-icons/bs';


const headerNav = [
    {
        display: 'Home',
        path: '/'
    },
    {
        display: 'Movies',
        path: '/movie'
    },
    {
        display: 'TV Series',
        path: '/tv'
    },
    {
        display: 'Watch List',
        path: '/watchlist'
    }
]

const getStorageTheme = () => {
    let theme = 'dark-theme';
    if(localStorage.getItem('theme')){
        theme = localStorage.getItem('theme')
    }
    return theme
}

const Header = () => {
    const {pathname} = useLocation();
    const headerRef = useRef(null);

    const active = headerNav.findIndex((e) => e.path === pathname)
    const [navbar, setNavbar] = useState(false)

    const [theme, setTheme] = useState(getStorageTheme())
    const [isDark, setIsDark] = useState(false);
    const toggleTheme = () => {
        if(theme === 'light-theme'){
            setTheme('dark-theme')
            setIsDark(!isDark)
        }else{
            setTheme('light-theme')
            setIsDark(!isDark)
        }
    }

    console.log(theme)

    useEffect(()=>{
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme)
    }, [theme])

        useEffect(()=>{
            const shrinkHeader = () => {
                if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                    setNavbar(true)
                } else {
                    setNavbar(false)
                }
            }
            window.addEventListener('scroll', shrinkHeader);
        }, [])

    return (
        <div ref={headerRef} className={navbar ? 'header shrink' : 'header'}>
            <div className="header__wrap container">
                <div className="logo">
                    <Link to='/'><span style={{fontWeight:800}}>MY</span><span>MOVIE</span></Link>
                </div>
                <ul className="header__nav">
                    {headerNav.map((element, index) => (
                        <li key={index} className={`${index === active ? 'active': ''}`}>
                            <Link to={element.path}>{element.display}</Link>
                        </li>
                    ))}
                </ul>
                <button className='btn-dark-mode' onClick={toggleTheme}>{isDark ? <BsFillMoonFill/> : <BsSun/>}</button>
            </div>
        </div>
    )
}

export default Header
