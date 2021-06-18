import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesRootObject } from 'src/app/interfaces/movies.model';
import { MoviesService } from 'src/app/services/movies.service';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: 'app-editmovie',
  templateUrl: './editmovie.component.html',
  styleUrls: ['./editmovie.component.scss'],
})
export class EditmovieComponent implements OnInit {
  @Input()
  movie: MoviesRootObject = null;
  year = '2020';
  _id: string;
  urlSafe: SafeResourceUrl;
  public loading: boolean;
  error: string = null;
  constructor(
    private as: ApiService,
    private activatedRoute: ActivatedRoute,
    public sanitizer: DomSanitizer,
    private movieservice: MoviesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    this._id = id;
    this.getMovie(id);
  }
  getMovie(id: string) {
    this.movieservice.getmovieid(id).subscribe(
      (data) => {
        this.movie = data;
        this.movie.movieName = data.movieName;
        console.log(this.movie);
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.movie.url
        );
        this.loading = false;
      },
      (err) => (this.error = err)
    );
  }
  cancel() {
     this.router.navigate(['/movies']);
  }
  savechange() {
    console.log(this.movie);
    this.as.editmovie(this.movie).subscribe((data) => {
      alert('change save');
    //   this.router.navigate(['/movies']);
    });
  }
}
