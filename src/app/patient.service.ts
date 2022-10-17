import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  baseUrl:string ="http://localhost:9090/patient"
  constructor(public http:HttpClient) { }

  storePatient(patient:any):Observable<string> {
    return this.http.post(this.baseUrl+"/storePatient",patient,{responseType:"text"});
  }

  
  viewBookingStatus():Observable<Patient[]> {
    return this.http.get<Patient[]>(this.baseUrl+"/viewBookingStatus");
  }
}
