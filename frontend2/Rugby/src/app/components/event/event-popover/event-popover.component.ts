import { Component, OnInit } from '@angular/core';
import {NavParams, PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-event-popover',
  templateUrl: './event-popover.component.html',
  styleUrls: ['./event-popover.component.scss'],
})
export class EventPopoverComponent implements OnInit {

  constructor(public navParams: NavParams, public popoverController: PopoverController) {
    this.navParams.get('profiles');
    debugger;
  }

  ngOnInit() {}

  close() {
    debugger;
    this.popoverController.dismiss().then(r => console.log(r));
  }

}
