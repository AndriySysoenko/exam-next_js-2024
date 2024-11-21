'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './PaginationStyle.module.css';

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    query: string;
};

const PaginationSearchList = ({currentPage, query, totalPages}: PaginationProps) => {
    const router = useRouter();

    const handlePageChange = (newPage: number) => {
        router.push(`/search/movie?query=${encodeURIComponent(query)}&page=${newPage}`);
    };

    return (
        <div className={styles.basicPaginationBlock}>
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage <= 1} className={styles.button}>Prev
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage >= totalPages} className={styles.button}>Next
            </button>
        </div>
    );
};

export default PaginationSearchList;