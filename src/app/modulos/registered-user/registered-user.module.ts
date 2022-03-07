import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisteredRoutingModule } from './registered-routing';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RegisteredRoutingModule
  ],
  exports:[]
})
export class RegisteredUserModule { }
