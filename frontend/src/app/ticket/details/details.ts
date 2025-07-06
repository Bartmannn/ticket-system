/**
 * Details Component
 * -----------------
 * Angular component for displaying the details of a single ticket.
 *
 * Features:
 * - Loads ticket data by ID from the route on initialization.
 * - Uses StateManager to track loading, success, and error states for UI feedback.
 * - Displays ticket title, description, status, and published date.
 *
 * Dependencies:
 * - TicketService: Handles API requests for tickets.
 * - StateManager: Manages loading states.
 * - ActivatedRoute: Retrieves route parameters.
 *
 * Template: ./details.html
 * Styles:   ./details.css
 */

import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TicketService } from '../ticket-service';
import { Ticket } from '../ticket';
import { StateManager } from '../state-manager';

@Component({
  selector: 'app-details',
  imports: [RouterModule],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  id = 0;
  title = '';
  description = '';
  done = false;
  time = 0;

  state: StateManager = new StateManager();

  constructor(
    private ticketService: TicketService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.state.loading();
    this.id = this.route.snapshot.params['ticketId'];

    this.ticketService.findTicket(`${this.id}`).subscribe({
      next: (ticket: Ticket) => {
        this.title = ticket.title;
        this.description = ticket.description;
        this.done = ticket.done;
        this.time = ticket.published_date;

        this.state.setSuccess();
      },
      error: () => {
        this.state.setError();
      },
    });
  }
}
