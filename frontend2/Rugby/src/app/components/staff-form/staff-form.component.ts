import {Component, OnInit, ViewChild} from '@angular/core';
import { Staff } from '../../classes/staff';
import { Profile } from '../../classes/profile';
import { StaffType } from '../../classes/stafftype';
import { StaffService } from '../../httpservices/staff/staff.service';
import { HttpEnumService } from '../../httpservices/enum/enum.service';
import { EnumService } from '../../componentservices/enum/enum.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { StaffComponent } from '../staff/staff.component';

@Component({
  selector: 'app-staff-form',
  templateUrl: './staff-form.component.html',
  styleUrls: ['./staff-form.component.scss'],
})

export class StaffFormComponent implements OnInit {
  staff: Staff;
  profile: Profile;
  stafftype: StaffType[];
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
      this.staffService.getStaffById(this.route.snapshot.paramMap.get('id')).subscribe(item => this.staff = item);
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
    let select = this.staff.staffType.toString();
    //this.staff.staffType = this.stafftype[];
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
