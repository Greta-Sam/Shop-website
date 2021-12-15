import React, { useState } from 'react'
import {Link} from "react-router-dom"
import "../style/header.css"
import {GiHamburgerMenu} from "react-icons/gi"


const Header = () => {
    const [showLinks, setShowLinks] = useState(false)
    return (
        <div className="header">
            <div className="header-logo"><Link to="/">WHITE FOREST</Link></div>
            <div className="header-link">
                <button className="header-button" onClick={() => setShowLinks(!showLinks)}><GiHamburgerMenu size={35}/></button>
                <div className="header-links" id={showLinks ? "hidden" : ""}>
                    <Link to="/" onClick={() => setShowLinks(!showLinks)}>Pradžia</Link>
                    <Link to="/galerija" onClick={() => setShowLinks(!showLinks)}>Galerija</Link>
                    <Link to="/interjerodetales" onClick={() => setShowLinks(!showLinks)}>Interjero detalės</Link>
                    <Link to="/papuosalai" onClick={() => setShowLinks(!showLinks)}>Papuošalai</Link>
                    <Link to="/kontaktai" onClick={() => setShowLinks(!showLinks)}>Kontaktai</Link>
                </div>
            </div>
        </div>
    )
}

export default Header
