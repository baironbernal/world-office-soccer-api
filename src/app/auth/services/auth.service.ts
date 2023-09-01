import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { LoginForm } from '../interfaces/login-form.interface';
import { Observable, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  validateToken(): Observable<boolean> {
    const token = localStorage.getItem('token-bfbernalgo');

    if (token) {
      return of(true);
    }
    return of(false);

  }

  login(formData: LoginForm) {
    return this.http.post(environment.base_url + '/login', formData)
        .pipe(
          tap((resp: any) => {
            console.log(resp)
            localStorage.setItem('token-bfbernalgo', resp.token)
          })
        );
  }

  logOut() {
    localStorage.removeItem('token-bfbernalgo');
    this.router.navigateByUrl('/auth/login');
  }

}
