import {getGenres} from '@/app/services/api.service';
import React from 'react';
import Link from 'next/link';
import {IGenre} from '@/app/models/IMovie';
import styles from './GenresStyle.module.css';

const GenresList = async () => {
    const genresList = await getGenres();

    return (
        <aside className={styles.basicBlock}>
            {
                genresList.genres.map((genre: IGenre) => {
                    const genreSlug = genre.name.replace(/\s+/g, '-').toLowerCase();
                        return (
                        <p key={genre.id} className={styles.content}>
                        <Link href={`/genres/${genre.id}-${genreSlug}`} className={styles.content}>{genre.name}</Link>
                        </p>);
                })
            }
        </aside>
    );
};

export default GenresList;