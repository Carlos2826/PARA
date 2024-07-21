import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationService } from '../servicios/navigation.service';

@Component({
  selector: 'app-juego-inundacion',
  templateUrl: './juego-inundacion.page.html',
  styleUrls: ['./juego-inundacion.page.scss'],
})
export class JuegoInundacionPage implements OnInit {

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

  navigateToJuegoInundacion(nivel: number): void {
    const targetPage = `/nivel${nivel}-inundacion`;
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
