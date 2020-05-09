import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Game} from '../../classes/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private BASE_URL = 'http://localhost:8080/game';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private http: HttpClient) { }

  getGames(): Observable<Game[]> {
    const url = `${this.BASE_URL}/all`;
    const options = { headers: { 'Access-Control-Allow-Origin': '*' } };
    return this.http.get<Game[]>(url, this.httpOptions);
  }

  getGameById(id: number): Observable<Game> {
    const url = `${this.BASE_URL}/findById/${id}`;
    return this.http.get(url, this.httpOptions);
  }

  postGame(game: Game): Observable<any> {
    const url = `${this.BASE_URL}/post`;
    return this.http.post(url, game, this.httpOptions);
  }

  updateGame(game: Game): Observable<any> {
    const url = `${this.BASE_URL}/update`;
    return this.http.put(url, game, this.httpOptions);
  }
  deleteGame(id: number): Observable<any> {
    const url = `${this.BASE_URL}/delete/${id}`;
    return this.http.delete(url, this.httpOptions);
  }
}
