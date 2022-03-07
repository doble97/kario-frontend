import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebaModuloComponent } from './prueba-modulo.component';

const routes: Routes = [{ path: '', component: PruebaModuloComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PruebaModuloRoutingModule { }
