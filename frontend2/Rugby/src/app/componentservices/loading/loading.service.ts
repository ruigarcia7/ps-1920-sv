import { Injectable } from '@angular/core';
import {LoadingController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  currentLoading = null;

  constructor(public loadingController: LoadingController) { }

  async present(message: string) {
    if (this.currentLoading != null) {
      this.currentLoading.dismiss();
    }

    this.currentLoading = await this.loadingController.create({
      message: message ? message : '',
      duration: 2000
    });

    return await this.currentLoading.present();

    /*return await this.loadingController.create({
      message: message ? message : ''
    }).then(p => {
      p.present().then(() => {
        if (!this.isLoading) p.dismiss().then();
      });
    });*/
  }

  async dismiss() {
    /*while ( await this.loadingController.getTop() !== undefined) {
      this.isLoading = false;
      return await this.loadingController.dismiss().then();
    }*/
    debugger;
    if (this.currentLoading != null) {
      await this.loadingController.dismiss();
      this.currentLoading = null;
    }
    return;
  }
}

