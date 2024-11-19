import GenresList from '@/app/components/genres/GenresList';
import {getGenres} from '@/app/services/api.service';
import React from 'react';

const GenresPage = async () => {
    const genresObject = await getGenres();
    return (
        <div>
            <GenresList/>
        </div>
    );
};

export default GenresPage;