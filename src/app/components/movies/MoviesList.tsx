import React, {FC} from 'react';
import {IMovie} from "@/app/models/IMovie";
import Link from "next/link";
import styles from './AllMoviesStyle.module.css';
import StarRating from '../rating/StarRatingComponent';

type MovieType = {movies:IMovie[]}
const MoviesList:FC<MovieType> = ({movies}) => {

    return (
        <main className={styles.basicMovieBlock}>
            {
                movies.map((movie:IMovie) => <div key={movie.id} className={styles.movieCard}>
                    <Link href={
                        {
                            pathname: `/movies/${movie.id}`,
                            query: {name: movie.title}
                        }
                    } className={styles.textTitle}><img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title}></img></Link>
                    <StarRating voteAverage={movie.vote_average}/>
                </div>)
            }
        </main>
    );
};

export default MoviesList;