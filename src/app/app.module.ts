import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientComponent } from './patient/patient.component';
import { PatientDoctorComponent } from './patient-doctor/patient-doctor.component';
import { PatientAdmitComponent } from './patient-admit/patient-admit.component';
import { PatientAppoitmentComponent } from './patient-appoitment/patient-appoitment.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    AdminLoginComponent,
    PatientComponent,
    PatientDoctorComponent,
    PatientAdmitComponent,
    PatientAppoitmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
