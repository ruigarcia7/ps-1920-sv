import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from '../classes/event';
import { Observable, throwError} from 'rxjs';
import { catchError , retry } from 'rxjs/operators';
import {Athlete} from '../classes/athlete';
import {validateOptionsWithSchema} from '@angular-devkit/schematics/tools';

@Injectable({
  providedIn: 'root'
})

export class EventService {
  private eventUrl = 'http://localhost:8080/event/';
  headers: Headers;

  constructor(private http: HttpClient) {
  }

  getEvents(): Observable<Event[]> {
    const url = `${this.eventUrl}all`;
    const options = { headers: { 'Access-Control-Allow-Origin': '*' } };
    return this.http.get<Event[]>(url, options);
  }

  getAthletes() {
    const url = 'http://localhost:8080/athlete/all';
    const options = { headers: { 'Access-Control-Allow-Origin': '*' } };
    return this.http.get<Athlete[]>(url, options);
  }
}
