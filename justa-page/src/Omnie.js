import './App.css';

function AboutMe(){
  return(
  <div className='AboutMe'>
        <div className='AboutMe-img'>
          <img src='Justyna.jpg' alt='JustynaGawryś'/>
        </div>
        <div className='AboutMe-content'>
          <h2>O Mnie</h2>
          <p>Jako właścicielka salonu Beauty Bar, kreuję niezapomniane wrażenia dla swoich klientów, 
            oferując usługi makijażu dopasowane do indywidualnych potrzeb. 
            Ponadto, dzielę się swoją wiedzą i umiejętnościami, oferując kursy online. 
            Moje kursy nie tylko pokażą ci ścieżkę, która możesz podążyć , ale również ukażą tajniki profesjonalnych technik, 
            dzięki którym każdy może stać się mistrzem sztuki piękna. Znajdź swoją unikalną drogę do doskonałości pod moim okiem, Justyny Gawryś.</p>

            <a className='Find-out-more' href='Omnie.html'>Czytaj dalej</a>
        </div>
        
      </div>
  )   
}

    export default AboutMe;