import React from 'react';
import {BsBookmarkCheckFill,BsFillBookmarkXFill} from "react-icons/bs";

function Book() {
    return (
        <div className="card" >
            <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf9kvIzoVAbJmLgv5k6kHQj6czGK0V0Qew1w&usqp=CAU" height="150" width="200" alt="book"/>
            <div className="card-body">
                <h3 className="card-title">Book name</h3>
                <p className="card-text">Description of the book.</p>
            </div>
            <h4>Add to favourite</h4>
            <button className="btn">Add</button>
            <button className="btn">Remove</button>
        </div>
    )
}

export default Book
