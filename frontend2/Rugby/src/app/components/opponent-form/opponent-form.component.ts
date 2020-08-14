import { Component, OnInit } from '@angular/core';
import { Opponent } from '../../classes/opponent';
import { OpponentService } from '../../httpservices/opponent/opponent.service';
import { ToastController} from '@ionic/angular';
import {Router} from '@angular/router';
import {ErrorStateMatcher} from "@angular/material/core";
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";

export class OpponentErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-opponent-form',
  templateUrl: './opponent-form.component.html',
  styleUrls: ['./opponent-form.component.scss'],
})
export class OpponentFormComponent implements OnInit {
  requiredFormControl = new FormControl('', [Validators.required]);
  matcher = new OpponentErrorStateMatcher();
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


  onFileChanged(event) {
    /**/
    debugger;
    const file = event.target.files[0];
    const reader: FileReader = new FileReader();
    reader.onloadend = (e) => {
      this.opponent.file = reader.result.toString();
    };
    reader.readAsDataURL(file);
  }
}



