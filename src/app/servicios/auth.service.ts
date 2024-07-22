import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8105';  // Cambia esto si tu API está en otra URL

  constructor() {}

  login(username: string, password: string): Observable<any> {
    return from(fetch(`${this.apiUrl}/account/${username}`)
      .then(response => response.json()));
  }

  register(user: User): Observable<any> {
    return from(fetch(`${this.apiUrl}/user/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error en el servicio de registro:', error);
      throw error;
    }));
  }

  updateUser(user: User): Observable<any> {
    return from(fetch(`${this.apiUrl}/user/update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(response => response.json()));
  }

  deleteUser(username: string): Observable<any> {
    return from(fetch(`${this.apiUrl}/user/delete/${username}`)
      .then(response => response.json()));
  }

  getCurrentUser(): Observable<User> {
    const currentUser: User = JSON.parse(localStorage.getItem('currentUser') || '{}');
    return new Observable(observer => {
      observer.next(currentUser);
      observer.complete();
    });
  }

  getUsers(): Observable<User[]> {
    return from(fetch(`${this.apiUrl}/users`)
      .then(response => response.json()));
  }

  updateUsers(users: User[]): Observable<any> {
    return from(fetch(`${this.apiUrl}/users/update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(users)
    }).then(response => response.json()));
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }
}

