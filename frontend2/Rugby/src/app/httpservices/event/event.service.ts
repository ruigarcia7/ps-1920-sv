import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from '@classes/event';
import { Observable, throwError} from 'rxjs';
import { catchError , retry } from 'rxjs/operators';
import {Athlete} from '@classes/athlete';
import {validateOptionsWithSchema} from '@angular-devkit/schematics/tools';

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

  getAthletes() {
    const url = 'http://localhost:8080/athlete/all';
    return this.http.get<Athlete[]>(url, this.options);
  }

  getAthlete(id: any) {
    const url = `http://localhost:8080/athlete/findById/${id}`;
    const options = { headers: { 'Access-Control-Allow-Origin': '*' } };
    return this.http.get<Athlete>(url, options);
  }
}
