import React from "react";
import { useEffect, useState } from 'react'
import CardVideogame from "../components/CardVideogame";
import SectionTitle from "../components/SectionTitle";
import SectionParagraph from "../components/SectionParagraph";
import PromotionBanner from "../components/PromotionBanner";

const Home = () => {
    
    const [movies,setMovies] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {

        const fetchMovies = async () => {
          try {
            const response = await fetch('http://localhost:3000/games');
            const movieData = await response.json();
            console.log(movieData.games);
            setMovies(movieData.games);
          }catch(error) {
            setError(error.message || 'Error desconocido');
          }finally{
            setLoading(false);
          }
        };
    
        fetchMovies();
    
    },[]);

    return (
        <>
            <PromotionBanner />
            <section className="videogames">
            
                <SectionTitle title="Ultimos estrenos" />

                <SectionParagraph title="¿Listo para la próxima experiencia épica?" />

                <div className="videogames-list">
                { 
                    movies.map((movie) => {
                        return <CardVideogame 
                        key={movie.id} 
                        id={movie.id}
                        title={movie.title} 
                        price={movie.price}
                        imageUrl={movie.image_url}
                      />
                    })
                    }
                </div>

            </section>
        </>
    )
}

export default Home;