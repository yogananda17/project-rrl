import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientAppoitmentService {
  baseUrl:string ="http://localhost:9090/Patient"
  constructor(public http:HttpClient) { }

  viewAppoitmentStatus(pid:any):Observable<Patient[]> {
    return this.http.get<Patient[]>(this.baseUrl+"/vas/"+pid);
  }
}
