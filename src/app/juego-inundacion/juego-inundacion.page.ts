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

  navigateToJuegoInundacion(level: number): void {
    const targetPage = `/nivel${level}-inundacion`;
    this.triggerTransition('water-transition', targetPage);
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

