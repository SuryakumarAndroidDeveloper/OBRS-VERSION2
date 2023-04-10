import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';
import { NgForm, FormBuilder, FormGroup,Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  submitted=false;
  constructor(private formbuilder:FormBuilder,private http:HttpClient,private router:Router,private loginService: LoginserviceService) { }

  ngOnInit() :void{
this.loginForm=this.formbuilder.group({
  userid:['',[Validators.required,Validators.minLength(4)]],
  password:['',[Validators.required,Validators.minLength(6)]]
})

  }
  logInForm(){
    this.submitted = true;
    if(this.loginForm.invalid){
      return false;
    }
    else{
    this.http.get<any>("http://localhost:3000/user").subscribe(res=>{
      const user = res.find((a:any)=>{
        return (a.userid == this.loginForm.value.userid) && (a.password == this.loginForm.value.password);
      })
      if(user){
        alert("Login sucessfully.")
        this.loginService.isUserLoggedIn = true;
        this.loginForm.reset();
        this.router.navigate(['obrs'])
      }

      if(this.loginForm.invalid){
        return false;
      }
      else{
        this.http.get<any>("http://localhost:3000/admin").subscribe(res=>{
          const admin = res.find((a:any)=>{
            return (a.userid == this.loginForm.value.userid) && (a.password == this.loginForm.value.password);
          })
          if(admin){
            alert("Admin Login sucessfully.")
            this.loginService.isAdminLoggedIn = true;
            this.loginForm.reset();
            this.router.navigate(['addbus'])
          }else{
            alert("Invalid Userid&Password")
          }
        },err=>{
          alert("Login Failed!Please try again.")
        })
      }
    })

  }
}
}

