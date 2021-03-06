import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Athlete} from '../../../app/classes/athlete';

@Injectable({
  providedIn: 'root'
})
export class HttpAthleteService {

  private BASE_URL = 'http://localhost:8080/athlete';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token',
      'Access-Control-Allow-Origin': '*'
    })
  };
  constructor(private http: HttpClient) { }

  getAthletes(): Observable<Athlete[]> {
    const url = `${this.BASE_URL}/all`;
    const options = { headers: { 'Access-Control-Allow-Origin': '*' } };
    return this.http.get<Athlete[]>(url, this.httpOptions);
  }

  getAthleteById(id: any): Observable<Athlete> {
    const url = `${this.BASE_URL}/findById/${id}`;
    return this.http.get(url, this.httpOptions);
  }

  getAthleteAttendanceInfo(id: any): Observable<any> {
    const url = `${this.BASE_URL}/${id}/attendance`;
    return this.http.get(url, this.httpOptions);
  }

  postAthlete(athlete: Athlete): Observable<any> {
    const url = `${this.BASE_URL}/post`;
    return this.http.post(url, athlete, this.httpOptions);
  }

  updateAthlete(athlete: Athlete): Observable<any> {
    const url = `${this.BASE_URL}/update`;
    return this.http.put(url, athlete, this.httpOptions);
  }

  deleteAthlete(id: number): Observable<any> {
    debugger;
    const url = `${this.BASE_URL}/delete/${id}`;
    return this.http.delete(url, this.httpOptions);
  }

}
