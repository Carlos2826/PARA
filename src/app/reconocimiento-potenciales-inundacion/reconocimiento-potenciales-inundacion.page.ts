import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { NavigationService } from '../servicios/navigation.service';

@Component({
  selector: 'app-reconocimiento-potenciales-inundacion',
  templateUrl: './reconocimiento-potenciales-inundacion.page.html',
  styleUrls: ['./reconocimiento-potenciales-inundacion.page.scss'],
})
export class ReconocimientoPotencialesInundacionPage implements OnInit {
  username: string | null = null;
  currentUser: any | null = null;
  isAdmin: boolean = false;

  sections = [
    {
      title: 'Patrones climáticos',
      imageSrc: 'assets/img/Patrones climáticos.jpg',
      caption: 'Patrones climáticos',
      description: 'Reconocer patrones climáticos es crucial para anticipar inundaciones. Observa signos como lluvias intensas, nubes oscuras y ríos crecidos. Utiliza aplicaciones y servicios meteorológicos para obtener alertas tempranas y toma medidas preventivas para protegerte a ti y a tu comunidad.'
    },
    {
      title: 'Condiciones del terreno',
      imageSrc: 'assets/img/Condiciones del terreno.jpg',
      caption: 'Condiciones del terreno',
      description: 'Reconocer las áreas propensas a inundaciones es fundamental para la seguridad. Identifica zonas de riesgo en tu comunidad utilizando mapas y señales de advertencia. Mantente informado sobre las condiciones del terreno y toma medidas preventivas para protegerte y proteger tu hogar.'
    },
    {
      title: 'Monitoreo de ríos y arroyos',
      imageSrc: 'assets/img/Monitoreo de ríos.jpg',
      caption: 'Monitoreo de ríos y arroyos',
      description: 'Observar los niveles de agua en ríos y arroyos cercanos es esencial para prevenir inundaciones. Utiliza equipos de medición y sigue las actualizaciones de las autoridades locales. Un monitoreo constante puede proporcionar alertas tempranas y permitir tomar acciones preventivas a tiempo.'
    },
    {
      title: 'Alertas y advertencias',
      imageSrc: 'assets/img/Alertas advertencias.jpg',
      caption: 'Alertas y advertencias',
      description: 'Entender y reaccionar ante las alertas de inundación emitidas por las autoridades es crucial. Mantente informado a través de aplicaciones, radios y otros medios de comunicación. Actúa rápidamente según las instrucciones para garantizar tu seguridad y la de tu familia.'
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
    this.navigationService.setPreviousUrl('/reconocimiento-potenciales-inundacion'); // Guarda la URL actual
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
