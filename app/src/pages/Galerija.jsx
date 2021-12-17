import React from 'react'
import { Link } from 'react-router-dom'
import "../style/galerija.css"

const Galerija = () => {
    return (
        <div className="gallery">
            <div className="gallery-map">
                <Link to="/">WHITE FOREST</Link> / <Link to="/galerija">Galerija</Link>
            </div>
            <hr />
            <div className="gallery-link">
                <div className="gallery-link-jewelry" >
                    <img src="/images/necklaces/pakabutis6-2.jpg" alt="pakabutis"/>
                    <Link to="/galerija/papuosalai">Papuošalai</Link>
                </div>
                <div className="gallery-link-interior">
                <img src="/images/trees/medis4-1.jpg" alt="medis" />
                    <Link to="/galerija/interjerodetales">Interjero detalės</Link>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Galerija
