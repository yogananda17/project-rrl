import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-patient-doctor',
  templateUrl: './patient-doctor.component.html',
  styleUrls: ['./patient-doctor.component.css']
})
export class PatientDoctorComponent implements OnInit {
 
  doctors:Array<Doctor>=[];
  constructor(public ds:DoctorService) { }
  user:string="";
  ngOnInit(): void {
    let obj = sessionStorage.getItem("user");
    if(obj != null){
      this.user  = obj;
    }
    this.viewDoctor();
  }
  viewDoctor() {
    
    this.ds.viewDoctor(this.user).subscribe({
      next:(result:any)=>this.doctors=result,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    });
  }

}

  

