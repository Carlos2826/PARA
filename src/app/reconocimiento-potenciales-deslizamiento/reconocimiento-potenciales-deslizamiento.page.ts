import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationService } from '../servicios/navigation.service';

@Component({
  selector: 'app-reconocimiento-potenciales-deslizamiento',
  templateUrl: './reconocimiento-potenciales-deslizamiento.page.html',
  styleUrls: ['./reconocimiento-potenciales-deslizamiento.page.scss'],
})
export class ReconocimientoPotencialesDeslizamientoPage implements OnInit {

  sections = [
    {
      title: 'Monitoreo del suelo',
      imageSrc: 'assets/img/Monitoreo suelo.jpg',
      caption: 'Monitoreo del suelo',
      description: 'Identificar grietas en el suelo y movimientos de tierra.'
    },
    {
      title: 'Cambios en el paisaje',
      imageSrc: 'assets/img/Cambios suelo.jpg',
      caption: 'Cambios en el paisaje',
      description: 'Reconocer cambios en el terreno y la vegetación.'
    },
    {
      title: 'Patrones de lluvia',
      imageSrc: 'assets/img/Patrones lluvia.jpg',
      caption: 'Patrones de lluvia',
      description: 'Entender cómo la lluvia intensa y prolongada puede aumentar el riesgo.'
    },
    {
      title: 'Alertas y advertencias',
      imageSrc: 'assets/img/Alertas y advertencias.jpg',
      caption: 'Alertas y advertencias',
      description: 'Comprender y reaccionar ante las alertas de deslizamientos.'
    }
  ];

  currentIndex = 0;

  title: string = '';
  imageSrc: string = '';
  caption: string = '';
  description: string = '';

  constructor(private navCtrl: NavController, private navigationService: NavigationService) { }

  ngOnInit() {
    this.updateSection();
  }

  updateSection() {
    const section = this.sections[this.currentIndex];
    this.title = section.title;
    this.imageSrc = section.imageSrc;
    this.caption = section.caption;
    this.description = section.description;
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

  nextSection() {
    if (this.currentIndex < this.sections.length - 1) {
      this.currentIndex++;
      this.updateSection();
    }
  }

  prevSection() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateSection();
    }
  }
}

