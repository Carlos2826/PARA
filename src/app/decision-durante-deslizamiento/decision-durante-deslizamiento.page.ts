import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { NavigationService } from '../servicios/navigation.service';

@Component({
  selector: 'app-decision-durante-deslizamiento',
  templateUrl: './decision-durante-deslizamiento.page.html',
  styleUrls: ['./decision-durante-deslizamiento.page.scss'],
})
export class DecisionDuranteDeslizamientoPage implements OnInit {
  username: string | null = null;
  currentUser: any | null = null;
  isAdmin: boolean = false;

  sections = [
    {
      title: 'Evacuación inmediata',
      imageSrc: 'assets/img/evacuacion in.jpg',
      caption: 'Evacuación inmediata',
      description: 'Saber cómo evacuar rápidamente y hacia dónde dirigirse puede salvar vidas en una emergencia. Identifica las rutas de evacuación más seguras y sigue las instrucciones de las autoridades. Mantén la calma y actúa con rapidez para llegar a un lugar seguro.'
    },
    {
      title: 'Identificación de señales',
      imageSrc: 'assets/img/id señales.jpg',
      caption: 'Identificación de señales',
      description: 'Es crucial identificar señales inmediatas de un deslizamiento de tierra, como sonidos inusuales y movimientos del suelo. Presta atención a grietas nuevas en el terreno y cambios repentinos en el paisaje. Reconocer estas señales a tiempo puede permitirte evacuar y buscar un lugar seguro rápidamente.'
    },
    {
      title: 'Refugios seguros',
      imageSrc: 'assets/img/refugio s.jpg',
      caption: 'Refugios seguros',
      description: 'Es crucial identificar lugares seguros en caso de no poder evacuar. Busca refugios robustos y alejados de zonas de riesgo. Estos lugares deben proporcionar protección y seguridad hasta que sea seguro salir. Mantén un plan claro y comparte esta información con tu familia.'
    },
    {
      title: 'Ayuda a otros',
      imageSrc: 'assets/img/ayuda a otros.jpg',
      caption: 'Ayuda a otros',
      description: 'Durante una evacuación, es fundamental ayudar a otros de manera segura. Prioriza el apoyo a personas con movilidad reducida, niños y ancianos. Coordina con los equipos de rescate y sigue las rutas de evacuación establecidas para asegurar que todos lleguen a un lugar seguro.'
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
    this.navigationService.setPreviousUrl('/decision-durante-deslizamiento'); // Guarda la URL actual
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

