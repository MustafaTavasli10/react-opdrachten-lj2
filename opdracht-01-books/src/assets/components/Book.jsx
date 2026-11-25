const Book = ({title, author, img}) => {
    return ( 
        <section className="book">
            <img src={img} alt= {'${title}'}/>
            <h1>{title}</h1> 
            <h2>{author}</h2>
        </section>
     );
}
 
export default Book;