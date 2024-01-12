import './App.css';

function NavMenu() {
  return (
    <div className="Nav">
      <header className="Nav-header">
        <h3>
          Justyna Gawryś
        </h3>
        <div className='Nav-subpages'>
        <a>Strona Główna</a>
        <a>O Mnie</a>
        <a>Galeria</a>
        <a>Sklep</a>
        <a><i className="fa-solid fa-cart-shopping"></i></a>
        </div>
      </header>
    </div>
  );
}



export default NavMenu;
