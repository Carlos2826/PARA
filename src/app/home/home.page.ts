import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { NavigationService } from '../servicios/navigation.service';
import { AuthService } from '../servicios/auth.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  username: string | null = null;
  currentUser: User | null = null;
  isAdmin: boolean = false;

  constructor(
    private navCtrl: NavController,
    private navigationService: NavigationService,
    private menuCtrl: MenuController,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.updateUserInfo();
  }

  ionViewWillEnter() {
    this.updateUserInfo();
  }

  updateUserInfo() {
    this.currentUser = this.authService.getCurrentUser();
    this.username = this.currentUser?.username || null;
    this.isAdmin = this.currentUser?.role === 'admin' || false;
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
    this.authService.logout();
    this.username = null;
    this.isAdmin = false;
    this.navCtrl.navigateForward('/home');
    this.menuCtrl.close();
  }

  editarPerfil() {
    // Lógica para editar el perfil
  }

  cambiarContrasena() {
    // Lógica para cambiar la contraseña
  }

  configuracionAdmin() {
    // Lógica para la configuración de administrador
  }

  openMenu() {
    this.menuCtrl.enable(true, 'custom-menu');
    this.menuCtrl.open('custom-menu');
  }
}
