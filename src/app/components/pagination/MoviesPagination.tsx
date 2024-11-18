'use client';

// import React, { useState, useEffect } from 'react';
// import Pagination from '@mui/material/Pagination';
// import { Box } from '@mui/material';
// import { IMovie } from '@/app/models/IMovie';
// import {getMovies} from "@/app/services/api.service";

const MoviesPagination = () => {
    // const [movies, setMovies] = useState<IMovie[]>([]);
    const [page, setPage] = useState(1); // текущая страница
    const [totalPages, setTotalPages] = useState(1); // общее количество страниц

    // const API_URL = `https://api.themoviedb.org/3/discover/movie`;

    // Получение фильмов с API
    // const fetchMovies = async (currentPage: number) => {
    //     try {
    //         const response = await fetch(`${API_URL}?page=${currentPage}`, {
    //             headers: {
    //                 accept: 'application/json',
    //                 Authorization: `Bearer Ваш_Bearer_Токен`,
    //             },
    //         });
    //
    //         if (!response.ok) throw new Error('Ошибка загрузки данных');
    //
    //         const data = await response.json();
    //         setMovies(data.results);
    //         setTotalPages(data.total_pages);
    //     } catch (error) {
    //         console.error('Ошибка:', error);
    //     }
    // };
    useEffect(() => {
        getMovies(currentPage)
        setMovies(data.results);
        setTotalPages(data.total_pages);
    }, []);

    // Обработчик изменения страницы
    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    // Обновляем фильмы при изменении страницы
    useEffect(() => {
        getMovies(page);
    }, [page]);

    return (
        <div>
            {/* Список фильмов */}
            {/*<Box>*/}
            {/*    {movies.map((movie) => (*/}
            {/*        <div key={movie.id}>*/}
            {/*            <h3>{movie.title}</h3>*/}
            {/*            <p>{movie.overview}</p>*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</Box>*/}

            {/* Пагинация */}
            <div display="flex" justifyContent="center" mt={4}>
                <Pagination
                    count={totalPages}
                    page={page}
                    onChange={handlePageChange}
                    variant="outlined"
                    shape="rounded"
                />
            </div>
        </div>
    );
};

export default MoviesPagination;