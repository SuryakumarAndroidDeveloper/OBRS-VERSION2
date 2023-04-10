import { NotFoundComponent } from './not-found/not-found.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { JourneySummaryComponent } from './journey-summary/journey-summary.component';
import { PassengerInfoComponent } from './passenger-info/passenger-info.component';
import { AvailableBusesComponent } from './available-buses/available-buses.component';
import { SelectSeatsComponent } from './select-seats/select-seats.component';
import { ObrsComponent } from './obrs/obrs.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './Aboutus/Aboutus.component';
import { AddBusComponent } from './add-bus/add-bus.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'obrs', component: ObrsComponent},
  {path: 'buses/:id', component: SelectSeatsComponent},
  {path: 'availablebuses', component: AvailableBusesComponent},
  {path: 'passengerInfo', component: PassengerInfoComponent},
  {path: 'journeyDetails/:id', component: JourneySummaryComponent},
  {path: 'viewticket/:id', component: ViewTicketComponent},
  {path: 'notfound', component: NotFoundComponent},
  {path: 'addbus', component: AddBusComponent},
  {path: '**', component: NotFoundComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
