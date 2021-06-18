import { Pipe, PipeTransform } from '@angular/core';
import { MoviesRootObject } from "../interfaces/movies.model";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

//   transform(items: MoviesRootObject[], filtermovie: string): any 
//   {
//     console.log(filtermovie)
//      const resultmovie=[];
// items.forEach(element => {
// console.log(element.movieName.indexOf("sonic"));
 
//   console.log(element.movieName);
// });

//      //  for ( const movie of items) {

//   //  }
//     // if (movie.movieName.indexOf(filtermovie) > -1) {
//     //   console.log('sip');
//     // }
//   //  console.log(items[2].movieName);
//     //    console.log(items[2].name);
// //  if (items && items.length) {
// //       return items.filter(item => {
// //         if (
// //           filtermovie &&
// //           item.name.indexOf(filtermovie.toLowerCase()) === -1
// //         ) {
// //           return false;
// //         }
// //         return true;
// //       });
// //     } else {
// //       return items;
// //     }
//   // {
//   //  const resultmovie=[];
//   //  for ( const movie of value) {
//   //   if (movie.movieName.indexOf(filtermovie) > -1) {
//   //     console.log('sip');
//   //   }
     
//   //  }
   
//   //   return null;
//   // }


//   }

transform(value:any,arg:any):any{
  if(arg==''||arg.length<3) return value;
  const resultmovie=[];
  for  (const iterator of value) {
    if (iterator.movieName.toLowerCase().indexOf(arg.toLowerCase()) > -1) {     
      resultmovie.push(iterator);
    };

  };
return resultmovie;
}
}