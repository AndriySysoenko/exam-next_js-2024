import React from 'react';
import MovieComponent from "@/app/components/movie/MovieComponent";
import {getMovie} from "@/app/services/api.service";

type MyParams = {
    id:string,
    name:string
}
const MoviePage = async ({params}: {params: MyParams}) => {
    const movie = await getMovie(params.id, params.name)

    return (
        <div>
            <MovieComponent item={movie}/>
        </div>
    );
};

export default MoviePage;