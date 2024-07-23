import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { NavigationService } from '../servicios/navigation.service';

@Component({
  selector: 'app-decision-durante-inundacion',
  templateUrl: './decision-durante-inundacion.page.html',
  styleUrls: ['./decision-durante-inundacion.page.scss'],
})
export class DecisionDuranteInundacionPage implements OnInit {
  username: string | null = null;
  currentUser: any | null = null;
  isAdmin: boolean = false;

  sections = [
    {
      title: 'Seguridad personal',
      imageSrc: 'assets/img/Seguridad personal.jpg',
      caption: 'Seguridad personal',
      description: 'Durante una inundación, es crucial priorizar tu seguridad personal. Nunca camines ni conduzcas a través de aguas inundadas, ya que pueden ser más profundas y rápidas de lo que parecen, poniendo en riesgo tu vida. Las corrientes pueden arrastrarte rápidamente y el agua puede esconder peligros como escombros o cables eléctricos caídos. Siempre busca rutas seguras y sigue las indicaciones de las autoridades locales.'
    },
    {
      title: 'Refugios temporales',
      imageSrc: 'assets/img/Refugios temporales.jpg',
      caption: 'Refugios temporales',
      description: 'En situaciones de emergencia, es vital identificar y dirigirse a refugios seguros. Estos lugares están diseñados para proporcionar protección y recursos esenciales. Asegúrate de conocer la ubicación de los refugios temporales más cercanos y sigue las indicaciones de las autoridades para llegar a ellos de manera segura.'
    },
    {
      title: 'Comunicación',
      imageSrc: 'assets/img/Comunicación.jpg',
      caption: 'Comunicación',
      description: 'Mantenerse en contacto durante una emergencia es crucial. Asegúrate de tener un plan de comunicación para contactar a familiares y servicios de emergencia. Usa múltiples canales como teléfonos, radios y redes sociales para compartir información y recibir actualizaciones importantes.'
    },
    {
      title: 'Primeros auxilios',
      imageSrc: 'assets/img/Primeros auxilios.jpg',
      caption: 'Primeros auxilios',
      description: 'Saber cómo proporcionar primeros auxilios básicos en situaciones de emergencia puede salvar vidas. Aprende técnicas esenciales como RCP, control de hemorragias y tratamiento de heridas menores. Tener conocimientos de primeros auxilios te permite actuar rápidamente hasta que lleguen los servicios de emergencia.'
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
    this.navigationService.setPreviousUrl('/decision-durante-inundacion'); // Guarda la URL actual
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
