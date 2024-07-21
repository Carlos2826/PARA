import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationService } from '../servicios/navigation.service';

@Component({
  selector: 'app-seleccion-leccion-inundacion',
  templateUrl: './seleccion-leccion-inundacion.page.html',
  styleUrls: ['./seleccion-leccion-inundacion.page.scss'],
})
export class SeleccionLeccionInundacionPage implements OnInit {

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

  navigateToPrevencionInundacion() {
    this.navCtrl.navigateForward('/prevencion-inundacion');
  }

  navigateToDecisionInundacion() {
    this.navCtrl.navigateForward('/decision-durante-inundacion');
  }

  navigateToReconocimientoInundacion() {
    this.navCtrl.navigateForward('/reconocimiento-potenciales-inundacion');
  }
}
