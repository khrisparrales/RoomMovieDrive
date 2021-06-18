import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    //   alert("este es el valor: "+arg);
    value.sort((a: any, b: any) => {
      if (a[arg] > b[arg]) {
        return -1;
      } else if (a[arg] < b[arg]) {
        return 1;
      } else {
        return 0;
      }
    });
    return value;
  }
}
