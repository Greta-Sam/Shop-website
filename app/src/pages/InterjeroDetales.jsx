import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../style/interjeras.css"

const InterjeroDetales = () => {
    
const [trees, setTrees] = useState([])
const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
    getData("http://localhost:8000/api/trees")
}, [])

const getData = async (API) => {
    const response = await fetch(API);
    const data = await response.json();

    setTrees(data)
    setIsLoading(false)
}
    return (
        <div className="interior">
            <div className="interior-map">
                <Link to="/">WHITE FOREST</Link> / <Link to="/interjerodetales">Interjero Detalės</Link>
            </div>
            <hr />
            <h2>Interjero Detalės</h2>
            <hr />
            <div className="interior-items">
                {isLoading ? (<p>Loading...</p>) : (
                    trees.map((tree) => (
                        <div className="interior-items-block" key={tree.id}>
                           <Link to={`/interjerodetales/${tree.id}`}>
                               <div className="interior-items-block-information">
                                   <img src={tree.image1} alt="medis" width={200}/>
                                   <p className="interior-items-block-information-title">"{tree.title}"</p>
                                   <p className="interior-items-block-information-price">{tree.price}</p>
                               </div>
                           </Link>
                       </div>
                   ))
                )}
            </div>
        </div>
    )
}

export default InterjeroDetales
