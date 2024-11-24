"use client";

import { useRouter } from 'next/navigation';
import React from 'react';
import styles from './FormStyle.module.css';
import {useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { searchFormValidator } from '@/app/validators/searchForm.validator';

type SearchFormInputs = {
    query: string;
};

const SearchForm = () => {
    const { register,
        handleSubmit,
        reset,
        formState: { errors } } = useForm<SearchFormInputs>({
        resolver: joiResolver(searchFormValidator)});
    const router = useRouter();

    const customHandler = (formQuery: SearchFormInputs) => {
        if (formQuery.query.trim()) {
            router.push(`/search/movie?query=${encodeURIComponent(formQuery.query)}`);
            reset();
        }
    };

    return (
        <form onSubmit={handleSubmit(customHandler)}>
            <input type="text" placeholder="Search for movies..." {...register('query')} className={styles.formView}/>
            <button type="submit" className={styles.searchButton}>Search</button>
            {errors.query && (
                <p style={{color: "red", fontSize: "12px"}}>
                    {errors.query.message}
                </p>
            )}
        </form>)
};

export default SearchForm;
