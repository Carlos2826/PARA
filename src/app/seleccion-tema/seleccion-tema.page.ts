import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationService } from '../servicios/navigation.service';

@Component({
  selector: 'app-seleccion-tema',
  templateUrl: './seleccion-tema.page.html',
  styleUrls: ['./seleccion-tema.page.scss'],
})
export class SeleccionTemaPage implements OnInit {

  constructor(private navCtrl: NavController, private navigationService: NavigationService) { }

  ngOnInit() {
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
}
