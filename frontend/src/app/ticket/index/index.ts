import { Component } from '@angular/core';
import { Ticket } from '../ticket';
import { RouterModule } from '@angular/router';
import { TicketService } from '../ticket-service';

@Component({
  selector: 'app-index',
  imports: [RouterModule],
  templateUrl: './index.html',
  styleUrl: './index.css'
})
export class Index {
  tickets: Ticket[] = [];

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.ticketService.getTickets().subscribe((data:Ticket[]) => {
      this.tickets = data;
    });
  }

  deleteTicket(id: number) {
    if ( confirm("Are you sure to remove this ticket?") ) {
      this.ticketService.deleteTicket(id).subscribe(() => {
        this.ticketService.getTickets().subscribe((data: Ticket[]) => {
          this.tickets = data;
        });
      });
    }
  }

}
