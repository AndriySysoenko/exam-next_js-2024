'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    query: string;
};

const PaginationSearchList = ({currentPage, query, totalPages}: PaginationProps) => {
    // const totalPages:number = 500;
    const router = useRouter();

    const handlePageChange = (newPage: number) => {
        router.push(`/search/movie?query=${encodeURIComponent(query)}&page=${newPage}`);
    };

    return (
        <div>
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage <= 1}>Previous
            </button>
            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage >= totalPages}>Next
            </button>
        </div>
    );
};

export default PaginationSearchList;