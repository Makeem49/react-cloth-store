import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import '../index.css'
import 'font-awesome/css/font-awesome.min.css';
import './../logo.svg'
import { ThemeContext } from "../helpers/ThemeProvider";
import clsx from "clsx";


export default function Navbar() {
    const mode = useContext(ThemeContext)
    const {theme, toggleTheme} = mode
    const [sidebar, setSiderbar] = useState(false)
    const className = clsx({show : sidebar, sidebar : true})
    let themeStatus = null;


    if (theme === 'dark') {
        themeStatus = 'light'
    } else {
        themeStatus = 'dark'
    }
    

    return <>
    <nav>
        <div className={`nav`}>
            <div className="col logo">
                <Link to='/'>
                    <img src={'logo.svg'} alt="" />
                </Link>
            </div>
            
            <div className="links">
                <ul className='links__li'>
                    <li className='links_li--row'><Link to='/'>Home</Link></li>
                    <li className='links_li--row'><Link to='/about'>About</Link></li>
                    <li className='links_li--row'><Link to='/login'>Login</Link></li>
                    <li className='links_li--row'><Link to='/cart'>Cart</Link></li>
                    <li className='links_li--row'><button className={`mode`} onClick={() => toggleTheme()}> {themeStatus}</button></li>
                </ul>
            </div>


            <div className="hamburger">
                <i className="fa fa-bars" onClick={() => setSiderbar(!sidebar)}></i>
            </div>
        </div>
    </nav>

    <div className={className}>
                <ul className='sidebar__li'>
                    <li className='sidebar_li--row' onClick={() => setSiderbar(!sidebar)} ><Link to='/'>Home</Link></li>
                    <li className='sidebar_li--row' onClick={() => setSiderbar(!sidebar)}><Link to='/about'>About</Link></li>
                    <li className='sidebar_li--row' onClick={() => setSiderbar(!sidebar)}><Link to='/login'>Login</Link></li>
                    <li className='sidebar_li--row' onClick={() => setSiderbar(!sidebar)}><Link to='/cart'>Cart</Link></li>

                    <li className='sidebar_li--row' onClick={() => setSiderbar(!sidebar)}>
                        <button className='mode' onClick={() => toggleTheme()}> 
                            {themeStatus}
                        </button>
                    </li>
                </ul>

                <div className="sidebar_bottom">
                    <p>Footer sidebar</p>
                </div>
    </div>

    </>

    
}
