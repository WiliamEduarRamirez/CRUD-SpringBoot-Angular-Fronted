import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { DirectivesComponent } from './modules/directives/directives.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientsComponent } from './modules/clients/clients.component';
import { ClientFormComponent } from './modules/clients/components/client-form/client-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      DirectivesComponent,
      ClientsComponent,
      ClientFormComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      BrowserAnimationsModule,
      HttpClientModule,
   ],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
