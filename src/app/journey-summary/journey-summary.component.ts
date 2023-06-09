import { GenerateTicketService } from './../generate-ticket.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Ticket } from '../interfaces/ticket';

@Component({
  selector: 'app-journey-summary',
  templateUrl: './journey-summary.component.html',
  styleUrls: ['./journey-summary.component.css']
})
export class JourneySummaryComponent implements OnInit {
  ticketId: any;
  ticket: Ticket | undefined;

  constructor(private route: ActivatedRoute,
              private ticketService:GenerateTicketService,
              private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      this.ticketId = params.get('id');
      this.ticket = this.ticketService.getTicketById(this.ticketId);
      if(!this.ticket){
          this.router.navigate(['/notfound']);
      }
    })
  }
}

