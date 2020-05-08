import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Athlete} from '../../../app/classes/athlete';

@Injectable({
  providedIn: 'root'
})
export class AthleteService {

  private BASE_URL = 'http://localhost:8080/athlete';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token',
      'Access-Control-Allow-Origin': '*'
    })
  };
  private options = { headers: { 'Access-Control-Allow-Origin': '*' } };
  constructor(private http: HttpClient) { }

  getAthletes(): Observable<Athlete[]> {
    const url = `${this.BASE_URL}/all`;
    const options = { headers: { 'Access-Control-Allow-Origin': '*' } };
    return this.http.get<Athlete[]>(url, this.options);
  }

  getAthletesById(id: number): Observable<Athlete> {
    const url = `${this.BASE_URL}/findById/${id}`;
    return this.http.get(url, this.httpOptions);
  }

  postAthlete(athlete: Athlete): Observable<any> {
    const url = `${this.BASE_URL}/post`;
    return this.http.post(this.BASE_URL, athlete, this.httpOptions);
  }
}
