import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Event } from '../../classes/event';
import { Observable, throwError} from 'rxjs';
import {Athlete} from '../../classes/athlete';

@Injectable({
  providedIn: 'root'
})

export class EventService {
  private BASE_URL = 'http://localhost:8080/event/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private http: HttpClient) {
  }

  getEvents(): Observable<Event[]> {
    const url = `${this.BASE_URL}all`;
    return this.http.get<Event[]>(url, this.httpOptions);
  }
  getEventsById(id: number) {
    const url = `${this.BASE_URL}/findById/${id}`;
    return this.http.get(url, this.httpOptions);
  }

  postEvent(event: Event): Observable<Event> {
    const url = `${this.BASE_URL}/post`;
    return this.http.post(url, event, this.httpOptions);
  }

  updateEvent(event: Event): Observable<any> {
    const url = `${this.BASE_URL}/update`;
    return this.http.put(url, event, this.httpOptions);
  }

  deleteEvent(id: number): Observable<any> {
    const url = `${this.BASE_URL}/delete/${id}`;
    return this.http.delete(url, this.httpOptions);
}
