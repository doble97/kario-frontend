import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./modulos/registro/login/login.component";
import { RegistrarComponent } from "./modulos/registro/registrar/registrar.component";

const routes:Routes = [
    {path: 'login', component:LoginComponent},
    {path: 'registro', component:RegistrarComponent}
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class KarioRoutingModule{

}