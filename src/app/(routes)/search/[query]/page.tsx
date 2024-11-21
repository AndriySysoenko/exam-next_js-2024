import Link from 'next/link';
import React from 'react';
import PaginationSearchList from '@/app/components/paginations/PaginationSearchList';
import { searchMovieByKeyword } from '@/app/services/api.service';

type KeywordSearchProps = {
    searchParams: { query: string; page?: string };
};

const KeywordSearchPage = async ({ searchParams }: KeywordSearchProps) => {
    const query = searchParams.query || '';
    const page = searchParams.page ? +searchParams.page : 1;

    if (!query) {
        return <div>No search query provided</div>;
    }

    const {results: moviesForKeywords, total_pages} = await searchMovieByKeyword(query, page);

    return (
        <div>
            <h1>Search Results for Keyword: "{query}"</h1>
            <div>
                {moviesForKeywords.map((movieForKeyword) => (
                    <Link href={`/movies/${movieForKeyword.id}`} key={movieForKeyword.id}>
                        <img src={`https://image.tmdb.org/t/p/w200/${movieForKeyword.poster_path}`} alt={movieForKeyword.title}></img>
                    </Link>
                ))}
            </div>
            <div>
                <PaginationSearchList currentPage={page} query={query} totalPages={total_pages}/>
            </div>
        </div>
    );
};

export default KeywordSearchPage;