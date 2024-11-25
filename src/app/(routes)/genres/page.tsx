import React from 'react';
import GenrePage from './[genreIdWithName]/page';
import { getGenres } from '@/app/services/api.service';

type DefaultGenreParams = {page:string}

const GenresPage = async () => {
    const defaultGenreIdWithName:string = '28-Action';
    const defaultSearchParams:DefaultGenreParams = { page: '1' };
    return (
        <div>
            <GenrePage
                params={{ genreIdWithName: defaultGenreIdWithName }}
                searchParams={defaultSearchParams}
            />
        </div>
    );
};

export default GenresPage;