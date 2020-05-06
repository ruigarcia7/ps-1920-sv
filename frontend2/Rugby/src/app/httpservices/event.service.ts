import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from '../classes/event';
import { Observable, throwError} from 'rxjs';
import { catchError , retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class EventService {
  private eventUrl = 'localhost:8080/event/';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]> {
    const url = `${this.eventUrl}/all`;
    return this.http.get<Event[]>(url);
  }
}
