import React, { FC } from 'react';
import { getMovies } from '@/app/services/api.service';
import MoviesList from '@/app/components/movies/MoviesList';
import PaginationComponent from '@/app/components/paginations/PaginationComponent';

type SearchParams = { page?: string };
type MyProps = {
    searchParams: Promise<SearchParams>
}
const MoviesPage:FC<MyProps> = async ({searchParams}) => {
    const params = await searchParams;
    const page = params.page ? parseInt(params.page, 10) : 1;
    const {results: movies} = await getMovies(page);
   
    return (
        <div>
            <MoviesList movies={movies}/>
            <PaginationComponent currentPage={page} totalPages={500} basePath="/movies"/>
        </div>
    );
};

export default MoviesPage;