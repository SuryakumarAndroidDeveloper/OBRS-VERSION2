import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private loginService: LoginserviceService) { }

  get isAdminLogin() {
    return this.loginService.isAdminLogin();
  }

  ngOnInit() {
  }

}
