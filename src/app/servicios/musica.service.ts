import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private audio = new Audio('assets/audio/Magic Scout.mp3');
  private musicEnabled = true;

  constructor() {
    this.audio.loop = true;
    this.audio.play();
  }

  enableMusic() {
    this.musicEnabled = true;
    this.audio.play();
  }

  disableMusic() {
    this.musicEnabled = false;
    this.audio.pause();
  }

  setMusicVolume(volume: number) {
    this.audio.volume = volume;
  }

  isMusicEnabled(): boolean {
    return this.musicEnabled;
  }

  getMusicVolume(): number {
    return this.audio.volume;
  }
}
