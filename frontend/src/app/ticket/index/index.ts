/**
 * Index Component
 * ---------------
 * Angular component responsible for displaying the list of tickets and handling ticket deletion.
 *
 * Features:
 * - Fetches and displays all tickets on initialization.
 * - Uses StateManager to track loading, success, and error states for UI feedback.
 * - Allows users to delete a ticket with confirmation; refreshes the ticket list after deletion.
 *
 * Dependencies:
 * - TicketService: Handles API requests for tickets.
 * - StateManager: Manages loading states.
 *
 * Template: ./index.html
 * Styles:   ./index.css
 */

import { Component } from '@angular/core';
import { Ticket } from '../ticket';
import { RouterModule } from '@angular/router';
import { TicketService } from '../ticket-service';
import { StateManager } from '../state-manager';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-index',
  imports: [RouterModule, NgTemplateOutlet],
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
