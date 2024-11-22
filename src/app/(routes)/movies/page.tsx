import React from 'react';
import { getMovies } from '@/app/services/api.service';
import MoviesList from '@/app/components/movies/MoviesList';
import PaginationComponent from '@/app/components/paginations/PaginationComponent';

const MoviesPage = async ({searchParams}: {searchParams: {page: string}}) => {
    const page = searchParams.page ? +searchParams.page : 1;
    const {results: movies} = await getMovies(page);
   
    return (
        <div>
            <MoviesList movies={movies}/>
            <PaginationComponent currentPage={page} totalPages={500} basePath="/movies"/>
        </div>
    );
};

export default MoviesPage;