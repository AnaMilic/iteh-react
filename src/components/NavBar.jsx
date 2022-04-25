import React from 'react'

function NavBar({favNum}) {
    //const favNum=0;
    return (
        <div className="navBar">
            <a>Library</a>
            <div className="fav-items">
            Favourites
            <p className="fav-num">{favNum}</p> 
            </div>
       </div>
    );
}

export default NavBar
