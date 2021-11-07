import { Component, OnInit } from '@angular/core';
import { Client } from '../../../../shared/models/client';
import { ClientService } from '../../../../core/services/client.service';
import { Router } from '@angular/router';

@Component({
   selector: 'app-client-form',
   templateUrl: './client-form.component.html',
})
export class ClientFormComponent implements OnInit {
   client: Client = new Client();
   title = 'Crear Cliente';
   constructor(private clientService: ClientService, private router: Router) {}

   ngOnInit(): void {}

   create(): void {
      this.clientService.create(this.client).subscribe((response) => {
         console.log(response);
         this.router.navigate(['/clients']);
      });
   }
}
