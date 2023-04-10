import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Confirm } from './Confirm';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //name = 'enjoyer';

  registerForm!:FormGroup;
  submitted=false;
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router: Router){

  }
  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      userid:['',[Validators.required,Validators.minLength(4)]],
      name:['',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      email:['',[Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password:['',[Validators.required,Validators.minLength(6),Validators.pattern(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)]],
      cpassword:['',[Validators.required,Validators.minLength(6)]],
      contactno:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    },{validator:Confirm('password','cpassword')}
    )

  }

  registerUser() {

    this.submitted = true;
    if(this.registerForm.invalid){
      return false;
    }else{

    this.http.post<any>("http://localhost:3000/user",this.registerForm.value).subscribe(res=>{
      alert("Register Successfully.");
      this.registerForm.reset();
      this.router.navigate(['login'])
    },err=>{
      alert("Some error has been Found,please try again.")
    }
    )

  }
}

}
