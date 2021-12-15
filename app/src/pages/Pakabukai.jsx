import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../style/pakabukai.css"


const Pakabukai = () => {

    const [necklaces, setNecklaces] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
    getData("http://localhost:8000/api/necklaces")
    }, [])

    const getData = async (API) => {
    const response = await fetch(API);
    const data = await response.json();

    setNecklaces(data)
    setIsLoading(false)
    }


    return (
        <div className="necklaces">
            <div className="necklaces-map">
                <Link to="/">WHITE FOREST</Link> / <Link to="/papuosalai">Papuošalai</Link> / <Link to="/papuosalai/pakabukai">Pakabukai</Link>
            </div>
            <hr />
            <h2>Pakabukai</h2>
            <hr />
            <div className="necklaces-items">
                {isLoading ? (<p>Loading...</p>) : (
                    necklaces.map((necklace) => (
                        <div className="necklaces-items-block" key={necklace.id}>
                           <Link to={`/papuosalai/pakabukai/${necklace.id}`}>
                               <div className="necklaces-items-block-information">
                                   <img src={necklace.image1} alt="medis" width={200}/>
                                   <p className="necklaces-items-block-information-title">"{necklace.title}"</p>
                                   <p className="necklaces-items-block-information-price">{necklace.price}</p>
                               </div>
                           </Link>
                       </div>
                   ))
                )}
            </div>
        </div>
    )
}

export default Pakabukai
