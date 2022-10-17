import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  baseUrl:string ="http://localhost:9090/Doctor"
  constructor(public http:HttpClient) { }

  viewDoctor(pid:any):Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.baseUrl+"/vdd/"+pid);
  }
}




