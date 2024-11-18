import React from 'react';
import MoviesList from "@/app/components/movies/MoviesList";
import {getMovies} from "@/app/services/api.service";
import MoviesPagination from "@/app/components/pagination/MoviesPagination";

const MoviesPage = async () => {
    const movies = await getMovies();

    return (
        <div>
            <MoviesList movies={movies}/>
            {/*<MoviesPagination/>*/}
        </div>
    );
};

export default MoviesPage;