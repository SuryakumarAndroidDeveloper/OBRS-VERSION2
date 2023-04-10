import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService: LoginserviceService) { }
  get isUserLogin() {
    return this.loginService.isUserLogin();
  }
  get isAdminLogin() {
    return this.loginService.isAdminLogin();
  }

  ngOnInit() {
  }



}
