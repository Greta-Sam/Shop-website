import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../style/apyranke.css"
import {useParams} from "react-router-dom"
import {Carousel} from "react-carousel-minimal"


const Apyranke = () => {
    const [bracelet, setBracelet] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    const {id} = useParams();

    useEffect(() => {
        getData("http://localhost:8000/api/bracelets", id)
    }, [id]);

const getData = async (API, braceletId) => {
    const response = await fetch(`${API}/${braceletId}`);
    const data = await response.json();

    setBracelet(data);
    setIsLoading(false);
}
const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
    return (
        <div className="bracelet">
            <div className="bracelet-map">
                <Link to="/">WHITE FOREST</Link> / <Link to="/papuosalai">Papuošalai</Link> / <Link to="/papuosalai/apyrankes">Apyrankės</Link> / <Link to="/papuosalai/apyrankes/:id">"{bracelet.title}"</Link>
            </div>
            <hr />
            {isLoading ? (<p>Loading...</p>) : (
                <div className="bracelet-container">
                <div className="bracelet-container-gallery">
                <Carousel
        data={bracelet.pictures}
        time={3000}
        max-width="800px"
        max-height="500px"
        captionStyle={null}
        radius="10px"
        slideNumber={true}
        slideNumberStyle={slideNumberStyle}
        automatic={true}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        thumbnails={true}
        thumbnailWidth="90px"
        style={{
          textAlign: "center",
          maxWidth: "850px",
          maxHeight: "500px",
          margin: "40px auto",
        }}
      />
                    
                </div>
                <div className="bracelet-conteiner-informacion">
                <h1>{bracelet.title}</h1>
                <p>{bracelet.content}</p>
                <p>{bracelet.necklaceSize}</p>
                <p>{bracelet.braceletSize}</p>
                <h3>{bracelet.price}</h3>
                </div>
            </div>
            )}
        </div>
    )
}

export default Apyranke
