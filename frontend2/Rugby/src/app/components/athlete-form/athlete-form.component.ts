import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Athlete} from '../../classes/athlete';
import {Profile} from '../../classes/profile';
import {Position} from '../../classes/position';
import { HttpAthleteService } from '../../httpservices/athlete/athlete.service';
import {HttpEnumService} from '../../httpservices/enum/enum.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {AthleteService} from '../../componentservices/athlete/athlete.service';

export class AthleteErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-athlete-form',
  templateUrl: './athlete-form.component.html',
  styleUrls: ['./athlete-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AthleteFormComponent implements OnInit {
  constructor(private httpathleteService: HttpAthleteService, private httpenumService: HttpEnumService,
              private route: ActivatedRoute, private toastController: ToastController,
              private router: Router) { }
  requiredFormControl = new FormControl('', [Validators.required]);
  matcher = new AthleteErrorStateMatcher();
  athlete: Athlete;
  profile: Profile;
  positions: Position[];

  selectOptions: any = {
    header: 'Positions'
  };

  ngOnInit() {
    this.athlete = new Athlete();
    this.profile = new Profile();
    this.getPositions();
    this.athlete.profile = this.profile;

    // check if "update" or post to set current object
    if (this.route.snapshot.paramMap.get('id')) {
      this.httpathleteService.getAthleteById(this.route.snapshot.paramMap.get('id'))
        .subscribe( item => {
          debugger;
          this.athlete = item;
          this.athlete.positions = this.athlete.positions.split(',');
        } );
    }
  }

  getPositions() {
    this.httpenumService.getPositions()
      .subscribe( position => {
        this.positions = position;
      });
  }

  processAthlete() {
    debugger;
    this.athlete.positions = this.athlete.positions.toString();
    this.athlete.profile.isAthlete = true;
    this.route.snapshot.paramMap.get('id') ?
      this.httpathleteService.updateAthlete(this.athlete).subscribe((res) => {
        this.presentToast();
      }) :
      this.httpathleteService.postAthlete(this.athlete).subscribe((res) => {
        this.presentToast();
      }) ;
  }

  navigate() {
    debugger;
    this.router.navigate(['/app/athlete']).then(res => { window.location.reload(); });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      header: 'Success',
      message: 'Athlete Submitted.',
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
      this.profile.file = reader.result.toString();
    };
    reader.readAsDataURL(file);
  }
}
