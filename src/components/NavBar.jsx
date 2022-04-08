import React from 'react'

function NavBar() {
    return (
        <div className="navBar">
            <a>Library</a>
            <div className="cart-items">
            Favourites
            <p className="cart-num">0</p> 
            </div>
       </div>
    );
}

export default NavBar
