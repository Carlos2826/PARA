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
      description: 'Identificar grietas en el suelo y movimientos de tierra es crucial para prevenir deslizamientos. Utiliza equipos de monitoreo y observa cambios en el terreno. Una vigilancia constante permite tomar acciones preventivas y asegurar la estabilidad del área.'
    },
    {
      title: 'Cambios en el paisaje',
      imageSrc: 'assets/img/Cambios suelo.jpg',
      caption: 'Cambios en el paisaje',
      description: 'Reconocer cambios en el terreno y la vegetación es esencial para identificar riesgos de deslizamientos. Observa alteraciones en la inclinación del suelo, árboles inclinados o desplazamientos de tierra. Estos signos pueden indicar la inestabilidad del terreno y la necesidad de tomar medidas preventivas.'
    },
    {
      title: 'Patrones de lluvia',
      imageSrc: 'assets/img/Patrones lluvia.jpg',
      caption: 'Patrones de lluvia',
      description: 'Entender cómo la lluvia intensa y prolongada puede aumentar el riesgo de deslizamientos es crucial. Las lluvias fuertes pueden saturar el suelo, debilitando su estructura y aumentando la posibilidad de deslizamientos. Es importante monitorear los pronósticos meteorológicos y estar atento a las alertas de lluvia prolongada para poder tomar medidas preventivas a tiempo.'
    },
    {
      title: 'Alertas y advertencias',
      imageSrc: 'assets/img/Alertas y advertencias.jpg',
      caption: 'Alertas y advertencias',
      description: 'Comprender y reaccionar ante las alertas de deslizamientos es crucial para la seguridad. Las alertas proporcionan información vital sobre posibles deslizamientos inminentes, permitiendo a las personas evacuar de manera segura y a tiempo. Es importante estar atentos a las notificaciones de emergencia y seguir las instrucciones proporcionadas por las autoridades locales.'
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

