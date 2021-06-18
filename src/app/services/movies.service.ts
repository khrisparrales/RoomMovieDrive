import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesRootObject, CollRootObject, SeriesRootObject } from '../interfaces/movies.model';
// RxJs
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  urlroommovies = 'https://apiroommovie.herokuapp.com/api/';
  constructor(private http: HttpClient) {}
  // getmovies() {
  //   return this.http.get<MoviesRootObject>(this.urlroommovies + 'movies');
  // }
  private moviesEndpoint = 'https://apiroommovie.herokuapp.com/api/movies';
  private collEndpoint = 'https://apiroommovie.herokuapp.com/api/collec';
  private seriesEndpoint = 'https://apiroommovie.herokuapp.com/api/series';
  getmovies() {
    return this.http.get(this.urlroommovies + 'movies').pipe(tap(console.log));
  }
  getseries() {
    return this.http.get(this.urlroommovies + 'series').pipe(tap(console.log));
  }
  getcollec() {
    return this.http.get(this.urlroommovies + 'collec').pipe(tap(console.log));
  }
  getcollecid(id: string): Observable<CollRootObject> {
    const url = `${this.collEndpoint}/${id}`;
    return this.http.get<CollRootObject>(url).pipe(
      tap((_) => console.log(`fetched coll with id=${id}`)),
      catchError(this.handleError<CollRootObject>(`getColl id=${id}`))
    );
  }
  // getmovieid(id:string){
  //    return this.http.get(this.urlroommovies + 'movies'+'/'+id).pipe(tap(console.log));
  // }
  getmovieid(id: string): Observable<MoviesRootObject> {
    const url = `${this.moviesEndpoint}/${id}`;
    return this.http.get<MoviesRootObject>(url).pipe(
      tap((_) => console.log(`fetched movie with id=${id}`)),
      catchError(this.handleError<MoviesRootObject>(`getMovie id=${id}`))
    );
  }
  getserieid(id: string): Observable<SeriesRootObject> {
    const url = `${this.seriesEndpoint}/${id}`;
    return this.http.get<SeriesRootObject>(url).pipe(
      tap((_) => console.log(`fetched serie with id=${id}`)),
      catchError(this.handleError<SeriesRootObject>(`getSerie id=${id}`))
    );
  }
  deletemovie(id: string) {
    return this.http.delete(
      'https://apiroommovie.herokuapp.com/api/movies/' + id
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
