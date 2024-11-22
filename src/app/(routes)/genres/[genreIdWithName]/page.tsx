import MoviesList from '@/app/components/movies/MoviesList';
import PaginationComponent from '@/app/components/paginations/PaginationComponent';
// import PaginationGenreList from '@/app/components/paginations/PaginationGenreList';
import { getMoviesByGenre } from '@/app/services/api.service';
import React from 'react';


type GenreMoviesProps = {
    params: { genreIdWithName: string },
    searchParams: { page?: string }
};

const GenrePage = async ({params, searchParams }: GenreMoviesProps) => {
    const [genreId, ...genreNameParts] = params.genreIdWithName.split('-');
    const genreName = genreNameParts.join(' ');
    const genreIdNum = +genreId;
    const page = searchParams.page ? +searchParams.page : 1;
    const genreSlug = `${genreId}-${genreName.replace(/\s+/g, '-').toLowerCase()}`;

    const { results: movies, total_pages } = await getMoviesByGenre(genreIdNum, page);
    
    return (
        <div>
            <h1>Movies for Genre: {genreName.toUpperCase()}</h1>
            <MoviesList movies={movies}/>
                <div>
                    <PaginationComponent currentPage={page} totalPages={total_pages} basePath={`/genres/${genreSlug}`}/>
                </div>
        </div>
    );
};

export default GenrePage;