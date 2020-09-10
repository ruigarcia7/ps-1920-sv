import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AthleteInjury} from '../../classes/associations/athleteinjury';

@Injectable({
  providedIn: 'root'
})
export class AthleteInjuryService {

  private BASE_URL = 'http://localhost:8080/athleteinjury';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private http: HttpClient) { }

  getAthleteInjuries(): Observable<AthleteInjury[]> {
    const url = `${this.BASE_URL}/all`;
    const options = { headers: { 'Access-Control-Allow-Origin': '*' } };
    return this.http.get<AthleteInjury[]>(url, this.httpOptions);
  }

  getAthleteInjuryById(id: any): Observable<AthleteInjury> {
    const url = `${this.BASE_URL}/findById/${id}`;
    return this.http.get(url, this.httpOptions);
  }

  postAthleteInjury(athleteInjury: AthleteInjury): Observable<any> {
    const url = `${this.BASE_URL}/post`;
    return this.http.post(url, athleteInjury, this.httpOptions);
  }

  updateAthleteInjury(athleteInjury: AthleteInjury): Observable<any> {
    const url = `${this.BASE_URL}/update`;
    return this.http.put(url, athleteInjury, this.httpOptions);
  }
  deleteAthleteInjury(id: number): Observable<any> {
    const url = `${this.BASE_URL}/delete/${id}`;
    return this.http.delete(url, this.httpOptions);
  }
}
