import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationService } from '../servicios/navigation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.page.html',
  styleUrls: ['./resultado.page.scss'],
})
export class ResultadoPage implements OnInit {

  correctAnswers: number = 0;
  score: number = 0;

  constructor(
    private navCtrl: NavController,
    private navigationService: NavigationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params['correctAnswers'] && params['score']) {
        this.correctAnswers = +params['correctAnswers'];
        this.score = +params['score'];
      }
    });
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
