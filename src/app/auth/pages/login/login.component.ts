import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal  from 'sweetalert2';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../styles/auth-shared.scss']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) { }

  public formSubmitted = false;

  loginForm = this.fb.group({
    username: ['cualquiera', [Validators.required]],
    password: ['cualquiera', [Validators.required,]],
  }, {
    validators: () => {}
  });


  login() {
    this.formSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    if (this.authService.login(this.loginForm.value)) {
      return this.router.navigateByUrl('/team/all')
    }

    return Swal.fire('Error', 'Contraseña o username inválidos!', 'error');

  }

}
