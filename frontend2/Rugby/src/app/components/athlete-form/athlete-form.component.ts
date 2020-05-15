import { Component, OnInit } from '@angular/core';
import { Athlete } from '../../classes/athlete';
import { Profile } from '../../classes/profile';
import { Position } from '../../classes/position';
import { AthleteService } from '../../httpservices/athlete/athlete.service';
import { EnumService } from '../../httpservices/enum/enum.service';
import { FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import {ActivatedRoute} from '@angular/router';

export class AthleteErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-athlete-form',
  templateUrl: './athlete-form.component.html',
  styleUrls: ['./athlete-form.component.scss'],
})

export class AthleteFormComponent implements OnInit {
  emailFormControl = new FormControl ('', [Validators.email]);
  matcher = new AthleteErrorStateMatcher();
  athlete: Athlete;
  profile: Profile;
  positions: Position[];
  constructor(private athleteService: AthleteService, private enumService: EnumService,  private route: ActivatedRoute) { }

  ngOnInit() {
    /*if(path == 0)
      this.athlete = new;
    else
      this.athlete = fetch();
*/
    this.athlete = new Athlete();
    this.profile = new Profile();
    this.getPositions();
    this.athlete.profile = this.profile;
    if (this.route.snapshot.paramMap.get('id')) {
      this.athleteService.getAthleteById(this.route.snapshot.paramMap.get('id')).subscribe( item => this.athlete = item );
    }
  }

  getPositions() {
    this.enumService.getPositions()
      .subscribe( position => {
        this.positions = position;
      });
  }

  processAthlete() {
    this.athlete.positions = this.athlete.positions.toString();
    this.athlete.profile.isAthlete = true;
    debugger;
    this.athleteService.postAthlete(this.athlete).subscribe( (res) => { console.log(res); });
  }
}
