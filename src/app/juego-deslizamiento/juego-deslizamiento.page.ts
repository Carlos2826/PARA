import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationService } from '../servicios/navigation.service';

@Component({
  selector: 'app-juego-deslizamiento',
  templateUrl: './juego-deslizamiento.page.html',
  styleUrls: ['./juego-deslizamiento.page.scss'],
})
export class JuegoDeslizamientoPage implements OnInit {

  games = [
    {
      type: 'Opción Múltiple',
      levels: [1, 2, 3]
    },
    {
      type: 'Completar la Oración',
      levels: [4, 5, 6]
    },
    {
      type: 'Point and Click',
      levels: [7, 8, 9]
    }
  ];

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

  navigateToNivel1Deslizamiento(): void {
    this.triggerTransition('earth-transition', '/nivel1-deslizamiento');
  }

  navigateToNivel2Deslizamiento(): void {
    this.triggerTransition('earth-transition', '/nivel2-deslizamiento');
  }

  navigateToNivel3Deslizamiento(): void {
    this.triggerTransition('earth-transition', '/nivel3-deslizamiento');
  }

  navigateToNivel1DeslizamientoCO(): void {
    this.triggerTransition('earth-transition', '/nivel1-deslizamiento-c.o');
  }

  navigateToNivel2DeslizamientoCO(): void {
    this.triggerTransition('earth-transition', '/nivel2-deslizamiento-c.o');
  }

  navigateToNivel3DeslizamientoCO(): void {
    this.triggerTransition('earth-transition', '/nivel3-deslizamiento-c.o');
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
