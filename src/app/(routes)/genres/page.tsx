import MoviesList from '@/app/components/movies/MoviesList';
import PaginationComponent from '@/app/components/paginations/PaginationComponent';
import {getMoviesByGenre} from '@/app/services/api.service';
import React from 'react';

const GenresPage = async () => {
    const {results: movies} = await getMoviesByGenre(28, 1);
    return (
        <div>
            <h1>Movies for Genre: ACTION</h1>
            <MoviesList movies={movies}/>
        </div>
    );
};

export default GenresPage;