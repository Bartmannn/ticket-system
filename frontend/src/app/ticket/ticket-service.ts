import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from './ticket';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private readonly URL = 'http://localhost:8000/api/tickets/';
  private readonly HEADERS = new HttpHeaders({
    Authorization: 'Token simple_secret_token',
  });

  constructor(private http: HttpClient) {}

  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.URL, { headers: this.HEADERS });
  }

  createTicket(data: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(this.URL, data, { headers: this.HEADERS });
  }

  findTicket(id: string): Observable<Ticket> {
    return this.http.get<Ticket>(this.URL + `${id}/`, {
      headers: this.HEADERS,
    });
  }

  updateTicket(id: string, data: Ticket): Observable<Ticket> {
    return this.http.put<Ticket>(this.URL + `${id}/`, data, {
      headers: this.HEADERS,
    });
  }

  deleteTicket(id: number): Observable<any> {
    return this.http.delete<Ticket>(this.URL + `${id}/`, {
      headers: this.HEADERS,
    });
  }
}
