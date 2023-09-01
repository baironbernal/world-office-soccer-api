import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { CreateComponent } from './pages/create/create.component';
import { AuthGuard } from '../auth/guards/auth.guard';
import { EditComponent } from './pages/edit/edit.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: 'all', component: ListComponent },
      { path: 'create', component:CreateComponent },
      { path: 'edit/:id', component:EditComponent },
      { path: '**', redirectTo: 'all'}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
