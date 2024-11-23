import MoviesList from '@/app/components/movies/MoviesList';
import {getMoviesByGenre} from '@/app/services/api.service';
import React from 'react';

const GenresPage = async () => {
    const {results: movies} = await getMoviesByGenre(28, 1);
    return (
        <div>
            <MoviesList movies={movies}/>
        </div>
    );
};

export default GenresPage;