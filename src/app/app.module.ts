import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContainerComponent } from './components/container/container.component';
import { RegistroModule } from './modulos/registro/registro.module';
import { KarioRoutingModule } from './kario-routing';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    RegistroModule,
    RouterModule,
    KarioRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
