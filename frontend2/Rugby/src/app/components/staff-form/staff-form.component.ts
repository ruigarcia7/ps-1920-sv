import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { Staff } from '../../classes/staff';
import { Profile } from '../../classes/profile';
import { StaffType } from '../../classes/stafftype';
import { StaffService } from '../../httpservices/staff/staff.service';
import { HttpEnumService } from '../../httpservices/enum/enum.service';
import { EnumService } from '../../componentservices/enum/enum.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { StaffComponent } from '../staff/staff.component';
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";


export class StaffErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-staff-form',
  templateUrl: './staff-form.component.html',
  styleUrls: ['./staff-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class StaffFormComponent implements OnInit {
  requiredFormControl = new FormControl('', [Validators.required]);
  matcher = new StaffErrorStateMatcher();
  staff: Staff;
  profile: Profile;
  stafftype: StaffType[];

  selectOptions: any = {
    header: 'Type'
  };

  constructor( private staffService: StaffService, private httpenumService: HttpEnumService,
               private route: ActivatedRoute, private staffComponent: StaffComponent,
               private router: Router, private toastController: ToastController,
               private enumService: EnumService) { }


  ngOnInit() {
    this.staff = new Staff();
    this.profile = new Profile();
    this.staff.profile = this.profile;

    // check if "update" or post to set current object
    if (this.route.snapshot.paramMap.get('id')) {
      this.staffService.getStaffById(this.route.snapshot.paramMap.get('id'))
        .subscribe(item => {
          this.staff = item;
          this.staff.staffType = this.staff.staffType.name.toString();
        });
    }
    debugger;
    this.getTypes();
  }

  getTypes() {
    this.httpenumService.getStaffType()
      .subscribe( types => {
        debugger;
        this.stafftype = types;
      });
  }

  processStaff() {
    debugger;
    this.staff.staffType = this.enumService.getStaffByName(this.stafftype, this.staff.staffType.toString());
    this.staffService.postStaff(this.staff)
      .subscribe( (res) => {
        this.presentToast();
        //TODO: FIX THIS SHIT :D
        //this.router.navigate(['/app/staff']).then( () => { window.location.reload(); } );
        //this.staffComponent.showStaff(this.navigate.bind(this));
        /*this.staffComponent.showStaff( () => {
          debugger;
          this.router.navigate(['/app/staff']).then(res => { this.staffComponent.showStaff(null); } );
        });*/
      });
  }

  navigate() {
    debugger;
    this.router.navigate(['/app/staff']).then(res => { window.location.reload(); });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      header: 'Success',
      message: 'Staff Submitted.',
      position: 'bottom',
      duration: 5000
    });
    await toast.present().then(this.navigate.bind(this));
  }
}
