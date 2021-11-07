import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../../shared/models/client';

@Injectable({
   providedIn: 'root',
})
export class ClientService {
   private urlEndPoint = 'http://localhost:8080/api';
   private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

   constructor(private http: HttpClient) {}

   getClients(): Observable<Client[]> {
      return this.http.get<Client[]>(`${this.urlEndPoint}/clients`);
   }
   edit(client: Client): Observable<Client> {
      return this.http.put<Client>(`${this.urlEndPoint}/clients/${client.id}`, client, {
         headers: this.httpHeaders,
      });
   }
   delete(client: Client): Observable<Client> {
      return this.http.delete<Client>(`${this.urlEndPoint}/clients/${client.id}`, {
         headers: this.httpHeaders,
      });
   }
   create(client: Client): Observable<Client> {
      return this.http.post<Client>(`${this.urlEndPoint}/clients`, client, {
         headers: this.httpHeaders,
      });
   }
   getClient(id: number): Observable<Client> {
      return this.http.get<Client>(`${this.urlEndPoint}/clients/${id}`);
   }
}
