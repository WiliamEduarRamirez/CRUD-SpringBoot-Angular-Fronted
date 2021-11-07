import { Component, OnInit } from '@angular/core';
import { Client } from '../../../../shared/models/client';

@Component({
   selector: 'app-client-form',
   templateUrl: './client-form.component.html',
})
export class ClientFormComponent implements OnInit {
   client: Client = new Client();
   title = 'Crear Cliente';
   constructor() {}

   ngOnInit(): void {}

   create(): void {
      console.log('entra aqui');
      console.log(this.client);
   }
}
