import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { PatientComponent } from './patient/patient.component';

const routes: Routes = [
  {path:"aboutus",component:AdminHomeComponent},
  {path:"login",component:AdminLoginComponent}, 
  {path:"patient",component:PatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
