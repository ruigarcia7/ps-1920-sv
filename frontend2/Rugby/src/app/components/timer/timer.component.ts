import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})

export class TimerComponent implements OnInit {
  time: BehaviorSubject<string> = new BehaviorSubject<string>('00:00');
  timer = 0;
  interval;
  state = 'stop';

  constructor() { }

  ngOnInit() {}

  startTimer() {
    clearInterval(this.interval);
    this.state = 'playing';
    this.updateTime();
    this.interval = setInterval( () => {
      this.updateTime();
    }, 1000);
  }

  updateTime() {
    let minutes: any = this.timer / 60;
    let seconds: any = this.timer % 60;

    minutes = String('0' + Math.floor(minutes)).slice(-2);
    seconds = String('0' + Math.floor(seconds)).slice(-2);

    this.time.next(minutes + ':' + seconds);

    ++this.timer;
  }

  pauseTimer() {
    this.state = 'pause';
    clearInterval(this.interval);
  }

  resetTimer() {
    this.time.next('00:00');
    this.timer = 0;
    this.state = 'stop';
    clearInterval(this.interval);
  }

  getTimerTime() {
    debugger;
    return this.time.getValue();
  }

  getTimerMinutes() {
    return Math.floor(this.timer / 60);
  }
}
