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
        nombre: 'Admin',
        apellido: 'User',
        role: 'admin'
      });
    }
  }

  register(user: User) {
    const users = this.getUsers();
    const hashedPassword = bcrypt.hashSync(user.password, 10);
    user.password = hashedPassword;
    users.push(user);
    localStorage.setItem(this.usersKey, JSON.stringify(users));
  }

  login(username: string, password: string): boolean {
    const users = this.getUsers();
    const user = users.find(u => u.username === username);
    if (user && bcrypt.compareSync(password, user.password)) {
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
