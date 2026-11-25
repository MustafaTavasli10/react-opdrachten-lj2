import Book from "./Book";

const BookList = () => {
    return (
        <section className="booklist">
        <Book title="Harry Potter and the sorcerers stone" author="J.K. Rowling" img="/images/book-1.png"/>
        <Book title="Fantasia VI" author="Geronimo Stilton" img="/images/book-2.png"/>
        <Book title="The Hunger Games" author="Suzanne Collins" img="/images/book-3.png"/>
        </section>
    );
}
 
export default BookList;