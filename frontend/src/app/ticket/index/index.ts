import { Component } from '@angular/core';
import { Ticket } from '../ticket';
import { RouterModule } from '@angular/router';
import { TicketService } from '../ticket-service';
import { StateManager } from '../state-manager';

@Component({
  selector: 'app-index',
  imports: [RouterModule],
  templateUrl: './index.html',
  styleUrl: './index.css',
})
export class Index {
  tickets: Ticket[] = [];
  state: StateManager = new StateManager();

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.state.loading();
    this.ticketService.getTickets().subscribe({
      next: (data: Ticket[]) => {
        this.state.setSuccess();
        this.tickets = data;
      },
      error: () => {
        this.state.setError();
      },
    });
  }

  deleteTicket(id: number) {
    if (confirm('Are you sure to remove this ticket?')) {
      this.ticketService.deleteTicket(id).subscribe(() => {
        this.ticketService.getTickets().subscribe((data: Ticket[]) => {
          this.tickets = data;
        });
      });
    }
  }
}
