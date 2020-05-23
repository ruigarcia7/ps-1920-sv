import { Component, OnInit } from '@angular/core';
import { Event } from '../../classes/event';
import { Profile } from '../../classes/profile';
import { EventService } from '../../httpservices/event/event.service';
import { ProfileService } from '../../httpservices/profile/profile.service';
import { FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import {Router} from "@angular/router";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss'],
})
export class EventFormComponent implements OnInit {
  event: Event;
  profiles: Profile[];

  constructor(private eventService: EventService, private profileService: ProfileService,
              private toastController: ToastController, private router: Router) { }

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
    this.eventService.postEvent(this.event).subscribe( (res) => {
      console.log(res);
      this.presentToast();
    });
  }

  navigate() {
    debugger;
    this.router.navigate(['/app/event']).then(res => { window.location.reload(); });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      header: 'Success',
      message: 'Event Submitted.',
      position: 'bottom',
      duration: 5000
    });
    await toast.present().then(this.navigate.bind(this));
  }

}
