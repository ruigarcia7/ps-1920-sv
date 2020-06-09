import { Injectable } from '@angular/core';
import {Athlete} from '../../classes/athlete';

@Injectable({
  providedIn: 'root'
})
export class AthleteService {

  //TODO: Change this from a foreach if true push to a filter.
  getAthletesByPosition(athletes: Athlete[], position: string) {
    const container: Athlete[] = [];
    athletes.forEach( athlete => {
      if (athlete.positions.includes(position)) container.push(athlete);
    });
    return container;
  }
}
