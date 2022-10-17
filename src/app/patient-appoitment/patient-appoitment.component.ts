import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Patient } from '../patient';

import { PatientAppoitmentService } from '../patient-appoitment.service';


@Component({
  selector: 'app-patient-appoitment',
  templateUrl: './patient-appoitment.component.html',
  styleUrls: ['./patient-appoitment.component.css']
})
export class PatientAppoitmentComponent implements OnInit {
  PatientRef = new FormGroup({
    pid:new FormControl(),
    pname:new FormControl(),
    pgender:new FormControl(),
    page:new FormControl(),
    
    paddress:new FormControl(),
    symptoms:new FormControl(),
    emailid:new FormControl(),
    mobile:new FormControl(),
  })
  patients:Array<Patient>=[];
  constructor(public pas:PatientAppoitmentService) { }
  user:string="";
  ngOnInit(): void {
    let obj = sessionStorage.getItem("user");
    if(obj != null){
      this.user  = obj;
    }
    this.viewAppoitmentStatus();
  }
  viewAppoitmentStatus() {
    let p=this.PatientRef.value;
    this.pas.viewAppoitmentStatus(p.pid).subscribe({
      next:(result:any)=>this.patients=result,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    });
  }
    

  }


