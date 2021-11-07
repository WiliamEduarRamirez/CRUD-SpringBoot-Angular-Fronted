import { Component, OnInit } from '@angular/core';
import { Client } from '../../shared/models/client';
import { ClientService } from '../../core/services/client.service';

@Component({
   selector: 'app-clients',
   templateUrl: './clients.component.html',
   styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
   clients: Client[] | undefined;
   constructor(private clientService: ClientService) {}

   ngOnInit(): void {
      this.clientService.getClients().subscribe((response) => (this.clients = response));
   }
}
