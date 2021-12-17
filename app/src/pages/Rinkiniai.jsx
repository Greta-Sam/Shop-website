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
        <div className="sets">
            <div className="sets-map">
                <Link to="/">WHITE FOREST</Link> / <Link to="/papuosalai">Papuošalai</Link> / <Link to="/papuosalai/rinkiniai">Rinkiniai</Link>
            </div>
            <hr />
            <h2>Rinkiniai</h2>
            <hr />
            <div className="sets-items">
                {isLoading ? (<p>Loading...</p>) : (
                    sets.map((set) => (
                        <div className="sets-items-block" key={set.id}>
                           <Link to={`/papuosalai/rinkiniai/${set.id}`}>
                               <div className="sets-items-block-information">
                                   <img src={set.image1} alt="medis" width={200}/>
                                   <p className="sets-items-block-information-title">"{set.title}"</p>
                                   <p className="sets-items-block-information-price">{set.price}</p>
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
