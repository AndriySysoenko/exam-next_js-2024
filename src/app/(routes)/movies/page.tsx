import React from 'react';
import PaginationComponent from '@/app/components/pagination/PaginationComponent';
import { getMovies } from '@/app/services/api.service';
import MoviesList from '@/app/components/movies/MoviesList';

const MoviesPage = async ({searchParams}: {searchParams: {page: string}}) => {
    const page = searchParams.page ? +searchParams.page : 1;
    const {results: movies} = await getMovies(page);
   
    return (
        <div>
            <MoviesList movies={movies}/>
            <PaginationComponent currentPage={page}/>
        </div>
    );
};

export default MoviesPage;