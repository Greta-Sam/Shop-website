import React from 'react'
import { Link } from 'react-router-dom'
import "../style/galerijaimages.css"

const GalerijaPapuosalai = () => {
    return (
        <div className="gallery">
            <div className="gallery-map">
                <Link to="/">WHITE FOREST</Link> / <Link to="/galerija">Galerija</Link> / <Link to="/galerija/papuosalai">Papuošalai</Link>
            </div>
            <hr />
            <div className="gallery-row">
                <div className="gallery-column">
                    <img src="/images/bracelets/apyranke10-1.jpg" alt="apyranke1"/>
                    <img src="/images/sets/rinkinys1-1.jpg" alt="pakabutis4"/>
                    <img src="/images/bracelets/apyranke1-1.jpg" alt="apyranke2"/>
                    <img src="/images/bracelets/apyranke2-1.jpg" alt="apyranke3"/>
                    <img src="/images/bracelets/apyranke4-1.jpg" alt="apyranke4"/>
                </div>
                <div className="gallery-column">
                    <img src="/images/bracelets/apyranke3-1.jpg" alt="apyranke5"/>
                    <img src="/images/bracelets/apyranke5-1.jpg" alt="apyranke6"/>
                    <img src="/images/bracelets/apyranke7-1.jpg" alt="apyranke7"/>
                    <img src="/images/bracelets/apyranke3-3.jpg" alt="apyranke9"/>
                    <img src="/images/sets/rinkinys2-2.jpg" alt="pakabutis1"/>
                </div>
                <div className="gallery-column">
                    <img src="/images/sets/rinkinys3-1.jpg" alt="pakabutis3"/>
                    <img src="/images/bracelets/apyranke10-1.jpg" alt="apyranke8"/>
                    <img src="/images/bracelets/apyranke8-1.jpg" alt="apyranke10"/>
                    <img src="/images/bracelets/apyranke12-3.jpg" alt="apyranke11"/>
                    <img src="/images/bracelets/apyranke9-1.jpg" alt="apyranke12"/>
                </div>
                <div className="gallery-column">
                    <img src="/images/bracelets/apyranke11-1.jpg" alt="apyranke13"/>
                    <img src="/images/bracelets/apyranke9-3.jpg" alt="apyranke15"/>
                    <img src="/images/bracelets/apyranke7-3.jpg" alt="apyranke14"/>
                    <img src="/images/sets/rinkinys4-2.jpg" alt="pakabutis2"/>
                    <img src="/images/bracelets/apyranke7-2.jpg" alt="apyranke16"/>
                </div>
            </div>
        </div>
    )
}

export default GalerijaPapuosalai
