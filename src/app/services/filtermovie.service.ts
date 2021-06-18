import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FiltermovieService {
  constructor() {}
  filterMovies(filter: string, movies: any) {
    if (!filter || filter === 'Todas') {
      return movies;
    }
    return movies.filter((c) => c.genre.includes(filter));
  }
}
