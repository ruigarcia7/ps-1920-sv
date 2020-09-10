import { Injectable } from '@angular/core';
import {ActiveRoster} from '../../classes/associations/ActiveRoster';
import {Athlete} from '../../classes/athlete';


@Injectable({
  providedIn: 'root'
})

export class RosterService {

  populate(selected: any, ar: ActiveRoster[]) {
    debugger;
    ar.forEach(item => {
      selected.forEach(s => {
        if ( item.number === s.position.id) s.value = item.athlete;
      });
    });
    return selected;
  }

  clean(selected: any) {
    return selected.filter( item => item.value !== '');
  }

  verify(selected: any) {
    debugger;
    const unique = [...new Map(selected.map(item => [item.value.id, item])).values()];
    return unique.length === selected.length;
  }

  createRoster(selected: any, id: any) {
    const roster: ActiveRoster[] = [];
    selected.forEach(item => {
      roster.push(new ActiveRoster(null, item.value, id, item.position.id));
    });
    return roster;
  }
}
