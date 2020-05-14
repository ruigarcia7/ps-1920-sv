import { Component, OnInit } from '@angular/core';
import { Event } from '../../classes/event';
import { Profile } from '../../classes/profile';
import { EventService } from '../../httpservices/event/event.service';
import { ProfileService } from '../../httpservices/profile/profile.service';
import { FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss'],
})
export class EventFormComponent implements OnInit {
  event: Event;
  profiles: Profile[];

  constructor(private eventService: EventService, private profileService: ProfileService) { }

  ngOnInit() {
    this.event = new Event();
    this.getProfiles();
  }

  getProfiles() {
    this.profileService.getProfiles()
      .subscribe( profiles => {
        this.profiles = profiles;
      });
  }

  processEvent() {
    debugger;
    this.eventService.postEvent(this.event).subscribe( (res) => { console.log(res); });
  }

}
