import React, { useState } from 'react'
import "../style/kontaktai.css"
import {Link} from "react-router-dom"

const Kontaktai = () => {
    const [message, setMessage] = useState("")


const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Žinutė išsiųsta!")
}

    return (
        <div  className="kontaktai">
            <div className="kontaktai-map">
            <Link to="/">WHITE FOREST</Link> / <Link to="/kontaktai">Kontaktai</Link>
            </div>
            <hr />
            <h1>Kontaktai</h1>
            <hr />
            <div className="kontaktai-info">
                <div className="kontaktai-info-title">
                    <h2>WHITE FOREST</h2>
                </div>
                <div className="kontaktai-info-context">
                    <p>Jeigu turite kokių nors klausimų arba jus domina kažkuris darbas, galite susisiekti paštu arba užpildykite žemiau pateiktą formą.</p>
                    <p>Paštas: greta.samsanaviciene@gmail.com</p>
                </div>
                <div  className="kontaktai-info-form">
                    <form onSubmit={handleSubmit}>
                        <label>Vardas*</label>
                        <input 
                        type="text" 
                        required
                        />
                        <label>Telefonas</label>
                        <input 
                        type="tel" 
                        />
                        <label>Paštas*</label>
                        <input 
                        type="email" 
                        required
                        />
                        <label>Žinutė*</label>
                        <textarea
                        required
                        ></textarea>
                        <p>* Privaloma užpildyti</p>
                        <button type="submit">Siųsti</button>
                    </form>
                    <p>{message}</p>
                </div>
            </div>
        </div>
    )
}

export default Kontaktai
