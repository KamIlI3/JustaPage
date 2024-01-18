import './App.css';

function NavMenu() {
  return (
    <div className="Nav">
        <div className="Nav-title">
          <h3>
            Justyna Gawryś
          </h3>
        </div>
        <div className='Nav-subpages'>
          <a href='Index.html'>Strona Główna</a>
          <a href='Index.html'>O Mnie</a>
          <a href='Index.html'>Galeria</a>
          <a href='Index.html'>Kontakt</a>
          <a href='Index.html'>Sklep</a>
          <a href='Index.html'><i className="fa-solid fa-cart-shopping"></i></a>
        </div>
    </div>
  );
}



export default NavMenu;
