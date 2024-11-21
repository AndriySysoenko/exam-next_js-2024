"use client";

import React, {FC} from "react";
import { useRouter } from "next/navigation";
import styles from './PaginationStyle.module.css';


type PaginationProps = {
    currentPage: number;
};

const PaginationComponent:FC<PaginationProps> = ({currentPage}) => {
    const router = useRouter();
    const totalPages:number = 500;

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) router.push(`/movies?page=${newPage}`)
    };

    return (
        <div className={styles.basicPaginationBlock}>
            <button onClick={() => handlePageChange(1)} disabled={currentPage === 1} className={styles.button}>
                First
            </button>
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className={styles.button}>
                Prev
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className={styles.button}>
                Next
            </button>
            <button onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} className={styles.button}>
                Last
            </button>
        </div>
    );
};

export default PaginationComponent;