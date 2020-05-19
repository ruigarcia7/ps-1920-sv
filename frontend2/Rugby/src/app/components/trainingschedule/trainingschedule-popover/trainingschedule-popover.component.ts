import { Component, OnInit } from '@angular/core';
import {NavParams, PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-trainingschedule-popover',
  templateUrl: './trainingschedule-popover.component.html',
  styleUrls: ['./trainingschedule-popover.component.scss'],
})
export class TrainingschedulePopoverComponent implements OnInit {

  constructor(public navParams: NavParams, public popoverController: PopoverController) {
    this.navParams.get('athletes');
    debugger;
  }

  ngOnInit() {}

  close() {
    debugger;
    this.popoverController.dismiss().then(r => console.log(r));
  }

}
