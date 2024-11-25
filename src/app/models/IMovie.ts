import { IGenre } from "./IGenre";

export interface IMovie {
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection?: ICollection;
	budget: number;
	genres: IGenre[];
	homepage: string;
	id: number;
	imdb_id: string;
	origin_country: string[];
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: IProduction_company[];
	production_countries: IProduction_country[];
	release_date: string;
	revenue: number;
	runtime: number;
	spoken_languages: ISpoken_language[];
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
	videos: {
		results: IVideo[];
	};
	images: IImage;
}
export interface ICollection {
	id: number,
	name: string,
	poster_path: string,
	backdrop_path: string
}

export interface IProduction_company {
	id: number,
	logo_path: string,
	name: string,
	origin_country: string,
}
export interface IProduction_country {
	iso_3166_1: string,
	name: string,
}
export interface ISpoken_language {
	english_name: string,
	iso_639_1: string,
	name: string
}
export interface IVideo {
	iso_639_1: string;
	iso_3166_1: string;
	name: string;
	key: string;
	site: string;
	size: number;
	type: string;
	official: boolean;
	published_at: string;
	id: string;
}

export interface IBackdrop {
	aspect_ratio: number;
	height: number;
	iso_639_1?: string;
	file_path: string;
	vote_average: number;
	vote_count: number;
	width: number;
}
export interface ILogo {
	aspect_ratio: number;
	height: number;
	iso_639_1: string;
	file_path: string;
	vote_average: number;
	vote_count: number;
	width: number;
}
export interface IPoster {
	aspect_ratio: number;
	height: number;
	iso_639_1: string;
	file_path: string;
	vote_average: number;
	vote_count: number;
	width: number;
}
export interface IImage {
	backdrops: IBackdrop[];
	logos: ILogo[];
	posters: IPoster[];
}

export interface IKeyword {
	id: number;
	name: string;
}