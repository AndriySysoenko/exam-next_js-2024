"use client";

import React, {useEffect, useState} from "react";
import {IMovie} from "@/app/models/IMovie";
import { getMovies } from "@/app/services/api.service";
import MoviesList from "../movies/MoviesList";

const PaginationComponent = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [currentPage, setCurrentPage] = useState <number>(1);
    const [totalPages] = useState <number>(500);

    useEffect(() => {
        try {
            getMovies(currentPage)
                .then(value => setMovies(value.results));
            }catch (error) {
                console.error(error);
                }
    }, [currentPage]);

    const goToFirstPage = () => setCurrentPage(1);
    const goToLastPage = () => setCurrentPage(totalPages);
    const goToNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };
    const goToPreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    return (
        <div>
            <div>
                <button onClick={goToFirstPage} disabled={currentPage === 1}>
                    First
                </button>
                <button onClick={goToPreviousPage} disabled={currentPage === 1}>
                    Prev
                </button>
                <button onClick={goToNextPage} disabled={currentPage === totalPages}>
                    Next
                </button>
                <button onClick={goToLastPage} disabled={currentPage === totalPages}>
                    Last
                </button>
            </div>
            <div>
                 <MoviesList movies={movies} />
            </div>
        </div>
    );
};

export default PaginationComponent;