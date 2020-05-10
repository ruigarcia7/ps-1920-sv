import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Staff} from '../../../app/classes/staff';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  private BASE_URL = 'http://localhost:8080/staff';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token',
      'Access-Control-Allow-Origin': '*'
    })
  };
  private options = { headers: { 'Access-Control-Allow-Origin': '*' } };
  constructor(private http: HttpClient) { }

  getStaff(): Observable<Staff[]> {
    const url = `${this.BASE_URL}/all`;
    const options = { headers: { 'Access-Control-Allow-Origin': '*' } };
    return this.http.get<Staff[]>(url, this.options);
  }

  getStaffById(id: any): Observable<Staff> {
    const url = `${this.BASE_URL}/findById/${id}`;
    return this.http.get(url, this.httpOptions);
  }

  postStaff(staff: Staff): Observable<any> {
    const url = `${this.BASE_URL}/post`;
    return this.http.post(this.BASE_URL, staff, this.httpOptions);
  }
}
