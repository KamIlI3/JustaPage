import '../../css/index.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){
    return(
        <div className='Footer'>
            <div className='Home-Summary'>
                <div className='Social-media'>
                    <h4 className='justyna-gawrys'>Justyna Gawryś</h4>
                    <p>Specjalistka w dziedzinie mikijazystyki, <br></br>
                        oferująca kurs online do doskonalenia <br></br>
                        umiejętności. Dołącz do nas i rozpocznij swoją <br></br>
                        przygodę z mikijazystyką!</p>
                    <h4>Śledź mnie</h4>
                    <span>
                        <a href='https://www.instagram.com/justynagawrys_makeup/' target='blank'><i className="fa-brands fa-instagram "></i></a>
                        <a href='https://www.facebook.com/JustynaGawrysMakeup' target='blank'><i className="fa-brands fa-facebook "></i></a>
                        <a href='https://www.youtube.com/channel/UCdKZrXANzHS3ntcBM8o_gkA/videos' target='blank'><i class="fa-brands fa-youtube"></i></a>
                        <a href='https://www.tiktok.com/@justyna.gawrys' target='blank'><i class="fa-brands fa-tiktok"></i></a>
                    </span>
                </div>
                <div className='Menu'>
                    <h4>MENU</h4>
                    <Link to="/">Strona Główna</Link>
                    <Link to="/aboutme">O Mnie</Link>
                    <Link to="/courses">Kurs</Link>
                    <Link to="/courses/kurs1">Kurs 1</Link>
                    <Link to="/contact">Kontakt</Link>
                    <Link to="/shop">Sklep</Link>
                </div>
                <div className='Address'>
                    <h4>Adres</h4>
                    <p>Sowiogórska 2/2, Dzierżoniów <br></br> 58-200</p>
                    <h4>Kontakt</h4>
                    <p>info@brand.pl <br></br> 123-456-789</p>
                </div>
            </div>
            <div className='Statute'>
                <div className='Footer-informs'>
                <Link to="/regulamin">Regulamin</Link>
                <Link to="/polityka-prywatnosci">Polityka Prywatności</Link>
                <Link to="/polityka-odo">Polityka Ochrony Danych Osobowych</Link>
                </div>
                <p>© justynagawrys.pl - 2024. Wszelkie prawa zastrzeżone.</p>
            </div>
        </div>
    )
}
    export default Footer;