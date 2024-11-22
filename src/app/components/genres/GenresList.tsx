import {getGenres} from '@/app/services/api.service';
import React from 'react';
import Link from 'next/link';
import {IGenre} from '@/app/models/IMovie';

const GenresList = async () => {
    const genresList = await getGenres();

    return (
        <div>
            {
                genresList.genres.map((genre: IGenre) => {
                    const genreSlug = genre.name.replace(/\s+/g, '-').toLowerCase();
                        return (
                        <div key={genre.id}>
                        <Link href={`/genres/${genre.id}-${genreSlug}`}>{genre.name}</Link>
                        </div>);
                })
            }
        </div>
    );
};

export default GenresList;