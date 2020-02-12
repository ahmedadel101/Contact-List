import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform( contact:any[], letter: string): any {
    if (letter == undefined ) {
      return contact;
    }
    
    return contact.filter(( contact ) => {

      return contact.firstName.toLowerCase().includes(letter.toLowerCase());
       

    });
  }

}
