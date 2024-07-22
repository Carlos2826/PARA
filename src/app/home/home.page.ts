import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { NavigationService } from '../servicios/navigation.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  username: string | null = null;
  currentUser: any | null = null;
  isAdmin: boolean = false;

  constructor(
    private navCtrl: NavController,
    private navigationService: NavigationService,
    private menuCtrl: MenuController
  ) {}

  ngOnInit() {
    this.updateUserInfo();
  }

  ionViewWillEnter() {
    this.updateUserInfo();
  }

  updateUserInfo() {
    const user = localStorage.getItem('currentUser');
    console.log('User from localStorage:', user); // Añadir esta línea para depuración
    if (user) {
      this.currentUser = JSON.parse(user);
      console.log('Parsed currentUser:', this.currentUser); // Añadir esta línea para depuración
      this.username = this.currentUser.username;
      // Asegúrate de que admin se compara correctamente como número
      this.isAdmin = Number(this.currentUser.admin) === 1;
      console.log('Is Admin:', this.isAdmin); // Añadir esta línea para depuración
    } else {
      console.log('No user found in localStorage'); // Añadir esta línea para depuración
    }
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
    localStorage.removeItem('currentUser');
    this.username = null;
    this.isAdmin = false;
    this.navCtrl.navigateForward('/home');
    this.menuCtrl.close();
  }

  editarPerfil() {
    this.navCtrl.navigateForward('/editar-perfil');
  }

  cambiarContrasena() {
    this.navCtrl.navigateForward('/cambiar-contrasena');
  }

  configuracionAdmin() {
    this.navCtrl.navigateForward('/administracion');
  }

  openMenu() {
    this.menuCtrl.enable(true, 'custom-menu');
    this.menuCtrl.open('custom-menu');
  }
}
