import '../../css/Home.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Contact(){
    return(
        <div className='Contact-ref'>
            <h2>Napisz do mnie a znajdziemy <br></br> idealne rozwiązania dla Ciebie!</h2>
            <Link to="/contact" className='Find-out-more'>KONTAKT</Link>
        </div>
    )
}
    export default Contact;