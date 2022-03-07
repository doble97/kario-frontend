import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IsRegisteredGuard } from "src/app/guards/is-registered.guard";
import { LoginComponent } from "./login/login.component";
import { RegistrarComponent } from "./registrar/registrar.component";

const routes: Routes = [
    {path:'login', component:LoginComponent, canActivate:[IsRegisteredGuard]},
    {path:'registrar', component:RegistrarComponent, canActivate:[IsRegisteredGuard]},
    {path:'', redirectTo:'/login', pathMatch:'full'}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class RegistroRoutingModule{

}
