import { IGenre } from '@/app/models/IMovie';
import { getGenres } from '@/app/services/api.service';
import Link from 'next/link';
import React from 'react';

const GenresPage = async () => {
    const genresObject = await getGenres();
    console.log(genresObject.genres)
    return (
        <div>
            <div>
                {
                    genresObject.genres.map((genre: IGenre) => <div key={genre.id}>
                        <Link href={`/genres/${genre.id}`}>{genre.name}</Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default GenresPage;