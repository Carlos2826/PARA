import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private previousUrl: string = '';

  constructor(private navCtrl: NavController) {}

  setPreviousUrl(url: string) {
    this.previousUrl = url;
  }

  getPreviousUrl(): string {
    return this.previousUrl || '/home';
  }

  goBackToPreviousPage() {
    if (this.previousUrl) {
      this.navCtrl.navigateBack(this.previousUrl);
    } else {
      this.navCtrl.navigateBack('/home');
    }
  }

  goHome() {
    this.navCtrl.navigateRoot('/home');
  }
}
