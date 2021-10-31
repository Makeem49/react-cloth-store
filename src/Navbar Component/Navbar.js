import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import './../logo.svg'


export default function Navbar() {
    return <nav>
        <div className="nav">
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
                </ul>
            </div>
        </div>
    </nav>
}