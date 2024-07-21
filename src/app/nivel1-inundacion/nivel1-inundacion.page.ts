import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationService } from '../servicios/navigation.service';

@Component({
  selector: 'app-nivel1-inundacion',
  templateUrl: './nivel1-inundacion.page.html',
  styleUrls: ['./nivel1-inundacion.page.scss'],
})
export class Nivel1InundacionPage implements OnInit {

  constructor(private navCtrl: NavController, private navigationService: NavigationService) { }

  ngOnInit() {}

  goHome(): void {
    this.navigationService.goHome();
  }

  goBack(): void {
    this.navCtrl.back();
  }

  navigateToInicioSesion(): void {
    this.navCtrl.navigateForward('/inicio-sesion');
  }
}

