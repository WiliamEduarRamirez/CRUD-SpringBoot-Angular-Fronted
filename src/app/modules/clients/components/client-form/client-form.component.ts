import { Component, OnInit } from '@angular/core';
import { Client } from '../../../../shared/models/client';
import { ClientService } from '../../../../core/services/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
   selector: 'app-client-form',
   templateUrl: './client-form.component.html',
})
export class ClientFormComponent implements OnInit {
   client: Client = new Client();
   constructor(
      private clientService: ClientService,
      private router: Router,
      private activateRouter: ActivatedRoute,
      private toastr: ToastrService
   ) {}

   ngOnInit(): void {
      this.loadClient();
   }

   loadClient(): void {
      this.activateRouter.params.subscribe((params) => {
         const id = params.id;
         if (id) {
            this.clientService.getClient(id).subscribe((response) => {
               this.client = response;
            });
         }
      });
   }
   onSubmitForm(): void {
      if (this.client.id) {
         this.clientService.edit(this.client).subscribe(() => {
            this.toastr.info(
               `El cliente ${this.client.names}, se edito correctamente`,
               'Editar Cliente',
               {
                  timeOut: 6000,
                  closeButton: true,
                  progressBar: true,
               }
            );
            this.router.navigate(['/clients']);
         });
      } else {
         this.clientService.create(this.client).subscribe(() => {
            this.toastr.success(
               `El cliente ${this.client.names}, se agrego correctamente`,
               'Agregar Cliente',
               {
                  timeOut: 6000,
                  closeButton: true,
                  progressBar: true,
               }
            );
            this.router.navigate(['/clients']);
         });
      }
   }
}
