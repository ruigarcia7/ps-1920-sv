import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injury} from '../../classes/injury';

@Injectable({
  providedIn: 'root'
})
export class InjuryService {

  private BASE_URL = 'http://localhost:8080/injury';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private http: HttpClient) { }

  getInjuries(): Observable<Injury[]> {
    const url = `${this.BASE_URL}/all`;
    const options = { headers: { 'Access-Control-Allow-Origin': '*' } };
    return this.http.get<Injury[]>(url, this.httpOptions);
  }

  getInjuryById(id: any): Observable<Injury> {
    const url = `${this.BASE_URL}/findById/${id}`;
    return this.http.get(url, this.httpOptions);
  }

  postInjury(injury: Injury): Observable<any> {
    const url = `${this.BASE_URL}/post`;
    return this.http.post(url, injury, this.httpOptions);
  }

  updateInjury(injury: Injury): Observable<any> {
    const url = `${this.BASE_URL}/update`;
    return this.http.put(url, injury, this.httpOptions);
  }
  deleteInjury(id: number): Observable<any> {
    const url = `${this.BASE_URL}/delete/${id}`;
    return this.http.delete(url, this.httpOptions);
  }
}

