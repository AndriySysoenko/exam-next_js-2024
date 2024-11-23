import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "GenreLayout",
    description: "Combines all information about each movie by a certain genre",
};
type Props = {children: React.ReactNode}
const GenreLayout = ({children}:Props) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default GenreLayout;