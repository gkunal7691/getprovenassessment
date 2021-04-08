import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllUsersComponent } from './all-users/all-users.component';
import { AuthGuard } from './auth.guard';
import { AuthenticateFormComponent } from './authenticate-form/authenticate-form.component';

const routes: Routes = [
  { path: '', component: AuthenticateFormComponent },
  { path: 'users', canActivate: [AuthGuard], component: AllUsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
