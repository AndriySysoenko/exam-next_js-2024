"use client";

import {useRouter} from 'next/navigation';
import React from 'react';
import styles from './PaginationStyle.module.css';

type PaginationProps = {
    currentPage: number;
    genreId: number;
    totalPages: number;
    genreName: string;
};

const PaginationGenreList = ({ currentPage, genreId, genreName, totalPages }: PaginationProps) => {
    const genreSlug = `${genreId}-${genreName.replace(/\s+/g, '-').toLowerCase()}`;
    const router = useRouter();

    const handlePrevious = () => {
        if (currentPage > 1) {
            router.push(`/genres/${genreSlug}?page=${currentPage - 1}`);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            router.push(`/genres/${genreSlug}?page=${currentPage + 1}`);
        }
    };

    return (
        <div className={styles.basicPaginationBlock}>
            <button onClick={handlePrevious} disabled={currentPage === 1} className={styles.button}>Prev</button>
            <span>Page {currentPage} of {totalPages}</span>
            <button onClick={handleNext} disabled={currentPage === totalPages} className={styles.button}>Next</button>
        </div>
    );
};

export default PaginationGenreList;