import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "All Movies Page",
    description: "Generated а list of all movies",
};
type Props = {children: React.ReactNode}
const MoviesLayout = ({children}:Props) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default MoviesLayout;