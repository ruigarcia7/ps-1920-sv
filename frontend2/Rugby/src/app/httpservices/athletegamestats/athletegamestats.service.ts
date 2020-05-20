import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AthleteGameStats } from '../../classes/associations/AthleteGameStats';

@Injectable({
  providedIn: 'root'
})
export class HttpAthleteGameStatsService {

  private BASE_URL = 'http://localhost:8080/athletegamestats';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private http: HttpClient) { }

  getAthleteGameStats(): Observable<AthleteGameStats[]> {
    const url = `${this.BASE_URL}/all`;
    const options = { headers: { 'Access-Control-Allow-Origin': '*' } };
    return this.http.get<AthleteGameStats[]>(url, this.httpOptions);
  }

  getAthleteGameStatsById(id: any): Observable<AthleteGameStats> {
    const url = `${this.BASE_URL}/findById/${id}`;
    return this.http.get(url, this.httpOptions);
  }

  getAthleteGameStatsByGameId(id: any): Observable<AthleteGameStats[]> {
    const url = `${this.BASE_URL}/findByGameId/${id}`;
    return this.http.get<AthleteGameStats[]>(url, this.httpOptions);
  }

  postAthleteGameStats(athleteGameStats: AthleteGameStats): Observable<any> {
    const url = `${this.BASE_URL}/post`;
    return this.http.post(url, athleteGameStats, this.httpOptions);
  }

  updateAthleteGameStats(athleteGameStats: AthleteGameStats): Observable<any> {
    const url = `${this.BASE_URL}/update`;
    return this.http.put(url, athleteGameStats, this.httpOptions);
  }
  deleteAthleteGameStats(id: any): Observable<any> {
    const url = `${this.BASE_URL}/delete/${id}`;
    return this.http.delete(url, this.httpOptions);
  }
}
