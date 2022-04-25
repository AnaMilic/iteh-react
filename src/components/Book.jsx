import React from 'react';
import {BsBookmarkCheckFill,BsFillBookmarkXFill} from "react-icons/bs";

function Book({book,addToFavourite}) {
    /*function addToFavourite(id){

    }*/
    return (
        <div className="card" >
            <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf9kvIzoVAbJmLgv5k6kHQj6czGK0V0Qew1w&usqp=CAU" height="150" width="200" alt="book"/>
            <div className="card-body">
                <h3 className="card-title">{book.title}</h3>
                <p className="card-text">{book.author}</p>
                <p className="card-text">{book.year}</p>
            </div>
            <h4>Add to favourite</h4>
            <button className="btn" onClick={()=>addToFavourite(book.id)}>Add</button>
            <button className="btn">Remove</button>
        </div>
    )
}

export default Book
