import React from 'react';
import Book from "./Book";

function Books({books,addToFavourite}) {
    //const book={
     //title:"Book name",
     //author:"Author",
     //year:"Year"
    //}
    
    
    return (
        <div className="all-books">
            {
               books.map((book)=>(
                   <Book book={book} key={book.id} addToFavourite={addToFavourite}/>
               )) 
            }
            {/*<Book book={books[0]}/>
            <Book book={books[1]}/>
            <Book book={books[2]}/>
            <Book book={books[3]}/>
            <Book book={books[4]}/>
    <Book book={books[5]}/>*/}
            
        </div>
    )
}

export default Books
