export interface LoginData {
	name: string;
	pass: string;
}

export interface LoginResult {
	status: string;
	id: number;
	name: string;
	token: string;
}

export interface RegisterData {
	name: string;
	pass: string;
	conf: string;
}

export interface Movie {
	id: number;
	idCinema: number;
	name: string;
	slug: string;
	cover: string;
	coverStatus?: number;
	ticket: string;
	ticketStatus?: number;
	imdbUrl: string;
	date: string;
}

export interface MoviesResult {
	status: string;
	numPages: number;
	list: Movie[];
}

export interface MovieResult {
	status: string;
	movie: Movie;
}

export interface Cinema {
	id: number;
	name: string;
	slug: string;
}

export interface CinemasResult {
	status: string;
	list: Cinema[];
}

export interface CinemaResult {
	status: string;
	list: Movie[];
}

export interface DialogField {
	title: string;
	type: string;
	value: string;
	hint?: string;
}

export interface DialogOptions {
	title: string;
	content: string;
	fields?: DialogField[];
	ok: string;
	cancel?: string;
}

export interface StatusResult {
	status: string;
}

export interface MovieSearchResult {
  id: number;
  title: string;
  poster: string;
}

export interface MovieSearchResultList {
  status: string;
  list: MovieSearchResult[];
}

export interface MovieSearchDetailResult {
	status: string;
	title: string;
	poster: string;
	imdbUrl: string;
}
export interface TMDBRootObject {
  page: number;
  total_results: number;
  total_pages: number;
  results: Result[];
}

export interface Result {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path?: string;
  id: number;
  adult: boolean;
  backdrop_path?: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
}
export interface TMDBIDRootObject {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: Belongstocollection;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Productioncompany[];
  production_countries: Productioncountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Spokenlanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Spokenlanguage {
  iso_639_1: string;
  name: string;
}

export interface Productioncountry {
  iso_3166_1: string;
  name: string;
}

export interface Productioncompany {
  id: number;
  logo_path?: string;
  name: string;
  origin_country: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Belongstocollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export interface CollecRootObject {
  peliculas: string[];
  _id: string;
  idColl: number;
  CollName: string;
  imgColl: string;
  coverColl: string;
  exist: boolean;
  __v: number;
}


export interface SearchTVRootObject {
  page: number;
  total_results: number;
  total_pages: number;
  results: ResultTV[];
}

export interface ResultTV {
  original_name: string;
  genre_ids: number[];
  name: string;
  popularity: number;
  origin_country: string[];
  vote_count: number;
  first_air_date: string;
  backdrop_path?: string;
  original_language: string;
  id: number;
  vote_average: number;
  overview: string;
  poster_path?: string;
}
export interface TVRootObject {
  backdrop_path: string;
  created_by: Createdby[];
  episode_run_time: number[];
  first_air_date: string;
  genres: Genre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: Lastepisodetoair;
  name: string;
  next_episode_to_air: Lastepisodetoair;
  networks: Network[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Productioncompany[];
  seasons: Season[];
  status: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

export interface Season {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}



export interface Network {
  name: string;
  id: number;
  logo_path: string;
  origin_country: string;
}

export interface Lastepisodetoair {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  show_id: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}


export interface Createdby {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string;
}
