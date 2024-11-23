import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "GenresLayout",
    description: "Generated list of all movies by a certain genre",
};
type Props = {children: React.ReactNode}
const GenresLayout = ({children}:Props) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default GenresLayout;