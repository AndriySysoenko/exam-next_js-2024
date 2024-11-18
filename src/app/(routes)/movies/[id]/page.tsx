import React from 'react';
import MovieComponent from "@/app/components/movie/MovieComponent";
import {getMovie} from "@/app/services/api.service";

type MyParams = {id:string}
const MoviePage = async ({params}: {params: MyParams}) => {
    const movie = await getMovie(params.id)

    return (
        <div>
            <MovieComponent item={movie}/>
        </div>
    );
};

export default MoviePage;