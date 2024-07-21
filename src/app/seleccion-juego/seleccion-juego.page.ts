import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationService } from '../servicios/navigation.service';

@Component({
  selector: 'app-seleccion-juego',
  templateUrl: './seleccion-juego.page.html',
  styleUrls: ['./seleccion-juego.page.scss'],
})
export class SeleccionJuegoPage implements OnInit {

  constructor(private navCtrl: NavController, private navigationService: NavigationService) { }

  ngOnInit() {
  }

  goHome(): void {
    this.navigationService.goHome();
  }

  goBack(): void {
    this.navCtrl.back();
  }

  navigateToInicioSesion(): void {
    this.navCtrl.navigateForward('/inicio-sesion');
  }

  navigateToJuegoInundacion(): void {
    this.triggerTransition('water-transition', '/juego-inundacion');
  }

  navigateToJuegoDeslizamiento(): void {
    this.triggerTransition('earth-transition', '/juego-deslizamiento');
  }

  triggerTransition(animationClass: string, targetPage: string): void {
    const transitionElement = document.createElement('div');
    transitionElement.className = animationClass;
    document.body.appendChild(transitionElement);

    setTimeout(() => {
      this.navCtrl.navigateForward(targetPage).then(() => {
        document.body.removeChild(transitionElement);
      });
    }, 2000); 
  }
}
