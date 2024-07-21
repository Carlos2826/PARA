import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationService } from '../servicios/navigation.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private navCtrl: NavController, private navigationService: NavigationService) { }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }

  login() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.username === this.username && user.password === this.password) {
        // Usuario y contraseña correctos
        alert('Inicio de sesión exitoso.');
        this.navCtrl.navigateBack(this.navigationService.getPreviousUrl());
      } else {
        // Usuario o contraseña incorrectos
        alert('Nombre de usuario o contraseña incorrectos.');
      }
    } else {
      // No hay usuarios registrados
      alert('No hay usuarios registrados.');
    }
  }

  navigateToRegistro() {
    this.navigationService.setPreviousUrl('/inicio-sesion');
    this.navCtrl.navigateForward('/registro');
  }
}

