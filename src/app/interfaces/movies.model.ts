export interface MoviesRootObject {
  _id?: string;
  id?: number;
  idimdb?: string;
  idtmdb?: number;
  key?: string;
  movieName?: string;
  name?:string;
  description?: string;
  Coll: Coll;
  genre?: Array<string>;
  rate?: number;
  img?: string;
  cover?: string;
  url?: string;
  __v?: number;
}

export interface Coll {
  _id?: string;
  idColl: number;
  imgColl?: string;
  coverColl?: string;
  exist: boolean;
  Collname: string;
}

export interface CollRootObject {
  peliculas: string[];
  _id: string;
  idColl: number;
  CollName: string;
  imgColl: string;
  coverColl: string;
  exist: boolean;
  __v: number;
}

export interface SeriesRootObject {
  rate?: number;
  seasons?: Season[];
  genres?: string[];

  id?: number;
  name?: string;
  overview?: string;
  img?: string;
  cover?: string;
  in_production?: boolean;
  date?: number;
  idtmdb?:number;
 
}

export interface Season {
  date: number;
  id: number;
  episode_count: number;
  name: string;
  overview: string;
  img: string;
  number: number;
  episodes: Episode[];
}

export interface Episode {
  air_date: number;
  episode_number: number;
  id: number | number | string;
  name: string;
  overview: string;
  season_number: number;
  show_id: number;
  img: string;
  rate: number;
  url: string;
}