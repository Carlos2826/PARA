import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationService } from '../servicios/navigation.service';

@Component({
  selector: 'app-juego-inundacion',
  templateUrl: './juego-inundacion.page.html',
  styleUrls: ['./juego-inundacion.page.scss'],
})
export class JuegoInundacionPage implements OnInit {

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

  navigateToNivel1Inundacion(): void {
    this.triggerTransition('water-transition', '/nivel1-inundacion');
  }

  navigateToNivel2Inundacion(): void {
    this.triggerTransition('water-transition', '/nivel2-inundacion');
  }

  navigateToNivel3Inundacion(): void {
    this.triggerTransition('water-transition', '/nivel3-inundacion');
  }

  navigateToNivel1InundacionCO(): void {
    this.triggerTransition('water-transition', '/nivel1-inundacion-c.o');
  }

  navigateToNivel2InundacionCO(): void {
    this.triggerTransition('water-transition', '/nivel2-inundacion-c.o');
  }

  navigateToNivel3InundacionCO(): void {
    this.triggerTransition('water-transition', '/nivel3-inundacion-c.o');
  }

  navigateToNivel1Deslizamiento(): void {
    this.triggerTransition('water-transition', '/nivel1-deslizamiento');
  }

  navigateToNivel2Deslizamiento(): void {
    this.triggerTransition('water-transition', '/nivel2-deslizamiento');
  }

  navigateToNivel3Deslizamiento(): void {
    this.triggerTransition('water-transition', '/nivel3-deslizamiento');
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
