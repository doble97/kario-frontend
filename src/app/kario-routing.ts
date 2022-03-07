import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IsRegisteredGuard } from "./guards/is-registered.guard";
import { LoginComponent } from "./modulos/registro/login/login.component";
import { RegistrarComponent } from "./modulos/registro/registrar/registrar.component";

const routes:Routes = [
    // {path: 'login', component:LoginComponent},
    // {path: 'registro', component:RegistrarComponent},
    {path: '',loadChildren:()=>import('./modulos/registro/registro.module').then(m=>m.RegistroModule)},
    {path:'registered', loadChildren:()=>import('./modulos/registered-user/registered-user.module').then(m=>m.RegisteredUserModule)}
    //{ path: 'prueba', loadChildren: () => import('./prueba-modulo/prueba-modulo.module').then(m => m.PruebaModuloModule) }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class KarioRoutingModule{

}