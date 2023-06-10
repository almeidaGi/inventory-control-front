import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './shared/components/list/list.component';
import { RegisterComponent } from './shared/components/register/register.component';
import { HelpComponent } from './shared/components/help/help.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'home', component: ListComponent },
  { path: 'new', component: RegisterComponent },
  { path: 'edit', component: RegisterComponent },  
  { path: 'help', component: HelpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
