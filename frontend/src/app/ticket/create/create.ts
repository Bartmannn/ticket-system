/**
 * Create Component
 * ----------------
 * Angular component for creating a new ticket.
 *
 * Features:
 * - Provides a form for entering ticket title and description.
 * - Validates that both title and description are provided before submitting.
 * - Submits new ticket data to the backend using TicketService.
 * - Navigates back to the main ticket list after successful creation.
 *
 * Dependencies:
 * - TicketService: Handles API requests for tickets.
 * - Router: Handles navigation.
 *
 * Template: ./create.html
 * Styles:   ./create.css
 */

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TicketService } from '../ticket-service';

@Component({
  selector: 'app-create',
  imports: [RouterModule, FormsModule],
  templateUrl: './create.html',
  styleUrl: './create.css',
})
export class Create {
  title = '';
  description = '';

  error = '';

  constructor(
    private ticketService: TicketService,
    private router: Router,
  ) {}

  submit() {
    if (!this.title || !this.description) {
      this.error = 'Tytuł i opis są wymagane!';
      return;
    }

    const input = {
      id: 0,
      title: this.title,
      description: this.description,
      done: false,
      published_date: 0,
    };

    this.ticketService.createTicket(input).subscribe();
    this.router.navigate(['']);
  }
}
