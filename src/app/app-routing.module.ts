import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';
import { ClientsComponent } from './clients/clients.component';

const routes: Routes = [
   { path: '', redirectTo: '/clients', pathMatch: 'full' },
   { path: 'directives', component: DirectivesComponent },
   { path: 'clients', component: ClientsComponent },
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class AppRoutingModule {}
