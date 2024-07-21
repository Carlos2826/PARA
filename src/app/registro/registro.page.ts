import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationService } from '../servicios/navigation.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  nombre: string = '';
  apellido: string = '';
  nombreUsuario: string = '';
  contrasena: string = '';
  isAlertOpen: boolean = false;
  alertMessage: string = '';
  isConfirmOpen: boolean = false;
  isSuccessOpen: boolean = false;

  constructor(private navCtrl: NavController, private navigationService: NavigationService) {}

  goBack() {
    this.navCtrl.back();
  }

  registrar() {
    if (!this.nombre || !this.apellido || !this.nombreUsuario || !this.contrasena) {
      this.alertMessage = 'Todos los campos son obligatorios.';
      this.isAlertOpen = true;
    } else {
      this.isConfirmOpen = true;
    }
  }

  registrarUsuario() {
    const user = {
      username: this.nombreUsuario,
      password: this.contrasena,
      nombre: this.nombre,
      apellido: this.apellido
    };

    localStorage.setItem('user', JSON.stringify(user));
    this.isConfirmOpen = false;
    this.isSuccessOpen = true;
    setTimeout(() => {
      this.navigationService.goBackToPreviousPage();
    }, 1500);
  }
}
