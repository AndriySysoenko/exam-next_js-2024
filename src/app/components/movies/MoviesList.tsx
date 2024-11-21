import React, {FC} from 'react';
import {IMovie} from "@/app/models/IMovie";
import Link from "next/link";
import styles from './AllMoviesStyle.module.css';

type MovieType = {movies:IMovie[]}
const MoviesList:FC<MovieType> = ({movies}) => {
    return (
        <div className={styles.basicMovieBlock}>
            {
                movies.map((movie:IMovie) => <div key={movie.id} className={styles.movieCard}>
                    <Link href={
                        {
                            pathname: `/movies/${movie.id}`,
                            query: {name: movie.title}
                        }
                    } className={styles.textTitle}><img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                           alt={movie.title}></img></Link>
                </div>)
            }
        </div>
    );
};

export default MoviesList;