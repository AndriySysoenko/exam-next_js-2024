"use client";

import React, { FC } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./PaginationStyle.module.css";

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    basePath: string;
    queryParams?: Record<string, string | number>;
};

const PaginationComponent:FC<PaginationProps> = ({ currentPage, totalPages, basePath, queryParams = {} }) => {
    const router = useRouter();
    const maxPages: number = 500;
    const limitedTotalPages:number = totalPages > maxPages ? maxPages : totalPages;
    const buildUrl = (page: number) => {
        const params = new URLSearchParams({ ...queryParams, page: page.toString() });
        return `${basePath}?${params.toString()}`;
    };

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= limitedTotalPages) {
            router.push(buildUrl(newPage));
        }
    };

    return (
        <div className={styles.basicPaginationBlock}>
            <Link href={buildUrl(1)}>
                <button disabled={currentPage === 1} className={styles.button}> First </button>
            </Link>
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}
                    className={styles.button}> Prev </button>
            <span className={styles.textCount}>
                Page {currentPage} of {limitedTotalPages}
            </span>
                <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === limitedTotalPages}
                    className={styles.button}> Next </button>
            <Link href={buildUrl(limitedTotalPages)}>
                <button disabled={currentPage === limitedTotalPages} className={styles.button}> Last </button>
            </Link>
        </div>
    );
};

export default PaginationComponent;