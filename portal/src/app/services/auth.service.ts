// auth.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn: boolean = false;

  constructor() { }

  // Simulate user login with username and password
  login(username: string, password: string): Observable<boolean> {
    // Here you would make an HTTP request to your backend to authenticate the user
    // For simplicity, let's assume username is 'admin' and password is 'password'
    if (username === 'admin' && password === 'password') {
      this.isLoggedIn = true;
      return of(true); // Return true if login is successful
    } else {
      this.isLoggedIn = false;
      return of(false); // Return false if login fails
    }
  }

  // Simulate user logout
  logout(): void {
    this.isLoggedIn = false;
  }

  // Check if user is logged in
  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
