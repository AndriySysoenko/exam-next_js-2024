import {IGenre, IMovie} from "@/app/models/IMovie";
import {MovieDBResponse} from "../models/MovieDBResponse";
import {HeadersForRequest} from "../components/headers/HeadersForRequest";

export const getMovies = async (page: number): Promise<MovieDBResponse> => {
    try{
        return await fetch(`https://api.themoviedb.org/3/discover/movie?page=${page}`, HeadersForRequest)
            .then(value => value.json());
    }catch (error) {
        console.error("Error fetching movies:", error);
        throw error;}
}

export const getMovie= async (id:string, name:string): Promise<IMovie> => {
    try{
    return await fetch(`https://api.themoviedb.org/3/movie/${id}?append_to_response=videos`, HeadersForRequest)
        .then(value => value.json());
    }catch (error) {
        console.error("Error fetching movies:", error);
        throw error;}
}

type ResponseGenre = {
    gеnres: IGenre[];
}
export const getGenres = async (): Promise<ResponseGenre> => {
    try{
    return await fetch('https://api.themoviedb.org/3/genre/movie/list', HeadersForRequest)
        .then(value => value.json());
    }catch (error) {
        console.error("Error fetching movies:", error);
        throw error;}
}

export const getMoviesByGenre = async (genreId: number, page: number): Promise<MovieDBResponse> => {
    try{
    return await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&page=${page}`, HeadersForRequest)
        .then(value => value.json());
}catch (error) {
    console.error("Error fetching movies:", error);
        throw error;}
}

export const searchMovieByKeyword = async (query: string, page: number): Promise<MovieDBResponse> => {
    try{
    return await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&page=${page}`, HeadersForRequest)
        .then(value => value.json());
    }catch (error) {
        console.error("Error fetching movies:", error);
        throw error;}
}
