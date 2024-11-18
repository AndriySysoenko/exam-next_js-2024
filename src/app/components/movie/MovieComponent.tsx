import React, {FC} from 'react';


type MovieProps = {item:IMovie;}
const MovieComponent:FC<MovieProps> = ({item}) => {
    return (
        <div key={item.id}>
            <div><img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt={item.title}></img></div>
            <p>adult: {item.adult}</p>
            <p>budget: {item.budget}</p>
            <p>homepage: {item.homepage}</p>
            <p>imdb_id: {item.imdb_id}</p>
            <p>original_language: {item.original_language}</p>
            <p>original_title: {item.original_title}</p>
            <p>overview: {item.overview}</p>
            <p>popularity: {item.popularity}</p>
            <p>release_date: {item.release_date}</p>
            <p>revenue: {item.revenue}</p>
            <p>runtime: {item.runtime}</p>
            <p>status: {item.status}</p>
            <p>tagline: {item.tagline}</p>
            <p>title: {item.title}</p>
            <p>video: {item.video}</p>
            <p>vote_average: {item.vote_average}</p>
            <p>vote_count: {item.vote_count}</p>
        </div>
    );
};

export default MovieComponent;