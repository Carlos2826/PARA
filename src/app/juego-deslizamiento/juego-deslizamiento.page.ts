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
      type: 'Opcion Multiple',
      levels: [1, 2, 3]
    },
    {
      type: 'Completar la Oracion',
      levels: [1, 2, 3]
    },
    {
      type: 'Point and click',
      levels: [1, 2, 3]
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

  navigateToJuegoDeslizamiento(nivel: number): void {
    const targetPage = `/nivel${nivel}-deslizamiento`;
    this.triggerTransition('tierra-transition', targetPage);
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
