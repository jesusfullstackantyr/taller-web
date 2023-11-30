import React from "react";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailGame = ({match}) => {
    const { id } = useParams();

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/games/${id}`)
          .then((response) => response.json())
          .then((data) => setMovie(data))
          .catch((error) => console.error('Error fetching movie details:', error));
      }, [id]);

    return (
        <>
            {
                movie ? (
                    <>
                        <h3>Titulo: {movie.title}</h3>
                        <img src={movie.image_url} alt="" />
                    </>
                ) :
                (
                    <p>cargando detalles</p>
                )
            }
        </>
    );
};

export default DetailGame;