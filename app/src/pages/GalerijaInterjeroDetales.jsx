import React from 'react'
import { Link } from 'react-router-dom'
import "../style/galerijaimages.css"

const GalerijaInterjeroDetales = () => {
    return (
        <div className="gallery">
            <div className="gallery-map">
                <Link to="/">WHITE FOREST</Link> / <Link to="/galerija">Galerija</Link> / <Link to="/galerija/interjerodetales">Interjero detalės</Link>
            </div>
            <hr />
            <div className="gallery-row">
                <div className="gallery-column">
                    <img src="/images/trees/medis1-1.jpg" alt="medis1"/>
                    <img src="/images/trees/medis2-1.jpg" alt="medis2"/>
                    <img src="/images/trees/medis3-1.jpg" alt="medis3"/>
                    <img src="/images/trees/medis4-1.jpg" alt="medis4"/>
                </div>
                <div className="gallery-column">
                    <img src="/images/trees/medis5-1.jpg" alt="medis5"/>
                    <img src="/images/trees/medis1-2.jpg" alt="medis6"/>
                    <img src="/images/trees/medis2-2.jpg" alt="medis7"/>
                    <img src="/images/trees/medis1-4.jpg" alt="medis8"/>
                </div>
                <div className="gallery-column">
                    <img src="/images/trees/medis4-4.jpg" alt="medis9"/>
                    <img src="/images/trees/medis5-5.jpg" alt="medis10"/>
                    <img src="/images/trees/medis4-3.jpg" alt="medis11"/>
                    <img src="/images/trees/medis3-4.jpg" alt="medis12"/>
                </div>
                <div className="gallery-column">
                    <img src="/images/trees/medis2-3.jpg" alt="medis13"/>
                    <img src="/images/trees/medis5-3.jpg" alt="medis14"/>
                    <img src="/images/trees/medis3-2.jpg" alt="medis15"/>
                    <img src="/images/trees/medis4-2.jpg" alt="medis16"/>
                </div>
            </div>
        </div>
    )
}

export default GalerijaInterjeroDetales
