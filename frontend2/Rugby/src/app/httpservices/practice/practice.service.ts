import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Practice} from '../../classes/practice';

@Injectable({
  providedIn: 'root'
})
export class HttpPracticeService {

  private BASE_URL = 'http://localhost:8080/practice';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private http: HttpClient) { }

  getPractices(): Observable<Practice[]> {
    const url = `${this.BASE_URL}/all`;
    const options = { headers: { 'Access-Control-Allow-Origin': '*' } };
    return this.http.get<Practice[]>(url, this.httpOptions);
  }

  getPracticeById(id: any): Observable<Practice> {
    const url = `${this.BASE_URL}/findById/${id}`;
    return this.http.get(url, this.httpOptions);
  }

  postPractice(practice: Practice): Observable<any> {
    const url = `${this.BASE_URL}/post`;
    debugger;
    return this.http.post(url, practice, this.httpOptions);
  }

  updatePractice(practice: Practice): Observable<any> {
    const url = `${this.BASE_URL}/update`;
    return this.http.put(url, practice, this.httpOptions);
  }

  deletePractice(id: number): Observable<any> {
    const url = `${this.BASE_URL}/delete/${id}`;
    return this.http.delete(url, this.httpOptions);
  }
}
