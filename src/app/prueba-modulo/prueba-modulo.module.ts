import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PruebaModuloRoutingModule } from './prueba-modulo-routing.module';
import { PruebaModuloComponent } from './prueba-modulo.component';


@NgModule({
  declarations: [
    PruebaModuloComponent
  ],
  imports: [
    CommonModule,
    PruebaModuloRoutingModule
  ]
})
export class PruebaModuloModule { }
