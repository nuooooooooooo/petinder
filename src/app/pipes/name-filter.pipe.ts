import {Pipe, PipeTransform} from '@angular/core';
import {Pet} from "../model/pet";

@Pipe({
  name: 'nameFilter',
  standalone: true
})
export class NameFilterPipe implements PipeTransform {

  transform(pets: Pet[], filter: string): Pet[] {
    // TODO add null checks
    if (pets == undefined || filter == undefined) return pets;
    return pets.filter(pet => pet.name.toLowerCase().includes(filter.toLowerCase()));
  }

}
