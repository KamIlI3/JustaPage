import './App.css';

function SocialMedia(){
    return(
        <div className='SocialMedia'>
            <h2>Obserwuj mnie na</h2>
            <div className='SocialMedia-icons'>
            <a href='https://www.instagram.com/justynagawrys_makeup/' target='blank'><i className="fa-brands fa-instagram "></i></a>
            <a href='https://www.facebook.com/JustynaGawrysMakeup' target='blank'><i className="fa-brands fa-facebook "></i></a>
            </div>
            <div className='Informs'>
            <a href='Regilamin.html'>Regulamin</a>
            <a href='PolitykaPrywatnosci.html'>Polityka Prywatności</a>
            <a href='PolitykaODO.html'>Polityka Ochrony Danych Osobowych</a>
            </div>
            <p>© justynagawrys.pl - 2024. Wszelkie prawa zastrzeżone.</p>
        </div>
    )
}
    export default SocialMedia;