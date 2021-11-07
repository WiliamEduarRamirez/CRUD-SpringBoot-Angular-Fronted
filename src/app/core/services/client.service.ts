import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../../shared/models/client';

@Injectable({
   providedIn: 'root',
})
export class ClientService {
   private urlEndPoint = 'http://localhost:8080/api';

   constructor(private http: HttpClient) {}

   getClients(): Observable<Client[]> {
      return this.http.get<Client[]>(`${this.urlEndPoint}/clients`);
   }
}
