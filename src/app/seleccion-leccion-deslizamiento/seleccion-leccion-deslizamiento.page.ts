import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { NavigationService } from '../servicios/navigation.service';

@Component({
  selector: 'app-seleccion-leccion-deslizamiento',
  templateUrl: './seleccion-leccion-deslizamiento.page.html',
  styleUrls: ['./seleccion-leccion-deslizamiento.page.scss'],
})
export class SeleccionLeccionDeslizamientoPage implements OnInit {
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
    if (user) {
      this.currentUser = JSON.parse(user);
      this.username = this.currentUser.username;
      this.isAdmin = Number(this.currentUser.admin) === 1;
    }
  }

  goHome() {
    this.navigationService.goHome();
  }

  goBack() {
    this.navCtrl.back();
  }

  navigateToInicioSesion() {
    this.navigationService.setPreviousUrl('/seleccion-leccion-deslizamiento'); // Guarda la URL actual
    this.navCtrl.navigateForward('/inicio-sesion');
  }

  navigateToPrevencionDeslizamiento() {
    this.navCtrl.navigateForward('/prevencion-deslizamiento');
  }

  navigateToDecisionDeslizamiento() {
    this.navCtrl.navigateForward('/decision-durante-deslizamiento');
  }

  navigateToReconocimientoDeslizamiento() {
    this.navCtrl.navigateForward('/reconocimiento-potenciales-deslizamiento');
  }

  navigateToRanking() {
    this.navCtrl.navigateForward('/ranking-global');
  }

  navigateToAyuda() {
    this.navCtrl.navigateForward('/ayuda');
  }

  openMenu() {
    this.menuCtrl.enable(true, 'custom-menu');
    this.menuCtrl.open('custom-menu');
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

  logout() {
    localStorage.removeItem('currentUser');
    this.username = null;
    this.isAdmin = false;
    this.updateUserInfo();
    this.menuCtrl.close();
  }
}
