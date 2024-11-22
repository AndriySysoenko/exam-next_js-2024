import { IMovie } from '@/app/models/IMovie';
import React, {FC} from 'react';
import styles from './MovieStyle.module.css'
import RatingComponent from '../rating/RatingComponent';


type MovieProps = {item:IMovie;}
const MovieComponent:FC<MovieProps> = ({item}) => {
    return (
        <div key={item.id} className={styles.basicBlock} style={{
                backgroundImage: item.backdrop_path ? `url('https://image.tmdb.org/t/p/w500/${item.backdrop_path}')` : 'none'}}>
                <div className={styles.blurLayer}></div>
                <div className={styles.content}>
                        <section className={styles.mainBlock}><img src={`https://image.tmdb.org/t/p/w400/${item.poster_path}`} alt={item.title}></img></section>
                        <main className={styles.mainBlock}>
                                {item.title && <h1>{item.title}</h1>}
                                <RatingComponent voteAverage={item.vote_average}/>
                                {item.vote_count && <p>Vote Count: {item.vote_count}</p>}
                                {item.adult !== null && <p>Adult: {item.adult ? 'Yes' : 'No'}</p>}
                                {item.budget !== null && <p>Budget: ${item.budget.toLocaleString()}</p>}
                                {item.original_title && <p>Original Title: {item.original_title}</p>}
                                {item.homepage && <p>Homepage: <a href={item.homepage} target="_blank" rel="noopener noreferrer">{item.homepage}</a></p>}
                                {item.original_language && <p>Original Language: {item.original_language}</p>}
                                {item.imdb_id && <p>IMDb ID: {item.imdb_id}</p>}
                                {item.popularity && <p>Popularity: {item.popularity}</p>}
                                {item.release_date && <p>Release Date: {item.release_date}</p>}
                                {item.revenue !== null && <p>Revenue: ${item.revenue.toLocaleString()}</p>}
                                {item.runtime !== null && <p>Runtime: {item.runtime} minutes</p>}
                                {item.status && <p>Status: {item.status}</p>}
                                {item.tagline && <p>Tagline: {item.tagline}</p>}
                        </main>


                <div className={styles.description}><p>overview: {item.overview}</p>

                        <p>video: {item.video}</p></div>
                </div>

        </div>
    );
};

export default MovieComponent;