import React,{useState} from 'react';
import '../../css/Gallery.css';
import useGalleryData from '../../hooks/useGalleryData';
import Lightbox from '../../utils/lightbox';

function Gallery() {
  const { data } = useGalleryData();
    const [lightbox, setLightbox] = useState({ open: false, imgSrc: null, index: 0 });

    const openLightbox = (imgSrc, index) => {
        setLightbox({ open: true, imgSrc, index });
    };

    const goToPrevious = () =>{
      const prevIndex = (lightbox.index -1 + data.length) % data.length;
      setLightbox({...lightbox, imgSrc: data[prevIndex].imgURL, index: prevIndex});
    }

    const goToNext = () => {
      const nextIndex = (lightbox.index + 1) % data.length;
      setLightbox({...lightbox, imgSrc: data[nextIndex].imgURL, index: nextIndex});
    }
  return (
    <div className="Gallery">
      <div className='Gallery-content'>
      {data.reverse().map((item, index) => (
        <div key={item.id} className='Gallery-image' onClick={() => openLightbox(item.imgURL, index)}>
            {/* <p>{item.description}</p> */}
            <img src={item.imgURL} alt={item.description}/>
        </div>
        ))}
      </div>
      {lightbox.open && (
                <Lightbox imgSrc={lightbox.imgSrc} onClose={() => setLightbox({...lightbox, open: false})} 
                onPrevious={goToPrevious} 
                onNext={goToNext}/>
            )}
    </div>
  );
}
export default Gallery;
