import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../style/apyrankes.css"


const Apyrankes = () => {

const [bracelets, setBracelets] = useState([])
const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
    getData("http://localhost:8000/api/bracelets")
}, [])

const getData = async (API) => {
    const response = await fetch(API);
    const data = await response.json();

    setBracelets(data)
    setIsLoading(false)
}
    return (
        <div className="bracelets">
            <div className="bracelets-map">
                <Link to="/">WHITE FOREST</Link> / <Link to="/papuosalai">Papuošalai</Link> / <Link to="/papuosalai/apyrankes">Apyrankės</Link>
            </div>
            <hr />
            <h2>Apyrankės</h2>
            <hr />
            <div className="bracelets-items">
                {isLoading ? (<p>Loading...</p>) : (
                    bracelets.map((bracelet) => (
                        <div className="bracelets-items-block" key={bracelet.id}>
                           <Link to={`/papuosalai/apyrankes/${bracelet.id}`}>
                               <div className="bracelets-items-block-information">
                                   <img src={bracelet.image1} alt="medis" width={200}/>
                                   <p className="bracelets-items-block-information-title">"{bracelet.title}"</p>
                                   <p className="bracelets-items-block-information-price">{bracelet.price}</p>
                               </div>
                           </Link>
                       </div>
                   ))
                )}
            </div>
        </div>
    )
}

export default Apyrankes
