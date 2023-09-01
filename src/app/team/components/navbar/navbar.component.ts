import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private authService:AuthService){}

  items:{label: string, routerLink: string,icon: string }[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Equipos',
        routerLink: "/team/all",
        icon: 'pi pi-fw pi-circle'
    },
    {
          label: 'Crear Equipo',
          routerLink: "/team/create",
          icon: 'pi pi-fw pi-plus'
      }
    ];
  }

  logOut() {
    this.authService.logOut();
  }

}
