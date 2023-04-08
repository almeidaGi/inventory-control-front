import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './shared/components/list/list.component';
import { RegisterComponent } from './shared/components/register/register.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'home', component: ListComponent },
  { path: 'new', component: RegisterComponent },
  { path: 'edit', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
