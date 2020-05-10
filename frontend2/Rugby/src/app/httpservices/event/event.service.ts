import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from '../../classes/event';
import { Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EventService {
  private BASE_URL = 'http://localhost:8080/event/';
  private options = { headers: { 'Access-Control-Allow-Origin': '*' } };

  constructor(private http: HttpClient) {
  }

  getEvents(): Observable<Event[]> {
    const url = `${this.BASE_URL}all`;
    return this.http.get<Event[]>(url, this.options);
  }
}
