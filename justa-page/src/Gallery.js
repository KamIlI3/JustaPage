import './App.css';

function Gallery(){
    return(
        <div className="Gallery">
            <h2>Efekty mojej pracy</h2>
            <div className='Gallery-effects'>
            <div className='Gallery-img'>
                <img src="makijaz1.jpg" alt="makijaz1"/>
            </div>
            <div className='Gallery-img'>
                <img src="makijaz2.jpg" alt="makijaz1"/>
            </div>
            <div className='Gallery-img'>
                <img src="makijaz3.jpg" alt="makijaz1"/>
            </div>
            </div>
            
            <a className='See-more' href='Gallery.html'>Zobacz więcej zdjęć</a>
        </div>
    )
}
    export default Gallery;