import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationService } from '../servicios/navigation.service';

@Component({
  selector: 'app-reconocimiento-potenciales-inundacion',
  templateUrl: './reconocimiento-potenciales-inundacion.page.html',
  styleUrls: ['./reconocimiento-potenciales-inundacion.page.scss'],
})
export class ReconocimientoPotencialesInundacionPage implements OnInit {

  sections = [
    {
      title: 'Patrones climáticos',
      imageSrc: 'assets/img/icono de ayuda.png',
      caption: 'Patrones climáticos',
      description: 'Identificar patrones climáticos que podrían indicar una inundación.'
    },
    {
      title: 'Condiciones del terreno',
      imageSrc: 'assets/img/icono de ayuda.png',
      caption: 'Condiciones del terreno',
      description: 'Reconocer áreas propensas a inundaciones.'
    },
    {
      title: 'Monitoreo de ríos y arroyos',
      imageSrc: 'assets/img/icono de ayuda.png',
      caption: 'Monitoreo de ríos y arroyos',
      description: 'Observación de niveles de agua en ríos y arroyos cercanos.'
    },
    {
      title: 'Alertas y advertencias',
      imageSrc: 'assets/img/icono de ayuda.png',
      caption: 'Alertas y advertencias',
      description: 'Entender y reaccionar ante las alertas de inundación emitidas por las autoridades.'
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
