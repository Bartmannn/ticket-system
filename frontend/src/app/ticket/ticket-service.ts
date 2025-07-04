import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from './ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private readonly URL = "http://localhost:8000/api/tickets/"

  constructor(private http: HttpClient) {}

  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.URL);
  }

  createTicket(data: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(this.URL, data);
  }

  findTicket(id: string): Observable<Ticket> {
    return this.http.get<Ticket>(this.URL+`${id}/`);
  }

  updateTicket(id: string, data: Ticket): Observable<Ticket> {
    return this.http.put<Ticket>(this.URL+`${id}/`, data);
  }

  deleteTicket(id: number): Observable<any> {
    return this.http.delete<Ticket>(this.URL+`${id}/`);
  }

}
