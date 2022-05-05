import React from 'react'
import {Link} from "react-router-dom";

function NavBar({favNum}) {
    return (
        <div className="navBar">
            <Link to="/" className="nav-items">Home</Link>
            <Link to="/books" className="nav-items">Library</Link>
            <Link to="/favourite" className="nav-items">
            Favourites
            <p className="fav-num">{favNum}</p> 
            </Link>
            <Link to="/contact" className="nav-items">Contact</Link>
       </div>
    );
}

export default NavBar
