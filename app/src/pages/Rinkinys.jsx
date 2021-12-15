import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../style/rinkinys.css"
import {useParams} from "react-router-dom"
import {Carousel} from "react-carousel-minimal"

const Rinkinys = () => {

    const [set, setSet] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const {id} = useParams();

    useEffect(() => {
        getData("http://localhost:8000/api/sets", id)
    }, [id]);

    const getData = async (API, setId) => {
    const response = await fetch(`${API}/${setId}`);
    const data = await response.json();

    setSet(data);
    setIsLoading(false);
    }
    
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }

    return (
        <div className="set">
            <div className="set-map">
                <Link to="/">WHITE FOREST</Link> / <Link to="/papuosalai">Papuošalai</Link> / <Link to="/papuosalai/rinkiniai">Rinkiniai</Link> / <Link to="/papuosalai/rinkiniai/:id">"{set.title}"</Link>
            </div>
            <hr />
            {isLoading ? (<p>Loading...</p>) : (
                <div className="set-container">
                    <div className="set-container-gallery">
                    <Carousel
            data={set.pictures}
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
                    <div className="set-conteiner-informacion">
                    <h1>{set.title}</h1>
                    <p>{set.content}</p>
                    <p>{set.necklaceSize}</p>
                    <p>{set.braceletSize}</p>
                    <h3>{set.price}</h3>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Rinkinys
