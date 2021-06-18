import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { filter } from 'rxjs/operators';
import { MoviesService } from '../../services/movies.service';
import { MoviesRootObject } from '../../interfaces/movies.model';
import { Genre } from '../../models/genretv.model';
import { FiltermovieService } from '../../services/filtermovie.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
})
export class SeriesComponent implements OnInit {
  public loading: boolean;
  movies: MoviesRootObject[] = null;
  visibleMovies: MoviesRootObject[] = null;
  public genres = Genre;
  filtermovie: any = '';
  filtergenere: any = '';
  searchText: any = '';
  selectedGenre = 'Todas';
  sortBy: any = 'id';

  constructor(
    private moviesservice: MoviesService,
    private location: Location,
    private router: Router,
    private filterMoviesService: FiltermovieService
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.selectedGenre =
          this.getParameterByName('filter', event.url) || 'Todas';
      });

    this.loading = true;
  }

  ngOnInit() {
    //  this.moviesservice.getmovies().subscribe((movies) => {
    //    this.movies = movies;
    //    this.applyFilter(this.selectedGenre);
    //  });
    // this.movies = this.moviesservice.getmovies();
    this.moviesservice.getseries().subscribe((movies) => {
      this.movies = movies;
      this.loading = false;
      this.applyFilter(this.selectedGenre);
      //   this.applyFilter(this.selectedGenre);
    });
    // this.moviesservice.getmovies()
    //.subscribe((resp:MoviesRootObject[])=>{
    //   console.log('movies ',resp);
    //  // alert(resp);
    //  this.movies=resp;
    // });
  }
  private applyFilter(filterBy: string) {
    switch (filterBy) {
      case 'Cienciaficción':
        filterBy = 'Ciencia ficción';
        break;
      case 'Película_de_TV':
        filterBy = 'Película de TV';
        break;

      default:
        break;
    }
    // if (filterBy == 'Cienciaficción') {
    //   // this.selectedGenre = 'Ciencia Ficción';
    //   (filterBy = 'Ciencia ficción')
    // }
    this.selectedGenre = filterBy;
    this.visibleMovies = this.filterMoviesService.filterMovies(
      filterBy,
      this.movies
    );
    console.log(this.visibleMovies);
  }
  private getParameterByName(name: string, url: string) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    const results = regex.exec(url);
    if (!results) {
      return null;
    }
    if (!results[2]) {
      return '';
    }
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
  changeFilter(event: any) {
    event.preventDefault();
    const targetGenre = event.target.innerText;
    this.location.go(`?filter=${targetGenre}`);
    this.applyFilter(targetGenre);
  }
}
