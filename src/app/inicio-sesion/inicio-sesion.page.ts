import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationService } from '../servicios/navigation.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage {
  username: string = '';
  password: string = '';
  private apiUrl = 'http://localhost:8105';

  constructor(
    private navCtrl: NavController,
    private navigationService: NavigationService
  ) {}

  login() {
    fetch(`${this.apiUrl}/account/${this.username}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (data.length === 0) {
        alert('Esta cuenta no existe.');
      } else if (data[0].Password !== this.password) {  // Cambiado a Password
        alert('Contraseña incorrecta, verifique e intente de nuevo.');
      } else {
        localStorage.setItem('currentUser', JSON.stringify({
          ID: data[0].ID_Usuario,
          nombre: data[0].Nombre,
          apellido: data[0].Apellido,
          username: data[0].Usuario,
          password: data[0].Password,  // Cambiado a Password
          admin: data[0].Admin
        }));
        alert('Bienvenido ' + data[0].Nombre);
        this.navCtrl.back();  // Navega a la pantalla anterior
      }
    })
    .catch(error => {
      console.error('Error al acceder a la API:', error);
      alert('Error al iniciar sesión. Detalles: ' + error.message);
    });
  }

  goBack() {
    this.navCtrl.back();
  }

  navigateToRegistro() {
    this.navigationService.setPreviousUrl('/inicio-sesion');
    this.navCtrl.navigateForward('/registro');
  }
}
