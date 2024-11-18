import {IMovie} from "@/app/models/IMovie";
import exp from "node:constants";

type MovieDBResponse = {
    page: number,
    results:IMovie[],
    total_pages: number,
    total_results: number
}
// export const getMovies= async (): Promise<IMovie[]> => {
//      const responseMovieDB: MovieDBResponse = await fetch('https://api.themoviedb.org/3/discover/movie?page=1', {
//         headers: {
//             accept: 'application/json',
//             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGRiOTEwNDY3ZTAwZWU0Y2FmZWZkZDQzMjhlOGEwNyIsIm5iZiI6MTczMTkxNTcyNy45MTg2MTk5LCJzdWIiOiI2NzM2ZjBiNTZiZDQ4ODliZmJjNzlkY2QiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.TtEHl9DPyW0vPB4WYcuZllBnLqp6xpQqxj1KrIGJr5U'
//         }
//     })
//     if (!responseMovieDB.ok) {
//         throw new Error(`HTTP error! status: ${responseMovieDB.status}`);
//     }
//
//     const data = await responseMovieDB.json();
//     return data.results;
// }

export const getMovies = async (currentPage: number): Promise<MovieDBResponse> => {
    try {
        const responseMovieDB: MovieDBResponse = await fetch(`https://api.themoviedb.org/3/discover/movie?page=${currentPage}`, {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGRiOTEwNDY3ZTAwZWU0Y2FmZWZkZDQzMjhlOGEwNyIsIm5iZiI6MTczMTkxNTcyNy45MTg2MTk5LCJzdWIiOiI2NzM2ZjBiNTZiZDQ4ODliZmJjNzlkY2QiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.TtEHl9DPyW0vPB4WYcuZllBnLqp6xpQqxj1KrIGJr5U`,
            },
        });

        if (!responseMovieDB.ok) throw new Error('Ошибка загрузки данных');

        return await responseMovieDB.json();

    } catch (error) {
        console.error('Ошибка:', error);
    }
};




export const getMovie= async (id:string): Promise<IMovie> => {
    const movieDetails = await fetch('https://api.themoviedb.org/3/movie' + '/' + id, {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGRiOTEwNDY3ZTAwZWU0Y2FmZWZkZDQzMjhlOGEwNyIsIm5iZiI6MTczMTkxNTcyNy45MTg2MTk5LCJzdWIiOiI2NzM2ZjBiNTZiZDQ4ODliZmJjNzlkY2QiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.TtEHl9DPyW0vPB4WYcuZllBnLqp6xpQqxj1KrIGJr5U'
        }
    })
    // if (!movieDetails.ok) {
    //     throw new Error(`HTTP error! status: ${movieDetails.status}`);
    // }

    const data = await movieDetails.json();
    console.log(data)
    return data
}