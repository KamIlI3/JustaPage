import './App.css';

function SocialMedia(){
    return(
        <div className='SocialMedia'>
            <h2>Obserwuj mnie na</h2>
            <div className='SocialMedia-icons'>
            <a href='https://www.instagram.com/justynagawrys_makeup/'><i class="fa-brands fa-instagram "></i></a>
            <a href='https://www.facebook.com/JustynaGawrysMakeup'><i class="fa-brands fa-facebook "></i></a>
            </div>
            <div className='Informs'>
            <a >Regulamin</a>
            <a >Polityka Prywatności</a>
            <a >Polityka Ochrony Danych Osobowych</a>
            </div>
            <p>© justynagawrys.pl - 2024. Wszelkie prawa zastrzeżone.</p>
        </div>
    )
}
    export default SocialMedia;