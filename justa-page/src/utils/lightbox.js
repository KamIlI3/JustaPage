import React from "react";
function Lightbox({ imgSrc, onClose, onNext, onPrevious }) {
    return (
        <div className="lightbox-backdrop" onClick={onClose}>
            <button onClick={onClose} className="lightbox-close">X</button>
            <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                <img src={imgSrc} alt="Pełny widok" />
                
                <button onClick={onPrevious} className="lightbox-prev"><i className="fa-solid fa-angle-left"></i></button>
                <button onClick={onNext} className="lightbox-next"><i className="fa-solid fa-chevron-right"></i></button>
            </div>
        </div>
    );
}
export default Lightbox;