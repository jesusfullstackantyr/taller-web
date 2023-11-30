import React from "react";
import { Link } from "react-router-dom";

const CardVideogame = ({id,title,price,imageUrl}) => {
    const defaultURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUwCbB0ObxzZ4LmpTunwKaVcoQTSIAT2E_TvybtAVfeA&s";
    return (
        <Link to={`games/${id}`} className='card-videogame'>
            <article >
                <div className="card-videogame-image">
                    <img src={imageUrl ?? defaultURL} alt="" />
                </div>
                <div className="card-videogame-title">
                <span className='videogame-title'>{title} - ${price} USD</span>
                </div>
            </article>
        </Link>
       
    );
};


export default CardVideogame;