import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User } from '../models/user.model'; // Asegúrate de que la ruta es correcta

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.page.html',
  styleUrls: ['./administracion.page.scss'],
})
export class AdministracionPage implements OnInit {
  currentUser: User = {
    ID_Usuario: 0,
    Nombre: '',
    Apellido: '',
    Usuario: '',
    Password: '', // Usamos Password
    Admin: 0
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
    fetch('http://localhost:8105/users')
      .then(response => response.json())
      .then(data => {
        this.users = data;
      })
      .catch(error => console.error('Error fetching users:', error));
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
      user.Admin = 1; // Activa el usuario
      this.updateUser(user);
    });
  }

  deactivateSelectedUsers() {
    const selectedUsers = this.users.filter(user => user.selected);
    selectedUsers.forEach(user => {
      user.Admin = 0; // Desactiva el usuario
      this.updateUser(user);
    });
  }

  editUser(user: User) {
    // Lógica para editar un usuario
  }

  deleteUser(user: User) {
    fetch(`http://localhost:8105/user/delete/${user.ID_Usuario}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        this.users = this.users.filter(u => u.ID_Usuario !== user.ID_Usuario);
        this.saveUsers();
      })
      .catch(error => console.error('Error deleting user:', error));
  }

  updateUser(user: User) {
    fetch('http://localhost:8105/user/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(response => response.json())
      .then(data => {
        const index = this.users.findIndex(u => u.ID_Usuario === user.ID_Usuario);
        if (index !== -1) {
          this.users[index] = user;
          this.saveUsers();
        }
      })
      .catch(error => console.error('Error updating user:', error));
  }
}
