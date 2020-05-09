import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Tournament} from '../../classes/tournament';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  private BASE_URL = 'http://localhost:8080/game';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private http: HttpClient) {
  }

  getTournaments(): Observable<Tournament[]> {
    const url = `${this.BASE_URL}/all`;
    const options = {headers: {'Access-Control-Allow-Origin': '*'}};
    return this.http.get<Tournament[]>(url, this.httpOptions);
  }

  getTournamentById(id: number): Observable<Tournament> {
    const url = `${this.BASE_URL}/findById/${id}`;
    return this.http.get(url, this.httpOptions);
  }

  postTournament(tournament: Tournament): Observable<any> {
    const url = `${this.BASE_URL}/post`;
    return this.http.post(url, tournament, this.httpOptions);
  }

  updateTournament(tournament: Tournament): Observable<any> {
    const url = `${this.BASE_URL}/update`;
    return this.http.put(url, tournament, this.httpOptions);
  }

  deleteTournament(id: number): Observable<any> {
    const url = `${this.BASE_URL}/delete/${id}`;
    return this.http.delete(url, this.httpOptions);
  }
}
