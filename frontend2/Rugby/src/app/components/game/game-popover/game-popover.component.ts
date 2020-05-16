import { Component, OnInit } from '@angular/core';
import {NavParams, PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-game-popover',
  templateUrl: './game-popover.component.html',
  styleUrls: ['./game-popover.component.scss'],
})
export class GamePopoverComponent implements OnInit {

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
