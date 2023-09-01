import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { LoginForm } from '../interfaces/login-form.interface';
import { Observable, Subscription, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';

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

  login(formData: LoginForm) {

    if (formData.username === 'cualquiera' && formData.password === 'cualquiera') {
      localStorage.setItem('token-bfbernalgo', 'TOKEN-VALIDO');
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
