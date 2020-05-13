import { Component, OnInit } from '@angular/core';
import {NavParams, PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-practice-popover',
  templateUrl: './practice-popover.component.html',
  styleUrls: ['./practice-popover.component.scss'],
})
export class PracticePopoverComponent implements OnInit {

  constructor(public navParams: NavParams, public popoverController: PopoverController) { }

  ngOnInit() {}

  close() {
    debugger;
    this.popoverController.dismiss().then(r => console.log(r));
  }

}
