import { Component, OnInit } from '@angular/core';
import { Client } from '../../shared/models/client';
import { ClientService } from '../../core/services/client.service';
import { validate } from 'codelyzer/walkerFactory/walkerFn';
import { ToastrService } from 'ngx-toastr';

@Component({
   selector: 'app-clients',
   templateUrl: './clients.component.html',
   styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
   clients: Client[] | undefined;
   constructor(private clientService: ClientService, private toastr: ToastrService) {}

   ngOnInit(): void {
      this.list();
   }

   list(): void {
      this.clientService.getClients().subscribe((response) => (this.clients = response));
   }

   delete(client: Client): void {
      this.clientService.delete(client).subscribe(() => {
         this.toastr.error(
            `El cliente ${client.names}, se elimino correctamente`,
            'Elimar Cliente',
            {
               timeOut: 6000,
               closeButton: true,
               progressBar: true,
            }
         );
         /*console.log(res);
         this.clients = this.clients?.filter((x) => x.id !== client.id);*/
         this.list();
      });
   }
}
