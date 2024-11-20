import { IMovie } from "./IMovie"

export type MovieDBResponse = {
    page: number,
    results:IMovie[],
    total_pages: number,
    total_results: number
}