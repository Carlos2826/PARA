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
      description: 'Para proteger tu hogar ante una posible inundación, es esencial tomar varias medidas preventivas. Primero, asegúrate de sellar bien todas las ventanas y puertas para evitar que el agua entre. Mueve los objetos de valor y los muebles a pisos superiores para mantenerlos seguros. Desconecta todos los aparatos eléctricos para prevenir cortocircuitos y posibles incendios.'
    },
    {
      title: 'Kit de emergencia',
      imageSrc: 'assets/img/Kit de emergencia.jpg',
      caption: 'Kit de emergencia',
      description: 'Un kit de emergencia es vital para enfrentar desastres naturales. Debe incluir agua potable, alimentos no perecederos, medicamentos, un botiquín de primeros auxilios, linternas con baterías adicionales, una radio de emergencia, y documentos importantes. Asegúrate de que todos en tu hogar sepan dónde está y cómo usarlo en caso de emergencia.'
    },
    {
      title: 'Evacuación',
      imageSrc: 'assets/img/Evacuación.jpg',
      caption: 'Evacuación',
      description: 'Es crucial tener un plan de evacuación en caso de desastres. Identifica rutas seguras y puntos de encuentro. Practica regularmente los procedimientos de evacuación con tu familia para asegurar que todos sepan cómo actuar y llegar a un lugar seguro rápidamente.'
    },
    {
      title: 'Conocimiento de alertas meteorológicas',
      imageSrc: 'assets/img/Conocimiento de alertas.jpg',
      caption: 'Conocimiento de alertas meteorológicas',
      description: 'Es crucial comprender y actuar rápidamente ante las alertas meteorológicas. Mantente informado a través de aplicaciones y medios de comunicación. Conoce los diferentes tipos de alertas y las acciones necesarias para proteger a tu familia y tu hogar. Prepararse adecuadamente puede salvar vidas.'
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
