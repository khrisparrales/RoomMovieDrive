import { Component, OnInit, Input, Inject } from '@angular/core';
import { SeriesRootObject, Season, Episode } from '../../interfaces/movies.model';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-seriesdetail',
  templateUrl: './seriesdetail.component.html',
  styleUrls: ['./seriesdetail.component.scss'],
})
export class SeriesdetailComponent implements OnInit {
  @Input()
  serie: SeriesRootObject = null;
  season: Season[] = null;
  episodes: Episode[] = null;
  urlSafe: SafeResourceUrl = null;
  error: string = null;
  loading = true;
  constructor(
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private movieservice: MoviesService,
    public sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;
    // alert(id);
    this.getMovie(id);
  }
  openDialog(s: string) {
this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
 s
);
this.dialog.open(DialogDataExampleDialog, {
      data: {
        animal: this.urlSafe,
      },
    });
  }
  getMovie(id: string) {
    this.movieservice.getserieid(id).subscribe(
      (data) => {
        this.serie = data;
        this.season = data.seasons;

       // this.episodes = data.seasons[0].episodes;
        //console.log(this.episodes);
      //   this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
      // //    this.episodes[0].url
      //   );
        this.loading = false;
      },
      (err) => (this.error = err)
    );
  }

}
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
})
// tslint:disable-next-line: component-class-suffix
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData)
   {}
}
