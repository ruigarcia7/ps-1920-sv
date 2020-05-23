import { Component, OnInit } from '@angular/core';
import { Opponent } from '../../classes/opponent';
import { OpponentService } from '../../httpservices/opponent/opponent.service';
import { ToastController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-opponent-form',
  templateUrl: './opponent-form.component.html',
  styleUrls: ['./opponent-form.component.scss'],
})
export class OpponentFormComponent implements OnInit {
  opponent: Opponent;

  constructor(private opponentService: OpponentService, private toastController: ToastController,
              private router: Router) { }

  ngOnInit() { this.opponent = new Opponent(); }

  processOpponent() {
    debugger;
    this.opponentService.postOpponent(this.opponent).subscribe( (res) => {
      console.log(res);
      this.presentToast();
    });
  }

  navigate() {
    debugger;
    this.router.navigate(['/app/game']).then(res => {});
  }

  async presentToast() {
    const toast = await this.toastController.create({
      header: 'Success',
      message: 'Opponent Submitted.',
      position: 'bottom',
      duration: 5000
    });
    await toast.present().then(this.navigate.bind(this));
  }
}



