import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationService } from '../servicios/navigation.service';

@Component({
  selector: 'app-seleccion-leccion-deslizamiento',
  templateUrl: './seleccion-leccion-deslizamiento.page.html',
  styleUrls: ['./seleccion-leccion-deslizamiento.page.scss'],
})
export class SeleccionLeccionDeslizamientoPage implements OnInit {

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
}
