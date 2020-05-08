import { Component, OnInit } from '@angular/core';
import { EventService } from '../../httpservices/event.service';
import { Profile } from '../../classes/profile';

@Component({
  selector: 'app-athlete-profile',
  templateUrl: './athlete-profile.component.html',
  styleUrls: ['./athlete-profile.component.scss'],
})
export class AthleteProfileComponent implements OnInit {
  profile: Profile;
  constructor(private eventService: EventService) { }

  ngOnInit() {this.showProfile(); }

  showProfile() {
    this.eventService.getAthlete(2)
      .subscribe(athlete => {
        this.profile = athlete.profile;
        debugger;
        console.log('athlete found ' + athlete);
      });
  }
}
