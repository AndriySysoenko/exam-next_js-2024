"use client";

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import styles from './FormStyle.module.css';

const SearchForm = () => {
    const [query, setQuery] = useState('');
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            router.push(`/search/keyword?query=${encodeURIComponent(query)}`);
        }
    };

    return (
        <form onSubmit={handleSubmit} >
            <input
                type="text" value={query} onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by keyword..." className={styles.formView}/>
            <button type="submit" className={styles.searchButton} >Search</button>
        </form>
    );
};

export default SearchForm;
