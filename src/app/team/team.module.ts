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
import { ButtonModule } from 'primeng/button';
import { FormComponent } from './components/form/form.component';
import { EditComponent } from './pages/edit/edit.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ListComponent,
    CreateComponent,
    FormComponent,
    EditComponent
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
    ButtonModule,
    //Forms
    FormsModule,
    ReactiveFormsModule

  ]
})
export class TeamModule { }
