import { Component, OnInit, Inject } from '@angular/core';
import { Cinema, Movie, MovieSearchResult, Result } from '../../interfaces/interfaces';
import { MoviesService } from '../../services/movies.service';
import { ApiService } from '../../services/api.service';
import { CommonService } from '../../services/common.service';
import { MoviesRootObject, Coll } from '../../interfaces/movies.model' ;
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { DialogService } from '../../services/dialog.service';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { Router } from '@angular/router';
export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class AddmovieComponent implements OnInit {
  constructor(
    // private dialog: DialogService,
    public sanitizer: DomSanitizer,
    private ms: MoviesService,
    private as: ApiService,
    private cs: CommonService,
    public dialog: MatDialog,
    private router: Router
  ) {}
  // url: SafeResourceUrl;
  isMobile = false;
  searching = false;
  searchTimer = null;
  searchResults: Result[] = [];
  uploadingCover = false;
  uploadingTicket = false;
  col: Coll = {
    idColl: null,
    imgColl: 'null',
    coverColl: 'null',
    Collname: 'null',
    exist: false,
  };
  year = '';
  movie: MoviesRootObject = {
    movieName: '',
    Coll: this.col,
    genre: [],
    img: 'http://apicine.osumi.es/cover/def.jpg',
    cover: 'http://apicine.osumi.es/cover/def.jpg',
    url:
      'https://drive.google.com/file/d/1DZ3LworS8tph3WjC5Df_HCwSVlDBtqeX/preview',
  };

  // movie: MoviesRootObject = {

  //   id: null,
  //   idimdb: '',
  //   idtmdb: null,
  //   key: '',
  //   name: '',
  //   description: '',
  //   Coll: this.col,
  //   genre:string [],
  //   rate: null,
  //   img: '',
  //   cover: '',
  //   url: '',

  // };
  sending = false;
  value = '';
  url: string = this.movie.url;
  urlSafe: SafeResourceUrl;
  generos: [] = [];
  ge: string[] = [];
  numbers = new Array();
  length = this.numbers.push('w');
  openDialog() {}
  ngOnInit(): void {
    //  this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.url);
    this.urlSafe = this.safeurl(this.url);
  }
  safeurl(link: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(link);
  }
  onCoverChange(event) {
    const reader = new FileReader();
    if (
      ( event.target as HTMLInputElement).files &&
      ( event.target as HTMLInputElement).files.length > 0
    ) {
      const file = ( event.target as HTMLInputElement).files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        // this.movie.cover = reader.result as string;
        // this.movie.coverStatus = 1;
        ( document.getElementById('cover') as HTMLInputElement).value = '';
      };
    }
  }
  searchMovieStart() {
    // alert('buscar ' + this.movie.name);
    clearTimeout(this.searchTimer);
    this.searchTimer = setTimeout(() => {
      this.searchMovie();
    }, 500);
  }
  cncelload() {
    this.router.navigate(['/movies']);
  }
  searchMovie() {
    if (this.movie.movieName.length < 3) {
      return;
    }

    this.searchMovieStop();
    this.searching = true;
    this.as.searchMovie(this.movie.movieName, this.year).subscribe((data) => {
      this.searching = false;
      this.searchResults = data.results;
    });
  }

  searchMovieStop() {
    clearTimeout(this.searchTimer);
  }
  closeSearchResults() {
    this.searchResults = [];
  }

  // console.log("new numbers is : " + this.numbers );
  // length = numbers.push(20);
  // console.log("new numbers is : " + numbers );
  selectResult(movieResult: Result) {
    this.movie = {
      movieName: '',
      Coll: this.col,
      genre: [],
    };
    this.as.seleccionar(movieResult.id).subscribe((data) => {
      let ids = data.release_date;
      let str = ids;
      let res = str.replace(/-/g, '');
      console.log('new numbers is : ' + this.numbers);
      this.movie.id = Number(res);
      this.movie.idimdb = data.imdb_id;
      this.movie.idtmdb = data.id;
      this.movie.description = data.overview;
      this.movie.key = encodeURIComponent(data.title);
      this.movie.movieName = data.title;
      for (let index = 0; index < data.genres.length; index++) {
        const element = data.genres[index].name;
        this.movie.genre.push(element);
      }
      this.movie.rate = data.vote_average;
      this.movie.img =
        'https://image.tmdb.org/t/p/w600_and_h900_face' + data.poster_path;
      this.movie.cover =
        'https://image.tmdb.org/t/p/original' + data.backdrop_path;
      this.movie.url =
        'https://drive.google.com/file/d/1DZ3LworS8tph3WjC5Df_HCwSVlDBtqeX/preview';
      // this.movie.genre.push(data.genres.);
      //   data.genres.forEach(function (value) {
      //     console.log(value.name);
      //       this.movie.genre.push(value.name);
      // //     length = this.movie.push(value.name);
      //     //this.ge
      //     // this.movie.genre.push(value.name);
      //   });
      if (data.overview == '') {
        this.movie.description = 'null';
      }
      console.log(data);
      console.log(Number(res));
      console.log(data.title);
      if (data.belongs_to_collection != null) {
        // alert("ES NULL");
        //  console.log(data.belongs_to_collection.name);
        this.col.idColl = data.belongs_to_collection.id;
        this.col.exist = true;
        this.col.Collname = data.belongs_to_collection.name;
        this.col.imgColl =
          'https://image.tmdb.org/t/p/w600_and_h900_bestv2' +
          data.belongs_to_collection.poster_path;
        this.col.coverColl =
          'https://image.tmdb.org/t/p/original' +
          data.belongs_to_collection.backdrop_path;
      } else {
        this.col = {
          idColl: null,
          imgColl: 'null',
          coverColl: 'null',
          Collname: 'null',
          exist: false,
        };
        // this.col.exist = false;
        //  this.col.idColl =null;

        //  this.col.name = null;
        //  this.col.imgColl =
        //    null;
        //  this.col.coverColl =
        //    null;
      }
      this.closeSearchResults();
    });
    //   this.as.selectResult(movieResult.id).subscribe((result) => {
    //     this.movie.name = this.cs.urldecode(result.title);
    //  //   this.movie.cover = this.cs.urldecode(result.poster);
    //     this.movie.coverStatus = 2;
    //    // this.movie.imdbUrl = this.cs.urldecode(result.imdbUrl);

    //     this.closeSearchResults();
    //   });
  }
  addurl() {
    this.urlSafe = this.safeurl(this.movie.url);
    // this.movie.url =
    //   'https://drive.google.com/file/d/1kLxKsTRYKWXYKM0qojuL-eYJv_cNCPxa/preview';
    //   alert('URL:' + this.movie.url);
  }
  saveMovie() {
    //  alert('wwww');
    // if (this.movie.movieName == '') {
    //   this.dialog.alert({
    //     title: 'Error',
    //     content: '¡No has introducido el nombre de la película!',
    //     ok: 'Continuar',
    //   });
    //   return;
    // }
  }
  saveload() {
    console.log(this.movie);
    this.as.addmovie(this.movie).subscribe((data) => {
      console.log(data);
      this.dialog.open(DialogDataExampleDialog);
    });
  }
  uploadCover() {
    document.getElementById('cover').click();
  }
}
@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public movie: MoviesRootObject) {}
}
