/**
 * Edit Component
 * --------------
 * Angular component for editing an existing ticket.
 *
 * Features:
 * - Loads ticket data by ID from the route on initialization.
 * - Uses StateManager to track loading, success, and error states for UI feedback.
 * - Validates that both title and description are provided before submitting.
 * - Submits updated ticket data to the backend using TicketService.
 * - Navigates back to the main ticket list after a successful update.
 *
 * Dependencies:
 * - TicketService: Handles API requests for tickets.
 * - StateManager: Manages loading states.
 * - ActivatedRoute: Retrieves route parameters.
 * - Router: Handles navigation.
 *
 * Template: ./edit.html
 * Styles:   ./edit.css
 */

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TicketService } from '../ticket-service';
import { Ticket } from '../ticket';
import { StateManager } from '../state-manager';

@Component({
  selector: 'app-edit',
  imports: [RouterLink, FormsModule],
  templateUrl: './edit.html',
  styleUrl: './edit.css',
})
export class Edit {
  id = '';
  title = '';
  description = '';
  done = false;
  error = '';

  state: StateManager = new StateManager();

  constructor(
    private ticketService: TicketService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.state.loading();
    this.id = this.route.snapshot.params['ticketId'];
    this.ticketService.findTicket(this.id).subscribe({
      next: (ticket: Ticket) => {
        this.title = ticket.title;
        this.description = ticket.description;
        this.done = ticket.done;
        this.state.setSuccess();
      },
      error: () => {
        this.state.setError();
      },
    });
  }

  submit() {
    if (!this.title || !this.description) {
      this.error = 'Tytuł i opis są wymagane!';
      return;
    }

    const input = {
      id: 0,
      title: this.title,
      description: this.description,
      done: this.done,
      published_date: 0,
    };

    this.ticketService.updateTicket(this.id, input).subscribe();
    this.router.navigate(['']);
  }
}
