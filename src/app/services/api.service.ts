import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
  LoginData,
  LoginResult,
  RegisterData,
  MoviesResult,
  CinemasResult,
  StatusResult,
  Cinema,
  MovieSearchResultList,
  MovieSearchDetailResult,
  TMDBRootObject,
  TMDBIDRootObject,
  SearchTVRootObject,
  Result,
  Movie,
  MovieResult,
  CinemaResult,
} from '../interfaces/interfaces';
import { MoviesRootObject,Coll,SeriesRootObject } from "../interfaces/movies.model";
import { RouterOutlet } from '@angular/router';
 export interface status{
  success: boolean;
  status_code: number;
  status_message: string;
}
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  
  constructor(private http: HttpClient) {}
  apiUrl: 'https://apicine.osumi.es/api/';
  // searchMovie(q: string){
  //   // return this.http.post<MovieSearchResultList>(
  //   //   'https://apicine.osumi.es/api/' + 'search-movie',
  //   //   {
  //   //     q,
  //   //   }
  //   // );
  //    return this.http.get(
  //      'https://api.themoviedb.org/3/search/movie?api_key=2ec9323401793e5a207687ea4612d147&language=es&query=' +
  //        q
  //    );

  // }
  searchMovie(q: string, y: string): Observable<TMDBRootObject> {
    return this.http.get<TMDBRootObject>(
      'https://api.themoviedb.org/3/search/movie?api_key=2ec9323401793e5a207687ea4612d147&language=es-ES&query=' +
        q +
        '&year=' +
        y
    );
  }
  agegaralisa(){
    return this.http.get<TMDBRootObject>(
      ' https://api.themoviedb.org/3/list/144273/add_item?api_key=2ec9323401793e5a207687ea4612d147&session_id=4817e9687a575be2066800ee19b463983037fbb5'
    );
   
  }
  searchSeries(q: string, y: string): Observable<SearchTVRootObject> {
    return this.http.get<SearchTVRootObject>(
      'https://api.themoviedb.org/3/search/tv?api_key=2ec9323401793e5a207687ea4612d147&language=es-ES&query=' +
        q +
        '&year=' +
        y
    );
  }
  seleccionar(id: number): Observable<TMDBIDRootObject> {
    return this.http.get<TMDBIDRootObject>(
      'https://api.themoviedb.org/3/movie/' +
        id +
        '?api_key=2ec9323401793e5a207687ea4612d147&language=es-MX'
    );
  }
  editmovie(pelicula: MoviesRootObject): Observable<MoviesRootObject> {
    return this.http.put<MoviesRootObject>(
      'https://apiroommovie.herokuapp.com/api/movies/' + pelicula._id,
      {
        _id: pelicula._id,
        id: pelicula.id,
        idimdb: pelicula.idimdb,
        idtmdb: pelicula.idtmdb,
        key: pelicula.key,
        movieName: pelicula.movieName,
        description: pelicula.description,
        idColl: pelicula.Coll.idColl,
        CollName: pelicula.Coll.Collname,
        imgColl: pelicula.Coll.imgColl,
        coverColl: pelicula.Coll.coverColl,
        exist: pelicula.Coll.exist,
        genre: pelicula.genre,
        rate: pelicula.rate,
        img: pelicula.img,
        cover: pelicula.cover,
        url: pelicula.url,
      }
    );
  }
  addmovie(pelicula: MoviesRootObject): Observable<MoviesRootObject> {
    return this.http.post<MoviesRootObject>(
      'https://apiroommovie.herokuapp.com/api/movies',
      {
        id: pelicula.id,
        idimdb: pelicula.idimdb,
        idtmdb: pelicula.idtmdb,
        key: pelicula.key,
        movieName: pelicula.movieName,
        description: pelicula.description,
        idColl: pelicula.Coll.idColl,
        CollName: pelicula.Coll.Collname,
        imgColl: pelicula.Coll.imgColl,
        coverColl: pelicula.Coll.coverColl,
        exist: pelicula.Coll.exist,
        genre: pelicula.genre,
        rate: pelicula.rate,
        img: pelicula.img,
        cover: pelicula.cover,
        url: pelicula.url,
      }
    );
  }
 
 
   addmovielisttmdb(pelicula: MoviesRootObject): Observable<status> {
    return this.http.post<status>(
      'https://api.themoviedb.org/3/list/144273/add_item?api_key=2ec9323401793e5a207687ea4612d147&session_id=4817e9687a575be2066800ee19b463983037fbb5',
      {
        
        media_id: pelicula.idtmdb
        
      }
    );
  }
  addserie(serie: SeriesRootObject): Observable<SeriesRootObject> {
    return this.http.post<SeriesRootObject>(
      'https://apiroommovie.herokuapp.com/api/series',
      {
         rate:serie.rate,
    idtmdb: serie.idtmdb,
    name: serie.name,
    overview: serie.overview,
    img:serie.img,
    cover: serie.cover,
    id: serie.id
  
      }
    );
  }
  movietmdb(id: string) {
    return this.http.get<TMDBRootObject>(
      'https://api.themoviedb.org/3/movie/' +
        id +
        '?api_key=2ec9323401793e5a207687ea4612d147&language=es'
    );
  }

  // selectResult(id: number): Observable<MovieSearchDetailResult> {
  //   return this.http.post<MovieSearchDetailResult>(
  //     this.apiUrl + 'select-result',
  //     { id }
  //   );
  // }
  // selectResult(id: number): Observable<TMDBIDRootObject> {
  //   return this.http.get<TMDBIDRootObject>(
  //     'https://api.themoviedb.org/3/movie/'+id+'?api_key=2ec9323401793e5a207687ea4612d147&language=es-MX' +
  //       'select-result'

  //   );
  // }
}
