import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import {
  CollRootObject,
  MoviesRootObject,
} from '../../interfaces/movies.model';
@Component({
  selector: 'app-collecdetail',
  templateUrl: './collecdetail.component.html',
  styleUrls: ['./collecdetail.component.scss'],
})
export class CollecdetailComponent implements OnInit {
  collec: CollRootObject = null;
  //
  movie: MoviesRootObject[] = [];
  error: string = null;
  valor: string =
    'https://i.pinimg.com/736x/ca/42/6f/ca426f2da11bf3555d9d2598f89e9801.jpg';
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private movieservice: MoviesService
  ) {
    //sthis.collec.coverColl='';
  }

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    // alert(id);
    this.getColl(id);
  }
  getColl(id: string) {
    this.movieservice.getcollecid(id).subscribe(
      (data) => {
        this.collec = data;
        //    this.movie.movieName = data.movieName;
        console.log(this.collec);
        for (let index = 0; index < this.collec.peliculas.length; index++) {
          const element = this.collec.peliculas[index];
          console.log(element);
          this.getMovie(element);
        }
        //  this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
        //  this.movie.url
        // );
        // this.loading = false;
      },
      (err) => (this.error = err)
    );
  }
  getMovie(id: string) {
    this.movieservice.getmovieid(id).subscribe(
      (data) => {
        console.log(data)
        this.movie.push(data);
       // this.movie.movieName = data.movieName;
        console.log(this.movie);
       // this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
         // this.movie.url
       // );
       // this.loading = false;
      },
      (err) => (this.error = err)
    );
  }
}
