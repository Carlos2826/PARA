import { Injectable } from '@angular/core';
import * as bcrypt from 'bcryptjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersKey = 'users';
  private currentUserKey = 'currentUser';

  constructor() {
    const users = this.getUsers();
    if (!users.some(user => user.username === 'PARA')) {
      this.register({
        username: 'PARA',
        password: '12345',
        nombre: 'P.A.R.A.',
        apellido: 'Proteger',
        role: 'admin',
        perfil: 'Administrador al solo lectura',
        selected: false
      }, false);
    }
    this.registerPredefinedUsers();
  }

  registerPredefinedUsers() {
    const predefinedUsers: User[] = [
      {
        username: 'Cristina',
        password: '12345',
        nombre: 'Cristina',
        apellido: 'Agulló',
        role: 'admin',
        perfil: 'Administrador al solo lectura',
        selected: false
      },
      {
        username: 'admin',
        password: '12345',
        nombre: 'admin',
        apellido: 'campus',
        role: 'admin',
        perfil: 'Administrador',
        selected: false
      },
      {
        username: 'Usuario',
        password: '12345',
        nombre: 'Usuario',
        apellido: 'Formación',
        role: 'admin',
        perfil: 'Administrador general',
        selected: false
      }
    ];

    predefinedUsers.forEach(user => {
      this.register(user, false);
    });
  }

  register(user: User, hashPassword: boolean = true) {
    if (!user.username || !user.password || !user.nombre || !user.apellido || !user.perfil) {
      console.error('Faltan campos requeridos para registrar el usuario:', user);
      return;
    }

    const users = this.getUsers();
    if (hashPassword) {
      user.password = bcrypt.hashSync(user.password || '', 10);
    }
    users.push(user);
    this.updateUsers(users);
  }

  updateUsers(users: User[]) {
    localStorage.setItem(this.usersKey, JSON.stringify(users));
  }

  login(username: string, password: string): boolean {
    const users = this.getUsers();
    const user = users.find(u => u.username === username);
    if (user && bcrypt.compareSync(password, user.password || '')) {
      localStorage.setItem(this.currentUserKey, JSON.stringify(user));
      return true;
    }
    return false;
  }

  getUsers(): User[] {
    return JSON.parse(localStorage.getItem(this.usersKey) || '[]');
  }

  getCurrentUser(): User | null {
    const userJson = localStorage.getItem(this.currentUserKey);
    return userJson ? JSON.parse(userJson) : null;
  }

  logout() {
    localStorage.removeItem(this.currentUserKey);
  }
}
