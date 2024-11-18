import React from 'react';
import MoviesList from "@/app/components/movies/MoviesList";
import {getMovies} from "@/app/services/api.service";

const MoviesPage = async () => {
    const movies = await getMovies();

    return (
        <div>
            <MoviesList movies={movies}/>
        </div>
    );
};

export default MoviesPage;