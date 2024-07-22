import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationService } from '../servicios/navigation.service';

@Component({
  selector: 'app-prevencion-inundacion',
  templateUrl: './prevencion-inundacion.page.html',
  styleUrls: ['./prevencion-inundacion.page.scss'],
})
export class PrevencionInundacionPage implements OnInit {

  sections = [
    {
      title: 'Preparación del hogar',
      imageSrc: 'assets/img/Preparación del hogar.jpg',
      caption: 'Preparación del hogar',
      description: 'Cómo asegurar ventanas y puertas, mover objetos de valor a pisos más altos.'
    },
    {
      title: 'Kit de emergencia',
      imageSrc: 'assets/img/Kit de emergencia.jpg',
      caption: 'Kit de emergencia',
      description: 'Qué incluir en un kit de emergencia (agua, comida no perecedera, medicinas, linternas, etc.).'
    },
    {
      title: 'Evacuación',
      imageSrc: 'assets/img/Evacuación.jpg',
      caption: 'Evacuación',
      description: 'Planes de evacuación y rutas seguras.'
    },
    {
      title: 'Conocimiento de alertas meteorológicas',
      imageSrc: 'assets/img/Conocimiento de alertas.jpg',
      caption: 'Conocimiento de alertas meteorológicas',
      description: 'Comprender y actuar según las alertas meteorológicas.'
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
