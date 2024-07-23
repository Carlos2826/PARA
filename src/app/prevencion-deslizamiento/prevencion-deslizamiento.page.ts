import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { NavigationService } from '../servicios/navigation.service';

@Component({
  selector: 'app-prevencion-deslizamiento',
  templateUrl: './prevencion-deslizamiento.page.html',
  styleUrls: ['./prevencion-deslizamiento.page.scss'],
})
export class PrevencionDeslizamientoPage implements OnInit {
  username: string | null = null;
  currentUser: any | null = null;
  isAdmin: boolean = false;

  sections = [
    {
      title: 'Evaluación del riesgo',
      imageSrc: 'assets/img/evaluacion.jpg',
      caption: 'Evaluación del riesgo',
      description: 'Identificar áreas propensas a deslizamientos de tierra es fundamental para la prevención. Utiliza mapas de riesgos y tecnología avanzada para evaluar el terreno. Comprender estos riesgos permite tomar medidas preventivas y reducir el impacto de los desastres naturales en la comunidad.'
    },
    {
      title: 'Construcción segura',
      imageSrc: 'assets/img/construccion.jpg',
      caption: 'Construcción segura',
      description: 'Implementar métodos de construcción y modificaciones adecuadas puede reducir significativamente el riesgo de desastres. Utiliza materiales resistentes y técnicas de ingeniería adaptadas al terreno. La planificación y construcción segura protegen las edificaciones y garantizan la seguridad de los habitantes.'
    },
    {
      title: 'Drenaje adecuado',
      imageSrc: 'assets/img/sistema.jpg',
      caption: 'Drenaje adecuado',
      description: 'Tener un sistema de drenaje adecuado es esencial para prevenir la saturación del suelo y reducir el riesgo de inundaciones. Asegúrate de mantener los desagües limpios y en buen estado. Implementar sistemas de drenaje eficientes protege las estructuras y mantiene segura tu comunidad.'
    },
    {
      title: 'Vegetación adecuada',
      imageSrc: 'assets/img/vegetacion.jpg',
      caption: 'Vegetación adecuada',
      description: 'La plantación de árboles y vegetación es crucial para estabilizar el suelo y prevenir deslizamientos. Las raíces de las plantas ayudan a mantener la integridad del terreno, reduciendo la erosión y mejorando la resistencia natural del suelo. Implementar una vegetación adecuada es una medida efectiva para la protección ambiental y la seguridad.'
    }
  ];

  currentIndex = 0;
  title: string = '';
  imageSrc: string = '';
  caption: string = '';
  description: string = '';

  constructor(
    private navCtrl: NavController,
    private navigationService: NavigationService,
    private menuCtrl: MenuController
  ) { }

  ngOnInit() {
    this.updateSection();
    this.updateUserInfo();
  }

  ionViewWillEnter() {
    this.updateUserInfo();
  }

  updateUserInfo() {
    const user = localStorage.getItem('currentUser');
    if (user) {
      this.currentUser = JSON.parse(user);
      this.username = this.currentUser.username;
      this.isAdmin = Number(this.currentUser.admin) === 1;
    }
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
    this.navigationService.setPreviousUrl('/prevencion-deslizamiento'); // Guarda la URL actual
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

  navigateToRanking() {
    this.navCtrl.navigateForward('/ranking-global');
  }

  navigateToAyuda() {
    this.navCtrl.navigateForward('/ayuda');
  }

  openMenu() {
    this.menuCtrl.enable(true, 'custom-menu');
    this.menuCtrl.open('custom-menu');
  }

  editarPerfil() {
    this.navCtrl.navigateForward('/editar-perfil');
  }

  cambiarContrasena() {
    this.navCtrl.navigateForward('/cambiar-contrasena');
  }

  configuracionAdmin() {
    this.navCtrl.navigateForward('/administracion');
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.username = null;
    this.isAdmin = false;
    this.updateUserInfo();
    this.menuCtrl.close();
  }
}
