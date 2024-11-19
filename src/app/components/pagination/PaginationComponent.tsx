"use client";

import React, {FC} from "react";
import { useRouter } from "next/navigation";


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
        <div>
            <div>
                <button onClick={() => handlePageChange(1)} disabled={currentPage === 1}>
                    First</button>
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    Prev</button>
                <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                    Next</button>
                <button onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}>
                    Last</button>
            </div>
        </div>
    );
};

export default PaginationComponent;