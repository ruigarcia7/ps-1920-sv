import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

import { MenuController, Platform, ToastController } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Storage } from '@ionic/storage';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  appPages = [
    {
      title: 'Calendar',
      url: '/app/calendar',
      icon: 'calendar'
    },
    {
      title: 'Athletes',
      url: '/app/athlete',
      icon: 'people'
    },
    {
      title: 'Staff',
      url: '/app/staff',
      icon: 'people'
    },
    {
      title: 'Events',
      url: '/app/event',
      icon: 'american-football'
    },
    {
      title: 'Practices',
      url: '/app/practice',
      icon: 'barbell'
    },
    {
      title: 'Game',
      url: '/app/game',
      icon: 'baseball'
    },
    {
      title: 'Tournaments',
      url: '/app/tournament',
      icon: 'earth'
    },
    {
      title: 'Training Schedules',
      url: '/app/training-schedule',
      icon: 'fitness'
    },
    {
      title: 'Stats',
      url: '/app/stats',
      icon: 'newspaper'
    },
    {
      title: '[PH]Injuries',
      url: '/app/injury',
      icon: 'bandage'
    }
  ];
  dark = false;
  theme = new BehaviorSubject('light-theme');

  constructor(
    private menu: MenuController,
    private platform: Platform,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private swUpdate: SwUpdate,
    private toastCtrl: ToastController
  ) {
    this.initializeApp();
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  angularSwitchDark() {
    debugger;
    this.theme.next('dark-theme');
  }
}

