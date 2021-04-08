import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllUsersComponent } from './all-users/all-users.component';
import { AuthenticateFormComponent } from './authenticate-form/authenticate-form.component';

const routes: Routes = [
  { path: '', component: AuthenticateFormComponent },
  { path: 'users', component: AllUsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
