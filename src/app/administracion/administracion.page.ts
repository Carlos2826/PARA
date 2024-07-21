import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User } from '../models/user.model';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.page.html',
  styleUrls: ['./administracion.page.scss'],
})
export class AdministracionPage implements OnInit {
  users: User[] = [
    { username: 'Cristina', nombre: 'Cristina', apellido: 'Agulló', perfil: 'Administrador al solo lectura', selected: false, password: '' },
    { username: 'admin', nombre: 'admin', apellido: 'campus', perfil: 'Administrador', selected: false, password: '' },
    { username: 'Usuario', nombre: 'Usuario', apellido: 'Formación', perfil: 'Administrador general', selected: false, password: '' }
  ];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  goBack() {
    this.navCtrl.back();
  }

  goHome() {
    this.navCtrl.navigateRoot('/home');
  }

  addUser() {
    // Lógica para agregar usuario
  }

  deleteSelectedUsers() {
    // Lógica para borrar usuarios seleccionados
  }

  activateSelectedUsers() {
    // Lógica para activar usuarios seleccionados
  }

  deactivateSelectedUsers() {
    // Lógica para desactivar usuarios seleccionados
  }

  editUser(user: User) {
    // Lógica para editar usuario
  }

  deleteUser(user: User) {
    // Lógica para borrar usuario
  }

  logout() {
    // Lógica para cerrar sesión
  }
}
