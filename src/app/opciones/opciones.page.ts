import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MusicService } from '../servicios/musica.service'; // Asegúrate de que esta ruta sea correcta

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.page.html',
  styleUrls: ['./opciones.page.scss'],
})
export class OpcionesPage implements OnInit, OnDestroy {

  settings = {
    music: true, // Asegurarse de que la música esté activada por defecto
    musicVolume: 0.5, // Valor predeterminado del volumen de música
    sound: false,
    soundVolume: 0, // Valor inicial del volumen de efectos de sonido
    notifications: false,
    darkMode: false
  };

  constructor(private navCtrl: NavController, private musicService: MusicService) { }

  ngOnInit() {
    this.loadSettings();
    this.applySettings();
  }

  goBack() {
    this.navCtrl.back();
  }

  resetChanges() {
    this.settings.music = true;
    this.settings.musicVolume = 0.5;
    this.settings.sound = false;
    this.settings.soundVolume = 0;
    this.settings.notifications = false;
    this.settings.darkMode = false;
    this.saveSettings();
    this.applySettings();
  }

  openAccountSettings() {
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
    this.applySettings();
  }

  applySettings() {
    if (this.settings.music) {
      this.musicService.enableMusic();
    } else {
      this.musicService.disableMusic();
    }
    this.musicService.setMusicVolume(this.settings.musicVolume);
  }

  toggleMusic() {
    if (this.settings.music) {
      this.musicService.enableMusic();
    } else {
      this.musicService.disableMusic();
    }
    this.onSettingChange();
  }

  setMusicVolume(event: any) {
    const volume = event.detail.value;
    this.settings.musicVolume = volume;
    this.musicService.setMusicVolume(volume);
    this.onSettingChange();
  }

  toggleEffects() {
    this.settings.sound = !this.settings.sound;
    this.onSettingChange();
  }

  setEffectsVolume(event: any) {
    const volume = event.detail.value;
    this.settings.soundVolume = volume;
    this.onSettingChange();
  }
}
