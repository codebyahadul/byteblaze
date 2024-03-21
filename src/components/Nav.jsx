import { useEffect } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    const [theme, setTheme] = useState('light');
    // update state on toggle
    const handleToggle = e => {
        if (e.target.checked) {
            setTheme('synthwave');
        } else {
            setTheme('light');
        }
    };
    // set theme state in localStorage on mount & also update localStorage on state change
    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')

        // add custom data-theme attribute
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme]);

    return (
        <div className="navbar bg-base-100 px-4 sm:px-8 fixed shadow-lg">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost text-2xl text-primary font-bold normal-case gap-0">Byte<span className="text-secondary">Blaze</span></Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 font-bold hidden sm:flex gap-3 mr-2">
                    <NavLink to='/' className={({isActive}) => isActive? 'font-bold text-primary': 'font-bold'}>Home</NavLink>
                    <NavLink to='/blogs' className={({isActive}) => isActive? 'font-bold text-primary': 'font-bold'}>Blogs</NavLink>
                    <NavLink to='/bookmarks' className={({isActive}) => isActive? 'font-bold text-primary': 'font-bold'}>Bookmarks</NavLink>
                </ul>
                <label className="flex cursor-pointer gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <input onChange={handleToggle} type="checkbox" value="synthwave" className="toggle theme-controller" />

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
            </div>
        </div>
    );
};

export default Nav;