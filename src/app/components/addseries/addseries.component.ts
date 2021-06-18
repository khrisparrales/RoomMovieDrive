

import { Component, OnInit, Inject } from '@angular/core';
import {SearchTVRootObject,ResultTV, TVRootObject} from '../../interfaces/interfaces';
import { ApiService } from "../../services/api.service";
import { SeriesRootObject } from "../../interfaces/movies.model";
@Component({
  selector: 'app-addseries',
  templateUrl: './addseries.component.html',
  styleUrls: ['./addseries.component.scss'],
})
export class AddseriesComponent implements OnInit {
  searchresultTV: SearchTVRootObject;
  seriesresult: ResultTV[]=[];
  serie:SeriesRootObject={};
  serieselect:ResultTV;
seriesTV:TVRootObject;
  searchTimer = null;
  searching = false;
  name:string;
  year = '';
  constructor(private serviceas: ApiService) {}

  ngOnInit(): void {
    this.serieselect.poster_path="https://image.tmdb.org/t/p/w130_and_h195_bestv2/7bjv63bF07F2SiN6PoJHYqmYRoR.jpg";

    this.serviceas.searchSeries('The Boys', '').subscribe((data) => {
      console.log(data);
  //    this.seriesTV=data.results[0];
    });
  }
  searchSeriesStart() {
    // alert('buscar ' + this.movie.name);
    console.log("El name: "+ this.name);
    clearTimeout(this.searchTimer);
    this.searchTimer = setTimeout(() => {
      this.searchSeries();
    }, 500);
  }
  searchSeries() {
    if (this.name.length < 3) {
      return;
    }

    this.searchMovieStop();
    this.searching = true;
    this.serviceas
      .searchSeries(this.name, this.year)
      .subscribe((data) => {
        this.searching = false;
        this.searchresultTV = data;
        this.seriesresult=data.results;
        console.log(this.seriesresult);
      });
  }
  searchMovieStop() {
    clearTimeout(this.searchTimer);
  }
  closeSearchResults() {
    this.seriesresult = [];
  }
  selectResult(serie:ResultTV){
console.log(serie);
this.serieselect=serie;

 
  }
  saveload(){
    console.log(this.serieselect);
    this.serie.cover =
      'https://image.tmdb.org/t/p/original' + this.serieselect.backdrop_path;
    this.serie.img =
      'https://image.tmdb.org/t/p/w600_and_h900_bestv2'+this.serieselect.poster_path ;

    this.serie.rate = this.serieselect.vote_average;
    let ids = this.serieselect.first_air_date;
    let str = ids;
    let res = str.replace(/-/g, '');

    this.serie.id = Number(res);
    this.serie.overview = this.serieselect.overview;
    this.serie.name = this.serieselect.name;
    this.serie.idtmdb = this.serieselect.id;
    this.serviceas.addserie(this.serie).subscribe(() => {
      alert('serie add');
    });
  }
}
