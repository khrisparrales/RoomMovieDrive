import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'generefilter',
})
export class GenerefilterPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    if (arg == '' || arg.length < 3) return value;
    const resultmovie = [];
    for (const iterator of value) {
      // if (iterator.movieName.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
      //    console.log(iterator.genre.indexOf('Aventura'));
      //   resultmovie.push(iterator);
      // };
      if (iterator.genre.indexOf('Aventura') > -1) {
        // console.log(iterator.genre.indexOf('Aventura'));
        resultmovie.push(iterator);
      }
    }
    return resultmovie;
  }
}
