import React, {FC} from 'react';
import {searchMovieByKeyword} from '@/app/services/api.service';
import PaginationComponent from '@/app/components/paginations/PaginationComponent';
import SearchList from '@/app/components/search/SearchList';

type SearchParams = { query: string; page?: string };
type KeywordSearchProps = {
    searchParams: Promise<SearchParams>;
};

const SearchPage:FC<KeywordSearchProps> = async ({ searchParams }) => {
    const params:SearchParams = await searchParams;
    const query: string = params.query || '';
    const page: number = params.page ? +params.page : 1;

    if (!query) {
        return <div>No search query provided</div>;
    }

    const {results: moviesForKeywords, total_pages} = await searchMovieByKeyword(query, page);
    if (!moviesForKeywords || moviesForKeywords.length === 0) {
        return <div>No movies to display</div>;
    }

    return (
        <div >
            <h1>Search Results for keyword: "{query}"</h1>
            <SearchList movies={moviesForKeywords}/>
            <div>
                <PaginationComponent currentPage={page} totalPages={total_pages}
                    basePath="/search/movie" queryParams={{ query: encodeURIComponent(query) }}/>
            </div>
        </div>
    );
};

export default SearchPage;