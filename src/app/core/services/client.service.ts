import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Client } from '../../shared/models/client';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
   providedIn: 'root',
})
export class ClientService {
   private urlEndPoint = 'http://localhost:8080/api';
   private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

   constructor(private http: HttpClient, private router: Router) {}

   getClients(): Observable<Client[]> {
      return this.http.get<Client[]>(`${this.urlEndPoint}/clients`).pipe(
         catchError((e) => {
            return throwError(e);
         })
      );
   }
   edit(client: Client): Observable<Client> {
      return this.http
         .put<Client>(`${this.urlEndPoint}/clients/${client.id}`, client, {
            headers: this.httpHeaders,
         })
         .pipe(
            catchError((e) => {
               return throwError(e);
            })
         );
   }
   delete(client: Client): Observable<Client> {
      return this.http
         .delete<Client>(`${this.urlEndPoint}/clients/${client.id}`, {
            headers: this.httpHeaders,
         })
         .pipe(
            catchError((e) => {
               return throwError(e);
            })
         );
   }
   create(client: Client): Observable<Client> {
      return this.http
         .post<Client>(`${this.urlEndPoint}/clients`, client, {
            headers: this.httpHeaders,
         })
         .pipe(
            catchError((e) => {
               return throwError(e);
            })
         );
   }
   getClient(id: number): Observable<Client> {
      return this.http.get<Client>(`${this.urlEndPoint}/clients/${id}`).pipe(
         catchError((e) => {
            this.router.navigate(['/clients']);
            return throwError(e);
         })
      );
   }
}
