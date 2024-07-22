import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../servicios/auth.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.page.html',
  styleUrls: ['./administracion.page.scss'],
})
export class AdministracionPage implements OnInit {
  users: User[] = [];
  currentUser: User | null = null;

  constructor(private navCtrl: NavController, private authService: AuthService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.currentUser = this.authService.getCurrentUser();
    this.users = this.authService.getUsers().filter(user => user.nombre && user.apellido && user.username !== this.currentUser?.username);
  }

  addUser() {
    const newUser: User = {
      username: 'nuevoUsuario',
      password: '12345',
      nombre: 'Nuevo',
      apellido: 'Usuario',
      perfil: 'Usuario',
      role: 'user',
      selected: false
    };
    this.authService.register(newUser);
    this.loadUsers();
  }

  deleteUser(user: User) {
    this.users = this.users.filter(u => u.username !== user.username);
    this.authService.updateUsers(this.users);
    this.loadUsers();
  }

  deleteSelectedUsers() {
    this.users = this.users.filter(u => !u.selected);
    this.authService.updateUsers(this.users);
    this.loadUsers();
  }

  activateSelectedUsers() {
    // Implementar lógica para activar usuarios seleccionados
  }

  deactivateSelectedUsers() {
    // Implementar lógica para desactivar usuarios seleccionados
  }

  goBack() {
    this.navCtrl.back();
  }

  navigateToAyuda() {
    this.navCtrl.navigateForward('/ayuda');
  }
}
