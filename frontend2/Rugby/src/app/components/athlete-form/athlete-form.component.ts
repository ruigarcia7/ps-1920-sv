import { Component, OnInit } from '@angular/core';
import { Athlete } from '../../classes/athlete';
import {Profile} from '../../classes/profile';

@Component({
  selector: 'app-athlete-form',
  templateUrl: './athlete-form.component.html',
  styleUrls: ['./athlete-form.component.scss'],
})
export class AthleteFormComponent implements OnInit {
  athlete: Athlete;
  profile: Profile;
  constructor() { }

  ngOnInit() {
    this.athlete = new Athlete();
    this.profile = new Profile();
    this.athlete.profile = this.profile;
    debugger;
  }

  processAthlete() {
    const a = this.athlete;
    debugger;
  }

}