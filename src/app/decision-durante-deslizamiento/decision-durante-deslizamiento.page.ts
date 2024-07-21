import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationService } from '../servicios/navigation.service';

@Component({
  selector: 'app-decision-durante-deslizamiento',
  templateUrl: './decision-durante-deslizamiento.page.html',
  styleUrls: ['./decision-durante-deslizamiento.page.scss'],
})
export class DecisionDuranteDeslizamientoPage implements OnInit {

  sections = [
    {
      title: 'Evacuación inmediata',
      imageSrc: 'assets/img/icono de ayuda.png',
      caption: 'Evacuación inmediata',
      description: 'Cómo evacuar rápidamente y hacia dónde dirigirse.'
    },
    {
      title: 'Identificación de señales',
      imageSrc: 'assets/img/icono de ayuda.png',
      caption: 'Identificación de señales',
      description: 'Identificar señales inmediatas de un deslizamiento de tierra (sonidos, movimientos del suelo).'
    },
    {
      title: 'Refugios seguros',
      imageSrc: 'assets/img/icono de ayuda.png',
      caption: 'Refugios seguros',
      description: 'Identificar lugares seguros en caso de no poder evacuar.'
    },
    {
      title: 'Ayuda a otros',
      imageSrc: 'assets/img/icono de ayuda.png',
      caption: 'Ayuda a otros',
      description: 'Cómo ayudar a otros de manera segura durante la evacuación.'
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
