import { useState } from "react";

const Book = ({title, author, img}) => {
    const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0);

    const verhoogTeller = () => {
        setAantalKeerGelezen((vorigeWaarde) => vorigeWaarde + 1);
    };

    return ( 
        <section className="book">
            <img src={img} alt= {title}/>
            <h1>{title}</h1> 
            <h2>{author}</h2>
            <button type="button" className="read-btn" onClick={verhoogTeller}>
                Keer gelezen: {aantalKeerGelezen}
            </button>
        </section>
     );
};
 
export default Book;