import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Opponent} from '../../classes/opponent';

@Injectable({
  providedIn: 'root'
})
export class OpponentService {

  private BASE_URL = 'http://localhost:8080/opponent';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private http: HttpClient) { }


  getOpponents(): Observable<Opponent[]> {
    const url = `${this.BASE_URL}/all`;
    const options = { headers: { 'Access-Control-Allow-Origin': '*' } };
    return this.http.get<Opponent[]>(url, this.httpOptions);
  }

  getOpponentById(id: number): Observable<Opponent> {
    const url = `${this.BASE_URL}/findById/${id}`;
    return this.http.get(url, this.httpOptions);
  }

  postOpponent(opponent: Opponent): Observable<any> {
    const url = `${this.BASE_URL}/post`;
    return this.http.post(url, opponent, this.httpOptions);
  }

  updateOpponent(opponent: Opponent): Observable<any> {
    const url = `${this.BASE_URL}/update`;
    return this.http.put(url, opponent, this.httpOptions);
  }
  deleteOpponent(id: number): Observable<any> {
    const url = `${this.BASE_URL}/delete/${id}`;
    return this.http.delete(url, this.httpOptions);
  }

}
