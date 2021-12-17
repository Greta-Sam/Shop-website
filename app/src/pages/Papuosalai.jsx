import React from 'react'
import { Link } from 'react-router-dom'
import "../style/papuosalai.css"

const Papuosalai = () => {
    return (
        <div className="jewelry">
            <div className="jewelry-map">
                <Link to="/">WHITE FOREST</Link> / <Link to="/papuosalai">Papuošalai</Link>
            </div>
            <hr />
            <h2>Papuošalai</h2>
            <hr />
            <div className="jewelry-link">
                <div className="jewelry-link-bracelets" >
                    <img src="/images/sets/rinkinys4-2.jpg" alt="pakabutis3"/>
                    <Link to="/papuosalai/apyrankes">Apyrankės</Link>
                </div>
                <div className="jewelry-link-necklaces">
                <img src="/images/necklaces/pakabutis6-2.jpg" alt="medis14" />
                    <Link to="/papuosalai/pakabukai">Pakabukai</Link>
                </div>
                <div className="jewelry-link-sets">
                <img src="/images/sets/rinkinys2-3.jpg" alt="medis14" />
                    <Link to="/papuosalai/rinkiniai">Rinkiniai</Link>
                </div>
            </div>
        </div>
    )
}

export default Papuosalai
