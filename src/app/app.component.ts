import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { MusicService } from './servicios/musica.service'; // Importar el servicio de música

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform, private musicService: MusicService) { // Inyectar el servicio de música
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.musicService.enableMusic(); // Asegurarse de que la música esté habilitada al iniciar la aplicación
    });
  }
}
