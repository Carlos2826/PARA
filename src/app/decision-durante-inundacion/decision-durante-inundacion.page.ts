import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationService } from '../servicios/navigation.service';

@Component({
  selector: 'app-decision-durante-inundacion',
  templateUrl: './decision-durante-inundacion.page.html',
  styleUrls: ['./decision-durante-inundacion.page.scss'],
})
export class DecisionDuranteInundacionPage implements OnInit {

  sections = [
    {
      title: 'Seguridad personal',
      imageSrc: 'assets/img/Seguridad personal.jpg',
      caption: 'Seguridad personal',
      description: 'No caminar ni conducir a través de aguas inundadas.'
    },
    {
      title: 'Refugios temporales',
      imageSrc: 'assets/img/Refugios temporales.jpg',
      caption: 'Refugios temporales',
      description: 'Identificar y dirigirse a refugios seguros.'
    },
    {
      title: 'Comunicación',
      imageSrc: 'assets/img/Comunicación.jpg',
      caption: 'Comunicación',
      description: 'Mantenerse en contacto con familiares y servicios de emergencia.'
    },
    {
      title: 'Primeros auxilios',
      imageSrc: 'assets/img/Primeros auxilios.jpg',
      caption: 'Primeros auxilios',
      description: 'Proporcionar primeros auxilios básicos en situaciones de emergencia.'
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
