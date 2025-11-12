import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
             <nav className='nav-cont'>
                <div className='logo'></div>

                <div><Link className='Link' to="/">Home</Link></div>
                <div><Link className='Link' to="/quizz">Quizz</Link></div>
                <div><Link className='Link' to="/result">Result</Link></div>

             </nav>
        </div>
    );
}

export default Navbar;
