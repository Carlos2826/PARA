import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationService } from '../servicios/navigation.service';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {
  username: string = '';
  password: string = '';

  constructor(
    private navCtrl: NavController,
    private navigationService: NavigationService,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  goBack() {
    this.navCtrl.back();
  }

  login() {
    if (this.authService.login(this.username, this.password)) {
      alert('Inicio de sesión exitoso.');
      localStorage.setItem('username', this.username); // Guardar nombre de usuario
      this.navCtrl.navigateBack(this.navigationService.getPreviousUrl());
    } else {
      alert('Nombre de usuario o contraseña incorrectos.');
    }
  }

  navigateToRegistro() {
    this.navigationService.setPreviousUrl('/inicio-sesion');
    this.navCtrl.navigateForward('/registro');
  }
}
