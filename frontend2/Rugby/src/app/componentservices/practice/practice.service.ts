import { Injectable } from '@angular/core';
import {AthletePractice} from '../../classes/associations/AthletePractice';
import {Athlete} from '../../classes/athlete';

@Injectable({
  providedIn: 'root'
})
export class PracticeService {

  constructor() { }

  //Will Generify if necessary later.
  refreshArray(athletes: Athlete[], practices: AthletePractice[]) {
    debugger;
    //update the main array with the newer options
    athletes.forEach(item => {
      if(!(practices.some( p => p.athlete.id === item.id)))
        practices.push(new AthletePractice(null, item));
    });

    //remove old options from the main array (cant use forEach splice, it skips an element after splice)
    let i = 0;
    while (i < practices.length) {
      const item = practices[i];
      if (!(athletes.some(a => a.id === item.athlete.id))) practices.splice(i, 1);
      else i++;
    }
    /*
    practices.forEach(item => {
      //remove old options from the main array without removing the kept options.
      if(!(athletes.some( a => a.id === item.athlete.id)))
        practices.splice(practices.indexOf(item), 1);
    });*/
  }
}
