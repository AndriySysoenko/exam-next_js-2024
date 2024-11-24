import Link from 'next/link';
import React, {FC} from 'react';
import styles from '@/app/components/movies/AllMoviesStyle.module.css';
import {IMovie} from '@/app/models/IMovie';
import StarRating from '../rating/StarRatingComponent';

type MovieType = {movies:IMovie[]}
const SearchList:FC<MovieType> = ({movies}) => {

    return (
        <main className={styles.basicMovieBlock}>
                {movies.map((movie) => <div key={movie.id} className={styles.movieCard}>
                    <Link href={`/movies/${movie.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title}></img>
                    </Link>
                    <StarRating voteAverage={movie.vote_average}/>
                </div>)
                }
        </main>
    );
};

export default SearchList;