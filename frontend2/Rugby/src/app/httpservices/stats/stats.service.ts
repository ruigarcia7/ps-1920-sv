import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Stats} from '../../classes/stats';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  private BASE_URL = 'http://localhost:8080/stats';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private http: HttpClient) { }

  getStats(): Observable<Stats[]> {
    const url = `${this.BASE_URL}/all`;
    const options = { headers: { 'Access-Control-Allow-Origin': '*' } };
    return this.http.get<Stats[]>(url, this.httpOptions);
  }

  getStatsById(id: number): Observable<Stats> {
    const url = `${this.BASE_URL}/findById/${id}`;
    return this.http.get(url, this.httpOptions);
  }

  postStats(stats: Stats): Observable<any> {
    const url = `${this.BASE_URL}/post`;
    return this.http.post(url, stats, this.httpOptions);
  }

  updateStats(stats: Stats): Observable<any> {
    const url = `${this.BASE_URL}/update`;
    return this.http.put(url, stats, this.httpOptions);
  }
  deleteStats(id: number): Observable<any> {
    const url = `${this.BASE_URL}/delete/${id}`;
    return this.http.delete(url, this.httpOptions);
  }
}
