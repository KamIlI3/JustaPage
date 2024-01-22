import '../../css/index.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){
    return(
        <div className='Footer'>
            <div className='Footer-informs'>
            <Link to="/regulamin">Regulamin</Link>
            <Link to="/polityka-prywatnosci">Polityka Prywatności</Link>
            <Link to="/polityka-odo">Polityka Ochrony Danych Osobowych</Link>
            </div>
            <p>© justynagawrys.pl - 2024. Wszelkie prawa zastrzeżone.</p>
        </div>
    )
}
    export default Footer;