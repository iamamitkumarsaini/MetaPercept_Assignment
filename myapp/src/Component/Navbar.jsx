import React from 'react';
import "../Styles/Navbar.css";
// import "bootstrap/dist/css/bootstrap.min.css"

function Navbar() {
    return (
        <div className='navbar bg-light'>
            <div><p className='nav-item'><a className='nav-link' href="#">Title</a></p></div>
            <div className="navbarInner"> 
                <p className='nav-item'><a className='nav-link' href="#">Home</a></p>
                <p className='nav-item'><a className='nav-link' href="#">About</a></p>
                <p className='nav-item'><a className='nav-link' href="#">Blog</a></p>
                <p className='nav-item'><a className='nav-link' href="#">Contact</a></p>
                <button className='btn btn-outline-primary'>Button</button>
            </div>
        </div>
    );
}

export default Navbar;