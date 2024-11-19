import {IGenre, IMovie} from "@/app/models/IMovie";

type MovieDBResponse = {
    page: number,
    results:IMovie[],
    total_pages: number,
    total_results: number
}

export const getMovies = async (page: number): Promise<MovieDBResponse> => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?page=${page}`, {
        headers: {
            accept: "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGRiOTEwNDY3ZTAwZWU0Y2FmZWZkZDQzMjhlOGEwNyIsIm5iZiI6MTczMTkxNTcyNy45MTg2MTk5LCJzdWIiOiI2NzM2ZjBiNTZiZDQ4ODliZmJjNzlkY2QiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.TtEHl9DPyW0vPB4WYcuZllBnLqp6xpQqxj1KrIGJr5U`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch movies");
    }

    const data: MovieDBResponse = await response.json();
    return data;
}

export const getMovie= async (id:string): Promise<IMovie> => {
    const movieDetails = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGRiOTEwNDY3ZTAwZWU0Y2FmZWZkZDQzMjhlOGEwNyIsIm5iZiI6MTczMTkxNTcyNy45MTg2MTk5LCJzdWIiOiI2NzM2ZjBiNTZiZDQ4ODliZmJjNzlkY2QiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.TtEHl9DPyW0vPB4WYcuZllBnLqp6xpQqxj1KrIGJr5U'
        }
    })
    if (!movieDetails.ok) {
        throw new Error(`HTTP error! status: ${movieDetails.status}`);
    }

    const data = await movieDetails.json();
    return data
}

type ResponseGenre = {
    gеnres: IGenre[]
}
export const getGenres = async (): Promise<ResponseGenre> => {
    const responseGenre:ResponseGenre = await fetch('https://api.themoviedb.org/3/genre/movie/list', {
        headers: {
            accept: "application/json",
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGRiOTEwNDY3ZTAwZWU0Y2FmZWZkZDQzMjhlOGEwNyIsIm5iZiI6MTczMTkxNTcyNy45MTg2MTk5LCJzdWIiOiI2NzM2ZjBiNTZiZDQ4ODliZmJjNzlkY2QiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.TtEHl9DPyW0vPB4WYcuZllBnLqp6xpQqxj1KrIGJr5U',
        }
    }).then(value => value.json())
    
    return responseGenre;
}

export const getMoviesByGenre = async (genreId: number, page: number): Promise<MovieDBResponse> => {
    console.log(genreId, page)
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&page=${page}`, {
        headers: {
            accept: "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGRiOTEwNDY3ZTAwZWU0Y2FmZWZkZDQzMjhlOGEwNyIsIm5iZiI6MTczMTkxNTcyNy45MTg2MTk5LCJzdWIiOiI2NzM2ZjBiNTZiZDQ4ODliZmJjNzlkY2QiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.TtEHl9DPyW0vPB4WYcuZllBnLqp6xpQqxj1KrIGJr5U`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch movies by genre");
    }

    const data:MovieDBResponse = await response.json();
    console.log(data)
    return data
};