import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../style/pakabukas.css"
import {useParams} from "react-router-dom"
import {Carousel} from "react-carousel-minimal"

const Pakabukas = () => {
    const [necklace, setNecklace] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const {id} = useParams();

    useEffect(() => {
        getData("http://localhost:8000/api/necklaces", id)
    }, [id]);

    const getData = async (API, necklaceId) => {
    const response = await fetch(`${API}/${necklaceId}`);
    const data = await response.json();

    setNecklace(data);
    setIsLoading(false);
    }
    
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }


    return (
        <div className="necklace">
            <div className="necklace-map">
                <Link to="/">WHITE FOREST</Link> / <Link to="/papuosalai">Papuošalai</Link> / <Link to="/papuosalai/pakabukai">Pakabukai</Link> / <Link to="/papuosalai/pakabukai/:id">"{necklace.title}"</Link>
            </div>
            <hr />
            {isLoading ? (<p>Loading...</p>) : (
                <div className="necklace-container">
                    <div className="necklace-container-gallery">
                    <Carousel
            data={necklace.pictures}
            time={3000}
            width="950px"
            height="500px"
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
                    <div className="necklace-conteiner-informacion">
                    <h1>{necklace.title}</h1>
                    <p>{necklace.content}</p>
                    <p>{necklace.necklaceSize}</p>
                    <p>{necklace.braceletSize}</p>
                    <h3>{necklace.price}</h3>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Pakabukas
