import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MusicService } from '../servicios/musica.service';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.page.html',
  styleUrls: ['./opciones.page.scss'],
})
export class OpcionesPage implements OnInit, OnDestroy {

  settings = {
    music: true,
    musicVolume: 0.5, // Valor inicial en la mitad
    sound: false,
    soundVolume: 0,
    notifications: false,
    darkMode: false
  };

  constructor(private navCtrl: NavController, private musicService: MusicService) { }

  ngOnInit() {
    this.loadSettings();
    this.applySettings(true); // Aplicar configuración inicial
  }

  goBack() {
    this.navCtrl.back();
  }

  resetChanges() {
    this.settings = {
      music: true,
      musicVolume: 0.5, // Restablecer el volumen a la mitad
      sound: false,
      soundVolume: 0,
      notifications: false,
      darkMode: false
    };
    this.saveSettings();
    this.applySettings(true); // Aplicar configuración inicial al resetear
  }

  openAccountSettings() {
    this.navCtrl.navigateForward('/configuracion-cuenta');
  }

  loadSettings() {
    const savedSettings = localStorage.getItem('app-settings');
    if (savedSettings) {
      this.settings = JSON.parse(savedSettings);
    }
    this.applySettings(true); // Aplicar configuración inicial si no hay ajustes guardados
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

  applySettings(initial = false) {
    if (this.settings.music || initial) {
      this.musicService.enableMusic();
    } else {
      this.musicService.disableMusic();
    }
    this.musicService.setMusicVolume(this.settings.musicVolume);
  }

  toggleMusic() {
    this.settings.music = !this.settings.music;
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
