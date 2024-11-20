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

    const {results: keywords, total_pages} = await searchMovieByKeyword(query, page);

    return (
        <div>
            <h1>Search Results for Keyword: "{query}"</h1>
            <ul>
                {keywords.map((keyword) => (
                    <Link href={`/movies/${keyword.id}`} key={keyword.id}>
                        <li><img src={`https://image.tmdb.org/t/p/w200/${keyword.poster_path}`} alt={keyword.title}></img>{keyword.title}</li>
                    </Link>
                ))}
            </ul>
            <div>
                <PaginationSearchList currentPage={page} query={query} totalPages={total_pages}/>
            </div>
        </div>
    );
};

export default KeywordSearchPage;