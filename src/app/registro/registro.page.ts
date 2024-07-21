import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationService } from '../servicios/navigation.service';
import { AuthService } from '../servicios/auth.service';

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

  constructor(
    private navCtrl: NavController,
    private navigationService: NavigationService,
    private authService: AuthService
  ) {}

  goBack() {
    this.navCtrl.back();
  }

  registrar() {
    if (!this.nombre || !this.apellido || !this.nombreUsuario || !this.contrasena) {
      this.alertMessage = 'Todos los campos son obligatorios.';
      this.isAlertOpen = true;
    } else {
      this.confirmarRegistro();
    }
  }

  confirmarRegistro() {
    const alert = document.createElement('ion-alert');
    alert.header = 'Confirmación de Registro';
    alert.message = `¿Confirmar registro con los siguientes datos?<br><br>Nombre: ${this.nombre}<br>Apellido: ${this.apellido}<br>Nombre de Usuario: ${this.nombreUsuario}`;
    alert.buttons = [
      {
        text: 'No',
        role: 'cancel',
        handler: () => {
          this.isConfirmOpen = false;
        }
      },
      {
        text: 'Sí',
        handler: () => {
          this.registrarUsuario();
        }
      }
    ];

    document.body.appendChild(alert);
    alert.present();
  }

  registrarUsuario() {
    const user = {
      username: this.nombreUsuario,
      password: this.contrasena,
      nombre: this.nombre,
      apellido: this.apellido
    };

    this.authService.register(user);
    this.mostrarRegistroExitoso();
  }

  mostrarRegistroExitoso() {
    const alert = document.createElement('ion-alert');
    alert.header = 'Registro Exitoso';
    alert.message = '<ion-icon name="checkmark-circle-outline" style="color: green; font-size: 2rem;"></ion-icon><br><br>Registro exitoso';
    alert.buttons = [
      {
        text: 'OK',
        handler: () => {
          this.navCtrl.navigateRoot('/inicio-sesion');
        }
      }
    ];

    document.body.appendChild(alert);
    alert.present();
  }
}
