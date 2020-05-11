import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Position } from '../../classes/position';
import { StaffType } from '../../classes/stafftype';
import { Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EnumService {
  private BASE_URL_POSITION = 'http://localhost:8080/enumerables/positions/';
  private BASE_URL_STAFFTYPE = 'http://localhost:8080/enumerables/stafftype/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private http: HttpClient) {
  }

  getPositions(): Observable<Position[]> {
    const url = `${this.BASE_URL_POSITION}all`;
    return this.http.get<Position[]>(url, this.httpOptions);
  }

  getStaffType(): Observable<StaffType[]> {
    const url = `${this.BASE_URL_STAFFTYPE}all`;
    return this.http.get<StaffType[]>(url, this.httpOptions);
  }
}
