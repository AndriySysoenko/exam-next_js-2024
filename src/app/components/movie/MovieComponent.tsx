import { IMovie } from '@/app/models/IMovie';
import React, {FC} from 'react';
import styles from './MovieStyle.module.css'
import TrailerComponent from '../videos/TrailerComponent';
import StarRating from '../rating/StarRatingComponent';


type MovieProps = {item:IMovie}
const MovieComponent:FC<MovieProps> = ({item}) => {
    return (
        <div key={item.id} className={styles.basicBlock}>
                <div className={styles.content}>
                        <section className={styles.posterBlock}>
                            <img src={`https://image.tmdb.org/t/p/w400/${item.poster_path}`} alt={item.title}></img>
                        </section>
                        <main className={styles.mainBlock}>
                                {item.title && <h1>{item.title}</h1>}
                            {item.tagline && <p>{item.tagline}</p>}
                                <StarRating voteAverage={item.vote_average}/>
                            {item.genres && (
                                <ul className={styles.genreBlock}>
                                    <strong>Genres:</strong>{' '}
                                    {item.genres.map((genre) => (
                                        <li key={genre.id}>{genre.name};</li>
                                    ))}
                                </ul>
                            )}
                                {item.vote_count && <p><strong>Vote Count</strong>: {item.vote_count}</p>}
                                {item.adult !== null && <p><strong>Adult:</strong> {item.adult ? 'Yes' : 'No'}</p>}
                                {item.budget !== null && <p><strong>Budget:</strong> ${item.budget}</p>}
                                {item.revenue !== null && <p><strong>Revenue:</strong> ${item.revenue}</p>}
                                {item.original_title && <p><strong>Original Title:</strong> {item.original_title}</p>}
                            {item.production_companies && (
                                <ul >
                                    <strong>Production companies:</strong>{' '}
                                    {item.production_companies.map((production_companies) => (
                                        <li key={production_companies.id} className={styles.productionList}>{production_companies.name};</li>
                                    ))}
                                </ul>
                            )}
                                {item.original_language && <p><strong>Original Language:</strong> {item.original_language}</p>}
                                {item.popularity && <p><strong>Popularity:</strong> {item.popularity}</p>}
                                {item.release_date && <p><strong>Release Date:</strong> {item.release_date}</p>}

                                {item.runtime !== null && <p><strong>Runtime:</strong> {item.runtime} minutes</p>}
                                {item.status && <p><strong>Status:</strong> {item.status}</p>}
                            {item.homepage && <p><strong>Homepage:</strong> <a href={item.homepage} target="_blank" rel="noopener noreferrer">{item.homepage}</a></p>}
                        </main>

                <div className={styles.description}>
                    {item.overview &&<p>{item.overview}</p>}
                </div>
                    <div>{item.videos && <TrailerComponent videos={item.videos.results}/>}</div>
                
                </div>
        </div>
    );
};

export default MovieComponent;