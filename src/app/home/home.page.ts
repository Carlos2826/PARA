import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationService } from '../servicios/navigation.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: string | null = null;

  constructor(private navCtrl: NavController, private navigationService: NavigationService) {}

  ngOnInit() {
    this.username = localStorage.getItem('username');
  }

  goHome() {
    this.navigationService.goHome();
  }

  navigateToInicioSesion() {
    this.navCtrl.navigateForward('/inicio-sesion');
  }

  navigateToSeleccionTema() {
    this.triggerIconHeartbeat('alert-outline', '/seleccion-tema');
  }

  navigateToSeleccionJuego() {
    this.triggerIconHeartbeat('game-controller-outline', '/seleccion-juego');
  }

  navigateToOpciones() {
    this.triggerIconHeartbeat('settings-outline', '/opciones');
  }

  navigateToRanking() {
    this.triggerIconHeartbeat('ranking-outline', '/ranking-global');
  }

  navigateToAyuda() {
    this.navCtrl.navigateForward('/ayuda');
  }

  triggerIconHeartbeat(iconName: string, targetPage: string) {
    const iconElement = document.createElement('ion-icon');
    iconElement.name = iconName;
    iconElement.className = 'icon-heartbeat';
    document.body.appendChild(iconElement);

    setTimeout(() => {
      this.navCtrl.navigateForward(targetPage).then(() => {
        document.body.removeChild(iconElement);
      });
    }, 2500); // Ajuste del tiempo de la animación en ms
  }

  logout() {
    localStorage.removeItem('username');
    this.username = null;
    this.navCtrl.navigateForward('/home');
  }
}
