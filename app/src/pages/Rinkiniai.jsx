import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../style/rinkiniai.css"

const Rinkiniai = () => {

const [sets, setSets] = useState([])
const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
    getData("http://localhost:8000/api/sets")
}, [])

const getData = async (API) => {
    const response = await fetch(API);
    const data = await response.json();

    setSets(data)
    setIsLoading(false)
}

    return (
        <div className="rinkiniai">
            <div className="rinkiniai-map">
                <Link to="/">WHITE FOREST</Link> / <Link to="/papuosalai">Papuošalai</Link> / <Link to="/papuosalai/rinkiniai">Rinkiniai</Link>
            </div>
            <hr />
            <h2>Rinkiniai</h2>
            <hr />
            <div className="rinkiniai-items">
                {isLoading ? (<p>Loading...</p>) : (
                    sets.map((set) => (
                        <div className="rinkiniai-items-block" key={set.id}>
                           <Link to={`/papuosalai/rinkiniai/${set.id}`}>
                               <div className="rinkiniai-items-block-information">
                                   <img src={set.image1} alt="medis" width={200}/>
                                   <p className="rinkiniai-items-block-information-title">"{set.title}"</p>
                                   <p className="rinkiniai-items-block-information-price">{set.price}</p>
                               </div>
                           </Link>
                       </div>
                   ))
                )}
            </div>
        </div>
    )
}

export default Rinkiniai
