"use client";

import { useRouter } from 'next/navigation';
import React from 'react';
import styles from './FormStyle.module.css';
import {SubmitHandler, useForm } from 'react-hook-form';

type SearchFormInputs = {
    query: string;
};

const SearchForm = () => {
    const { register, handleSubmit } = useForm<SearchFormInputs>();
    const router = useRouter();

    const onSubmit: SubmitHandler<SearchFormInputs> = (data) => {
        if (data.query.trim()) {
            router.push(`/search/movie?query=${encodeURIComponent(data.query)}`);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Search for movies..." {...register('query', {required: true})} className={styles.formView}/>
            <button type="submit" className={styles.searchButton}>Search</button>
        </form>)
};

export default SearchForm;
