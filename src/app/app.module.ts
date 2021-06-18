import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutangularComponent } from './components/aboutangular/aboutangular.component';
import { MoviesComponent } from './components/movies/movies.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SeriesComponent } from './components/series/series.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddmovieComponent } from './components/addmovie/addmovie.component';
import { AddseriesComponent } from './components/addseries/addseries.component';
import { NopageComponent } from './components/nopage/nopage.component';
import { MoviedetailComponent } from './components/moviedetail/moviedetail.component';
import { EnumToArrayPipe } from './pipes/enum-to-array.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogindbComponent } from './components/logindb/logindb.component';
// import { MatButtonModule } from '@angular/material/button';
// import { MatSliderModule } from '@angular/material/slider';
import {  MATERIAL } from './app.common';
import { UrldecodePipe } from './pipes/urldecode.pipe';
import { DeletemovieComponent } from './components/deletemovie/deletemovie.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AuthGuard } from './guards/auth.guard';
import { LoginoffComponent } from './components/loginoff/loginoff.component';
import { EditmovieComponent } from './components/editmovie/editmovie.component';
import { FilterPipe } from './pipes/filter.pipe';
// import { ConfirmDialogComponent } from './components/dialogs/confirm-dialog/confirm-dialog.component';
// import { AlertDialogComponent } from './components/dialogs/alert-dialog/alert-dialog.component';
// import { FormDialogComponent } from './components/dialogs/form-dialog/form-dialog.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DemoMaterialModule } from './material-module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import {
  SwiperModule,
  SwiperConfigInterface,
  SWIPER_CONFIG,
} from 'ngx-swiper-wrapper';
import { CollecdetailComponent } from './components/collecdetail/collecdetail.component';
import { GenerefilterPipe } from './pipes/generefilter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { HomeComponent } from './components/home/home.component';
import { SeriesdetailComponent } from './components/seriesdetail/seriesdetail.component';
import { SelectaddComponent } from './components/selectadd/selectadd.component';
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
   observer: true,
   direction: 'horizontal',
   threshold: 50,
   spaceBetween: 5,
   slidesPerView: 1,
   centeredSlides: true,
 };
@NgModule({
  declarations: [
    // ConfirmDialogComponent,
    // AlertDialogComponent,
    //  FormDialogComponent,
    AppComponent,
    AboutangularComponent,
    MoviesComponent,
    SidebarComponent,
    SeriesComponent,
    AddmovieComponent,
    AddseriesComponent,
    NopageComponent,
    MoviedetailComponent,
    EnumToArrayPipe,
    LogindbComponent,
    UrldecodePipe,
    DeletemovieComponent,
    LoginoffComponent,
    EditmovieComponent,
    FilterPipe,
    CollecdetailComponent,
    GenerefilterPipe,
    SortPipe,
    HomeComponent,
    SeriesdetailComponent,
    SelectaddComponent,
  ],
  imports: [
    SwiperModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    AppRoutingModule,
    DemoMaterialModule,
    // RouterModule.forRoot(routes),

    HttpClientModule,
    FormsModule,

    BrowserAnimationsModule,
    ...MATERIAL,
  ],
  exports: [],
  providers: [  {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    },
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
