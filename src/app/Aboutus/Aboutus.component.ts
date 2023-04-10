import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-Aboutus',
  templateUrl: './Aboutus.component.html',
  styleUrls: ['./Aboutus.component.css']
})
export class AboutusComponent implements OnInit {


  constructor(private fb:FormBuilder,private UserService:UserService) { }



  ngOnInit() {
  }

}
