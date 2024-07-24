import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from '../servicios/navigation.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.page.html',
  styleUrls: ['./resultado.page.scss'],
})
export class ResultadoPage implements OnInit {
  correctAnswers: number = 0;
  score: number = 0;
  level: number = 1;
  gameType: string = 'inundacion';

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
        this.level = +params['level'];
        this.gameType = params['gameType'] || 'inundacion';
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

  navigateToNextLevel(): void {
    let nextLevel = this.level + 1;
    let targetPage = '';

    if (this.gameType === 'inundacion-co') {
      if (nextLevel <= 3) {
        targetPage = `/nivel${nextLevel}-inundacion-c.o`;
      }
    } else if (this.gameType === 'deslizamiento-co') {
      if (nextLevel <= 3) {
        targetPage = `/nivel${nextLevel}-deslizamiento-c.o`;
      }
    } else if (this.gameType === 'inundacion') {
      if (nextLevel <= 3) {
        targetPage = `/nivel${nextLevel}-inundacion`;
      }
    } else if (this.gameType === 'deslizamiento') {
      if (nextLevel <= 3) {
        targetPage = `/nivel${nextLevel}-deslizamiento`;
      }
    }

    if (targetPage) {
      this.navCtrl.navigateForward(targetPage);
    }
  }

  shouldShowNextLevelButton(): boolean {
    return this.level < 3;
  }
}

