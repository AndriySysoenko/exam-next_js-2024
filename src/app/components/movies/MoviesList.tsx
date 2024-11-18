import React, {FC} from 'react';
import {IMovie} from "@/app/models/IMovie";
import Link from "next/link";

type MovieType = {movies:IMovie[]}
const MoviesList:FC<MovieType> = ({movies}) => {
    return (
        <div>
            {
                movies.map((movie:IMovie) => <div key={movie.id}>
                    <Link href={'/movies/' + movie.id}>{movie.title} </Link>
                </div>)
            }

                <button>Prev</button>
                <button>Next</button>

        </div>
    );
};

export default MoviesList;