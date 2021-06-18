import { status } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { filter } from 'rxjs/operators';
import { MoviesService } from "../../services/movies.service";
import { MoviesRootObject } from "../../interfaces/movies.model";
import { Genre } from '../../models/genre.model';
import { FiltermovieService } from '../../services/filtermovie.service';
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
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
     private as: ApiService,
      public authService: AuthService,
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
    this.moviesservice.getmovies().subscribe((movies) => {
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
    console.log(this.visibleMovies)
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
  agregarlista() {
      console.log(this.visibleMovies[1].img);
      
   //console.log(res);
 for (let index = 1; index < this.visibleMovies.length; index++) {
   const element = this.visibleMovies[index];
    var str = this.visibleMovies[index].img; 
      var res = str.replace("w220_and_h330", "w600_and_h900");
    this.visibleMovies[index].img=res; 

    this.as.editmovie(this.visibleMovies[index]).subscribe((data) => {
      console.log(data);
    //  this.dialog.open(DialogDataExampleDialog);
    });
  //console.log(index+ ' agregado '+this.visibleMovies[index].movieName);
 }
   //  for (let index = 15; index < this.visibleMovies.length; index++) {
//    const element = this.visibleMovies[index];
//     this.as.addmovielisttmdb(this.visibleMovies[index]).subscribe((data) => {
//       console.log(data);
//     //  this.dialog.open(DialogDataExampleDialog);
//     });
//   console.log(index+ ' agregado '+this.visibleMovies[index].movieName);
//  }
   

   
  }
}
