import './App.css';

function Presentation(){
  return(
  <div className='Presentation'>
        <div className='Presentation-content'>
          <h1>Witaj w moim świecie, gdzie tworzę piękne rzeczy</h1>
          <p>Jako właścicielka salonu Beauty Bar, kreuję niezapomniane wrażenia dla swoich klientów, 
            oferując usługi makijażu dopasowane do indywidualnych potrzeb. 
            Ponadto, dzielę się swoją wiedzą i umiejętnościami, oferując kursy online. 
            Moje kursy nie tylko pokażą ci ścieżkę, która możesz podążyć , ale również ukażą tajniki profesjonalnych technik, 
            dzięki którym każdy może stać się mistrzem sztuki piękna. Znajdź swoją unikalną drogę do doskonałości pod moim okiem, Justyny Gawryś.</p>
        </div>
        <div className='Presentation-img'>
          <img src='Justyna.jpg' alt='JustynaGawryś'/>
        </div>
      </div>
  )   
}

    export default Presentation;