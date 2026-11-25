import { useState } from "react";
import Book from "./Book";

const BookList = () => {
    const [books, setBooks] = useState([
        {
            id: 1,
            title: 'Harry Potter and the sorcerers stone',
            author:'J.K. Rowling',
            img: '/images/book-1.png'
        },

        {
            id: 2,
            title: 'Fantasia VI',
            author:'Geronimo Stilton',
            img: '/images/book-2.png'
        },

        {
            id: 3,
            title: 'The Hunger Games',
            author:'Suzanne Collins',
            img: '/images/book-3.png'
        }
    ]);

    return (
        <section className="booklist">
            {books.map((book) => (
                <Book
                key={book.id}
                title={book.title}
                author={book.author}
                img={book.img}
                />
            ))}
        </section>
    );
};
 
export default BookList;