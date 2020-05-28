import { Injectable } from '@angular/core';
import { StaffType } from '../../classes/stafftype';

@Injectable({
  providedIn: 'root'
})
export class EnumService {

  constructor() { }

  getStaffByName(items: StaffType[], name: string) {
    return items.find( item => item.name === name);
  }
}
