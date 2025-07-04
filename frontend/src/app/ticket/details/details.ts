import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TicketService } from '../ticket-service';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-details',
  imports: [RouterModule],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  id = 0;
  title = "";
  description = "";
  done = false;
  time = 0;

  constructor(
    private ticketService: TicketService,
    private route: ActivatedRoute,
    private router : Router,
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params["ticketId"];
    this.ticketService.findTicket(`${this.id}`).subscribe((ticket: Ticket) => {
      this.title = ticket.title;
      this.description = ticket.description;
      this.done = ticket.done;
      this.time = ticket.published_date;
    });
  }

}
