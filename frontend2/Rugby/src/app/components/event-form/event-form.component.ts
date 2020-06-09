import { Component, OnInit } from '@angular/core';
import { Event } from '../../classes/event';
import { Profile } from '../../classes/profile';
import { EventService } from '../../httpservices/event/event.service';
import { ProfileService } from '../../httpservices/profile/profile.service';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastController} from '@ionic/angular';


export class EventErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss'],
})
export class EventFormComponent implements OnInit {
  requiredFormControl = new FormControl('', [Validators.required]);
  matcher = new EventErrorStateMatcher();
  event: Event;
  profiles: Profile[];
  all: boolean;

  constructor(private eventService: EventService, private profileService: ProfileService,
              private toastController: ToastController, private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.event = new Event();
    this.getProfiles();

    // check if "update" or post to set current object
    if (this.route.snapshot.paramMap.get('id')) {
      this.eventService.getEventsById(this.route.snapshot.paramMap.get('id')).subscribe(item => {
        this.event = item;
      });
    }
  }

  getProfiles() {
    this.profileService.getProfiles()
      .subscribe( profiles => {
        this.profiles = profiles;
      });
  }

  processEvent() {
    this.eventService.postEvent(this.event).subscribe( (res) => {
      console.log(res);
      this.presentToast();
    });
  }

  navigate() {
    // TODO: fix refresh
    this.router.navigate(['/app/event']).then(res => {  window.location.reload(); });
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

  toggleAll() {
    return this.all ? this.event.profiles = this.profiles : this.event.profiles = [];
  }
}
