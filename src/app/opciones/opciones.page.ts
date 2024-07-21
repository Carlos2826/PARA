import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.page.html',
  styleUrls: ['./opciones.page.scss'],
})
export class OpcionesPage implements OnInit {

  settings = {
    music: false,
    sound: false,
    notifications: false,
    darkMode: false
  };

  originalSettings = { ...this.settings };

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.loadSettings();
  }

  goBack() {
    this.navCtrl.back();
  }

  resetChanges() {
    this.settings = { ...this.originalSettings };
  }

  openAccountSettings() {
    // Aquí puedes agregar la lógica para abrir la configuración de la cuenta
    this.navCtrl.navigateForward('/configuracion-cuenta');
  }

  loadSettings() {
    const savedSettings = localStorage.getItem('app-settings');
    if (savedSettings) {
      this.settings = JSON.parse(savedSettings);
      this.originalSettings = { ...this.settings };
    }
  }

  saveSettings() {
    localStorage.setItem('app-settings', JSON.stringify(this.settings));
  }

  ngOnDestroy() {
    this.saveSettings();
  }
}
