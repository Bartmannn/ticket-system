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
