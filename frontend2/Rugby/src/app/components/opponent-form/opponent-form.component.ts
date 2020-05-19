import { Component, OnInit } from '@angular/core';
import { Opponent } from '../../classes/opponent';
import { OpponentService } from '../../httpservices/opponent/opponent.service';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-opponent-form',
  templateUrl: './opponent-form.component.html',
  styleUrls: ['./opponent-form.component.scss'],
})
export class OpponentFormComponent implements OnInit {
  opponent: Opponent;

  constructor(private opponentService: OpponentService) { }

  ngOnInit() {}

  processOpponent() {
    debugger;
    this.opponentService.postOpponent(this.opponent).subscribe( (res) => { console.log(res); });
  }
}



