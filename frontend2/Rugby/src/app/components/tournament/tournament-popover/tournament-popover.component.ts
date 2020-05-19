import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-tournament-popover',
  templateUrl: './tournament-popover.component.html',
  styleUrls: ['./tournament-popover.component.scss'],
})
export class TournamentPopoverComponent implements OnInit {

  constructor(public navParams: NavParams, private popoverController: PopoverController) {
    this.navParams.get('games');
    debugger;
  }

  ngOnInit() {}

  close() {
    debugger;
    this.popoverController.dismiss().then(r => console.log(r));
  }

}
