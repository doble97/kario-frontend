import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { RegistroRoutingModule } from './registro-routing';


@NgModule({
  declarations: [
    LoginComponent,
    RegistrarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RegistroRoutingModule
  ]
})
export class RegistroModule { }
