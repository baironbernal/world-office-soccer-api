import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { LoginForm } from '../interfaces/login-form.interface';
import { Observable, Subscription, of, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  suscription: Subscription= new Subscription;


  validateToken(): Observable<boolean> {
    const token = localStorage.getItem('token-bfbernalgo');

    if (token) {
      return of(true);
    }
    return of(false);

  }

  rand() {
    return Math.random().toString(36).substr(2);
  }

  createRandomToken() {
    return this.rand() + this.rand() + this.rand() + "-" + this.rand() + this.rand() + this.rand(); // to make it longer
  }

  login(formData: LoginForm) {

    if (formData.username === 'cualquiera' && formData.password === 'cualquiera') {
      localStorage.setItem('token-bfbernalgo', this.createRandomToken());
      return true;
    }

    return false;
  }

  logOut() {
    localStorage.removeItem('token-bfbernalgo');
    return this.router.navigateByUrl('/auth/login');
  }

  ngOnDestroy(){
    this.suscription.unsubscribe();
  }

}
