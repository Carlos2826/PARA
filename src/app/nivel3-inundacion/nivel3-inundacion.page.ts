import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationService } from '../servicios/navigation.service';

@Component({
  selector: 'app-nivel3-inundacion',
  templateUrl: './nivel3-inundacion.page.html',
  styleUrls: ['./nivel3-inundacion.page.scss'],
})
export class Nivel3InundacionPage implements OnInit {

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

  navigateToSeleccionJuegoPage(): void {
    this.navCtrl.navigateForward('/seleccion-juego');
  }

  navigateToNivel2Inundacion(): void {
    this.navCtrl.navigateForward('/nivel2-inundacion');
  }

}