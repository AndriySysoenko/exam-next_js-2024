import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Search Page",
    description: "Generated list of all movies by a certain query",
};
type Props = {children: React.ReactNode}
const SearchLayout = ({children}:Props) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default SearchLayout;