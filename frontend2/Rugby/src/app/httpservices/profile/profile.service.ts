import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Profile} from '../../classes/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private BASE_URL = 'http://localhost:8080/profile';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private http: HttpClient) { }

  getProfiles(): Observable<Profile[]> {
    const url = `${this.BASE_URL}/all`;
    const options = { headers: { 'Access-Control-Allow-Origin': '*' } };
    return this.http.get<Profile[]>(url, this.httpOptions);
  }

  getProfileById(id: number): Observable<Profile> {
    const url = `${this.BASE_URL}/findById/${id}`;
    return this.http.get(url, this.httpOptions);
  }

  postProfile(profile: Profile): Observable<any> {
    const url = `${this.BASE_URL}/post`;
    return this.http.post(url, profile, this.httpOptions);
  }

  updateProfile(profile: Profile): Observable<any> {
    const url = `${this.BASE_URL}/update`;
    return this.http.put(url, profile, this.httpOptions);
  }
  deleteProfile(id: number): Observable<any> {
    const url = `${this.BASE_URL}/delete/${id}`;
    return this.http.delete(url, this.httpOptions);
  }
}
