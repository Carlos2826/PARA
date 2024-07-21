import { Injectable } from '@angular/core';
import * as bcrypt from 'bcryptjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersKey = 'users';

  constructor() {}

  register(user: { username: string, password: string, nombre: string, apellido: string }) {
    const users = JSON.parse(localStorage.getItem(this.usersKey) || '[]') as Array<{ username: string, password: string, nombre: string, apellido: string }>;
    const hashedPassword = bcrypt.hashSync(user.password, 10);
    user.password = hashedPassword;
    users.push(user);
    localStorage.setItem(this.usersKey, JSON.stringify(users));
  }

  login(username: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem(this.usersKey) || '[]') as Array<{ username: string, password: string }>;
    const user = users.find(u => u.username === username);
    if (user && bcrypt.compareSync(password, user.password)) {
      return true;
    }
    return false;
  }

  getUsers() {
    return JSON.parse(localStorage.getItem(this.usersKey) || '[]') as Array<{ username: string, password: string, nombre: string, apellido: string }>;
  }
}

