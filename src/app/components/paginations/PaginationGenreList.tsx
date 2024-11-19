"use client";

import {useRouter} from 'next/navigation';
import React from 'react';

type PaginationProps = {
    currentPage: number;
    genreId: number;
    genreName: string;
};

const PaginationGenreList = ({ currentPage, genreId, genreName }: PaginationProps) => {
    const totalPages:number = 500;
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
        <div>
            <button onClick={handlePrevious} disabled={currentPage === 1}>Prev</button>
            <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
        </div>
    );
};

export default PaginationGenreList;