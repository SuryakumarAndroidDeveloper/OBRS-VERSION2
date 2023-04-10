import { SeatnamePipe } from './pipes/seatname.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ObrsComponent } from './obrs/obrs.component';
import { AboutusComponent } from './Aboutus/Aboutus.component';
import { SelectSeatsComponent } from './select-seats/select-seats.component';
import { AvailableBusesComponent } from './available-buses/available-buses.component';
import { PassengerInfoComponent } from './passenger-info/passenger-info.component';
import { JourneySummaryComponent } from './journey-summary/journey-summary.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddBusComponent } from './add-bus/add-bus.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';




@NgModule({
  declarations: [		
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
      ObrsComponent,
      AboutusComponent,
      SelectSeatsComponent,
      AvailableBusesComponent,
      PassengerInfoComponent,
      PassengerInfoComponent,
      JourneySummaryComponent,
      ViewTicketComponent,
      NotFoundComponent,
      SeatnamePipe,
      AddBusComponent,
      TermsConditionComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,

  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
