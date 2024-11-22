import {IGenre, IMovie} from "@/app/models/IMovie";
import {MovieDBResponse} from "../models/MovieDBResponse";
import {HeadersForRequest} from "../components/headers/HeadersForRequest";

export const getMovies = async (page: number): Promise<MovieDBResponse> => {
    return await fetch(`https://api.themoviedb.org/3/discover/movie?page=${page}`, HeadersForRequest)
        .then(value => value.json());
}

export const getMovie= async (id:string, name:string): Promise<IMovie> => {
    return await fetch(`https://api.themoviedb.org/3/movie/${id}${name}`, HeadersForRequest)
        .then(value => value.json());
}

type ResponseGenre = {
    gеnres: IGenre[];
}
export const getGenres = async (): Promise<ResponseGenre> => {
    return await fetch('https://api.themoviedb.org/3/genre/movie/list', HeadersForRequest)
        .then(value => value.json());
}

export const getMoviesByGenre = async (genreId: number, page: number): Promise<MovieDBResponse> => {
    return await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&page=${page}`, HeadersForRequest)
        .then(value => value.json());
};

export const searchMovieByKeyword = async (query: string, page: number): Promise<MovieDBResponse> => {
    return await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&page=${page}`, HeadersForRequest)
        .then(value => value.json())
};
