import React from 'react'
import Book from './Book'

function Favourite({books, removeBookFromFavourite}) {
    return (
        <div className="all-books">
            {books.map((book)=>(
                <Book book={book} key={book.id} removeBookFromFavourite={removeBookFromFavourite} favourite={0}/>
            ))}
        </div>
    )
}

export default Favourite
