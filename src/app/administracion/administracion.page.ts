import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

interface User {
  ID: number;
  nombre: string;
  apellido: string;
  username: string;
  password: string;
  admin: number;
  selected?: boolean; // Añadimos esta propiedad temporalmente
}

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.page.html',
  styleUrls: ['./administracion.page.scss'],
})
export class AdministracionPage implements OnInit {
  currentUser: User = {
    ID: 0,
    nombre: '',
    apellido: '',
    username: '',
    password: '',
    admin: 0
  };
  users: User[] = [];

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    this.getCurrentUser();
    this.getUsers();
  }

  getCurrentUser() {
    const user = localStorage.getItem('currentUser');
    if (user) {
      this.currentUser = JSON.parse(user);
    }
  }

  getUsers() {
    const users = localStorage.getItem('users');
    if (users) {
      this.users = JSON.parse(users).filter((user: User) => user.username !== this.currentUser.username);
    }
  }

  saveUsers() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  goBack() {
    this.navCtrl.back();
  }

  navigateToAyuda() {
    this.navCtrl.navigateForward('/ayuda');
  }

  addUser() {
    // Lógica para añadir un nuevo usuario
  }

  deleteSelectedUsers() {
    const selectedUsers = this.users.filter(user => user.selected);
    selectedUsers.forEach(user => this.deleteUser(user));
  }

  activateSelectedUsers() {
    const selectedUsers = this.users.filter(user => user.selected);
    selectedUsers.forEach(user => {
      user.admin = 1; // Activa el usuario
      this.updateUser(user);
    });
  }

  deactivateSelectedUsers() {
    const selectedUsers = this.users.filter(user => user.selected);
    selectedUsers.forEach(user => {
      user.admin = 0; // Desactiva el usuario
      this.updateUser(user);
    });
  }

  editUser(user: User) {
    // Lógica para editar un usuario
  }

  deleteUser(user: User) {
    this.users = this.users.filter(u => u.username !== user.username);
    this.saveUsers();
  }

  updateUser(user: User) {
    const index = this.users.findIndex(u => u.username === user.username);
    if (index !== -1) {
      this.users[index] = user;
      this.saveUsers();
    }
  }
}
