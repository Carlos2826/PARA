import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationService } from '../servicios/navigation.service';

@Component({
  selector: 'app-prevencion-deslizamiento',
  templateUrl: './prevencion-deslizamiento.page.html',
  styleUrls: ['./prevencion-deslizamiento.page.scss'],
})
export class PrevencionDeslizamientoPage implements OnInit {

  sections = [
    {
      title: 'Evaluación del riesgo',
      imageSrc: 'assets/img/icono de ayuda.png',
      caption: 'Evaluación del riesgo',
      description: 'Identificar áreas propensas a deslizamientos de tierra.'
    },
    {
      title: 'Construcción segura',
      imageSrc: 'assets/img/icono de ayuda.png',
      caption: 'Construcción segura',
      description: 'Métodos de construcción y modificaciones para reducir el riesgo.'
    },
    {
      title: 'Drenaje adecuado',
      imageSrc: 'assets/img/icono de ayuda.png',
      caption: 'Drenaje adecuado',
      description: 'Importancia de sistemas de drenaje para evitar la saturación del suelo.'
    },
    {
      title: 'Vegetación adecuada',
      imageSrc: 'assets/img/icono de ayuda.png',
      caption: 'Vegetación adecuada',
      description: 'Plantación de árboles y vegetación para estabilizar el suelo.'
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
