import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { CommonModule} from '@angular/common';
import { MaterialModule } from './material-modules';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
/*---*/

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    MatTableModule,
    MaterialModule,
    MatTableModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
declarations: [AppComponent],
providers: [InAppBrowser, SplashScreen, StatusBar,
  { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: 'fill'}],
bootstrap: [ AppComponent ]
})

export class AppModule { }
