import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TrainingSchedule} from '../../classes/trainingschedule';

@Injectable({
  providedIn: 'root'
})
export class TrainingScheduleService {

  private BASE_URL = 'http://localhost:8080/schedule';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private http: HttpClient) { }

  getTrainingSchedules(): Observable<TrainingSchedule[]> {
    const url = `${this.BASE_URL}/all`;
    const options = { headers: { 'Access-Control-Allow-Origin': '*' } };
    return this.http.get<TrainingSchedule[]>(url, this.httpOptions);
  }

  getTrainingScheduleById(id: number): Observable<TrainingSchedule> {
    const url = `${this.BASE_URL}/findById/${id}`;
    return this.http.get(url, this.httpOptions);
  }

  postTrainingSchedule(trainingSchedule: TrainingSchedule): Observable<any> {
    const url = `${this.BASE_URL}/post`;
    return this.http.post(url, trainingSchedule, this.httpOptions);
  }

  updateTrainingSchedule(trainingSchedule: TrainingSchedule): Observable<any> {
    const url = `${this.BASE_URL}/update`;
    return this.http.put(url, trainingSchedule, this.httpOptions);
  }

  deleteTrainingSchedule(id: number): Observable<any> {
    const url = `${this.BASE_URL}/delete/${id}`;
    return this.http.delete(url, this.httpOptions);
  }

}
