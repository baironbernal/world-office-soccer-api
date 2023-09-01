import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListComponent } from './pages/list/list.component';
import { CreateComponent } from './pages/create/create.component';

//PrimeNG
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';


//Reactive Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    NavbarComponent,
    ListComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule,
    //PrimeNG
    MenubarModule,
    CardModule,
    InputNumberModule,
    CalendarModule,
    InputTextModule,
    //Forms
    FormsModule,
    ReactiveFormsModule

  ]
})
export class TeamModule { }
