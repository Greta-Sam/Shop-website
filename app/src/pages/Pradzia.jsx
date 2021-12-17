import React from 'react'
import { Link } from 'react-router-dom'
import "../style/pradzia.css"

const Pradzia = () => {
    
    return (
        <div className="about">
            <div className="about-map">
                <Link to="/">WHITE FOREST</Link>
            </div>
            <hr />
            <h2>WHITE FOREST</h2>
            <hr />
            <div className="about-title">
                <img src="/images/title1.jpg" alt="title"/>
                <h2>RANKŲ DARBO INTERJERO DETALĖS IR PAPUOŠALAI</h2>
            </div>
            <div className="about-news">
                <h2>NAUJAUSI DARBAI</h2>
                <div className="about-news-items">
                        <div className="about-news-items-block">
                            <img src="/images/trees/medis1-1.jpg" alt="medis" width={200}/>
                           <Link to={"/interjerodetales/1"}>
                               Plačiau
                           </Link>
                       </div>
                       <div className="about-news-items-block">
                            <img src="/images/sets/rinkinys4-1.jpg" alt="medis" width={200}/>
                           <Link to={"/papuosalai/rinkiniai/4"}>
                               Plačiau
                           </Link>
                       </div>
                       <div className="about-news-items-block">
                            <img src="/images/trees/medis3-2.jpg" alt="medis" width={200}/>
                           <Link to={"/interjerodetales/3"}>
                               Plačiau
                           </Link>
                       </div>
                       
                </div>
            </div>
        </div>
    )
}

export default Pradzia
