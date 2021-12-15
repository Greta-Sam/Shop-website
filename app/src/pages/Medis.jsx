import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../style/medis.css"
import {useParams} from "react-router-dom"
import {Carousel} from "react-carousel-minimal"

const Medis = () => {
    const [tree, setTree] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    const {id} = useParams();

    useEffect(() => {
        getData("http://localhost:8000/api/trees", id)
    }, [id]);

    const getData = async (API, treeId) => {
    const response = await fetch(`${API}/${treeId}`);
    const data = await response.json();

    setTree(data);
    setIsLoading(false);
    }
    const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    }

    return (
        <div className="tree">
            <div className="tree-map">
                <Link to="/">WHITE FOREST</Link> / <Link to="/interjerodetales">Interjero Detalės</Link> / <Link to="/interjerodetales/:id">"{tree.title}"</Link>
            </div>
            <hr />
            {isLoading ? (<p>Loading...</p>) : (
                <div className="tree-container">
                    <div className="tree-container-gallery">
                    <Carousel
            data={tree.pictures}
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
                    <div className="tree-conteiner-informacion">
                    <h1>{tree.title}</h1>
                    <p>{tree.content}</p>
                    <p>{tree.size}</p>
                    <p>{tree.weight}</p>
                    <h3>{tree.price}</h3>
                    </div>
                </div>
            )}
        </div>
    )
}



export default Medis
