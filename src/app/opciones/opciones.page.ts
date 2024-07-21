import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.page.html',
  styleUrls: ['./opciones.page.scss'],
})
export class OpcionesPage implements OnInit, OnDestroy {

  settings = {
    music: false,
    musicVolume: 0, // Valor inicial del volumen de música
    sound: false,
    soundVolume: 0, // Valor inicial del volumen de efectos de sonido
    notifications: false,
    darkMode: false
  };

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.loadSettings();
  }

  goBack() {
    this.navCtrl.back();
  }

  resetChanges() {
    this.settings = {
      music: false,
      musicVolume: 0, // Restablecer el volumen de música a 0
      sound: false,
      soundVolume: 0, // Restablecer el volumen de efectos de sonido a 0
      notifications: false,
      darkMode: false
    };
    this.saveSettings(); // Guardar los ajustes restablecidos
  }

  openAccountSettings() {
    // Aquí puedes agregar la lógica para abrir la configuración de la cuenta
    this.navCtrl.navigateForward('/configuracion-cuenta');
  }

  loadSettings() {
    const savedSettings = localStorage.getItem('app-settings');
    if (savedSettings) {
      this.settings = JSON.parse(savedSettings);
    }
  }

  saveSettings() {
    localStorage.setItem('app-settings', JSON.stringify(this.settings));
  }

  ngOnDestroy() {
    this.saveSettings();
  }

  onSettingChange() {
    this.saveSettings();
  }
}
