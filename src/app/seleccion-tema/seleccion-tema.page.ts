import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { NavigationService } from '../servicios/navigation.service';

@Component({
  selector: 'app-seleccion-tema',
  templateUrl: './seleccion-tema.page.html',
  styleUrls: ['./seleccion-tema.page.scss'],
})
export class SeleccionTemaPage implements OnInit {
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
    this.navigationService.setPreviousUrl('/seleccion-tema'); // Guarda la URL actual
    this.navCtrl.navigateForward('/inicio-sesion');
  }

  navigateToSeleccionLeccionInundacion() {
    this.triggerTransition('water-transition', '/seleccion-leccion-inundacion');
  }

  navigateToSeleccionLeccionDeslizamiento() {
    this.triggerTransition('earth-transition', '/seleccion-leccion-deslizamiento');
  }

  navigateToRanking() {
    this.navCtrl.navigateForward('/ranking-global');
  }

  navigateToAyuda() {
    this.navCtrl.navigateForward('/ayuda');
  }

  triggerTransition(animationClass: string, targetPage: string) {
    const transitionElement = document.createElement('div');
    transitionElement.className = animationClass;
    document.body.appendChild(transitionElement);

    setTimeout(() => {
      this.navCtrl.navigateForward(targetPage).then(() => {
        document.body.removeChild(transitionElement);
      });
    }, 2000); // Tiempo de la animación en ms
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
