import React from 'react';
import Book from "./Book";

function Books({books,addToFavourite}) {
    
    return (
        <div className="all-books">
            {
               books.map((book)=>(
                   <Book book={book} key={book.id} addToFavourite={addToFavourite} favourite={1}/>
               )) 
            }
            
        </div>
    )
}

export default Books
