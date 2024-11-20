import MoviesList from '@/app/components/movies/MoviesList';
import PaginationGenreList from '@/app/components/paginations/PaginationGenreList';
import { getMoviesByGenre } from '@/app/services/api.service';
import React from 'react';


type GenreMoviesProps = {
    params: { genreIdWithName: string }, // Динамический сегмент маршрута
    searchParams: { page?: string }    // Query-параметры
};

const GenrePage = async ({params, searchParams }: GenreMoviesProps) => {

    const [genreId, ...genreNameParts] = params.genreIdWithName.split('-');
    const genreName = genreNameParts.join(' ');
    const genreIdNum = +genreId;
    const page = searchParams.page ? +searchParams.page : 1;

    const movies = await getMoviesByGenre(genreIdNum, page);
    
    return (
        <div>
            <h1>Movies for Genre: {genreName.toUpperCase()}</h1>
            <MoviesList movies={movies.results}/>
                <div>
                    <PaginationGenreList currentPage={page} genreId={genreIdNum} genreName={genreName}/>
                </div>
        </div>
    );
};

export default GenrePage;