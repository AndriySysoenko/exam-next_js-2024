"use client";

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

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
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by keyword..."/>
            <button type="submit" >Search</button>
        </form>
    );
};

export default SearchForm;
