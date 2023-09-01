import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  items:{label: string, routerLink: string,icon: string }[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Teams',
        routerLink: "/team/all",
        icon: 'pi pi-fw pi-circle'
    },
    {
      label: 'Create Team',
      routerLink: "/team/create",
      icon: 'pi pi-fw pi-plus'
  },
  ];
  }

  logOut() {
    localStorage.removeItem('token-bfbernalgo');
  }

}
