import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './modules/directives/directives.component';
import { ClientsComponent } from './modules/clients/clients.component';
import { ClientFormComponent } from './modules/clients/components/client-form/client-form.component';

const routes: Routes = [
   { path: '', redirectTo: '/clients', pathMatch: 'full' },
   { path: 'directives', component: DirectivesComponent },
   { path: 'clients', component: ClientsComponent },
   { path: 'clients/create', component: ClientFormComponent },
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class AppRoutingModule {}
