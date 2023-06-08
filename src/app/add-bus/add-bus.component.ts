import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Confirm } from '../register/Confirm';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css']
})
export class AddBusComponent implements OnInit {

  addBusForm!:FormGroup;
  submitted=false;
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router: Router){

  }
  ngOnInit(): void {
    this.addBusForm=this.formBuilder.group({
    BusName:['',[Validators.required]],
      Departure:['',[Validators.required]],
      BusNumber:['',[Validators.required]],
      Source:['',[Validators.required]],
      Destination:['',[Validators.required]],
      Fare:['',[Validators.required]],
      CoachType:['',[Validators.required]],
      SeatsAvailable:['',[Validators.required]],

    }//,{validator:Confirm('Source','Destination')}
    )

  }

  updatebus() {

    this.submitted = true;
    if(this.addBusForm.invalid){
      return false;
    }else{

    this.http.post<any>("http://localhost:3000/booking",this.addBusForm.value).subscribe(res=>{
      alert("Bus Updated Successfully.");
      this.addBusForm.reset();
     this.router.navigate(['/addbus'])
    },err=>{
      alert("Some error has been Found,please try again.")
    }
    )

  }
}

}

