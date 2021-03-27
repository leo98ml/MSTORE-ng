import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from "./about-us/about-us.component"
import { AcquistaComponent } from './acquista/acquista.component';
import { AnagraficaComponent } from './anagrafica/anagrafica.component';
import { IMieiOrdiniComponent } from './i-miei-ordini/i-miei-ordini.component';
import { ItemContainerComponent } from "./item-container/item-container.component"
import { LoginComponent } from './login/login.component';
import { PaginaProdottoComponent } from './pagina-prodotto/pagina-prodotto.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{
  path: "about", component: AboutUsComponent
},{
  path: "show", component: PaginaProdottoComponent
},
{
  path: "", component: ItemContainerComponent
},
{
  path: "acquista", component: AcquistaComponent
},
{
  path: "i-miei-ordini", component: IMieiOrdiniComponent
},
{
  path: "register", component: RegisterComponent
},
{
  path: "login", component: LoginComponent
},
{
  path: "listaProdotti", component: ItemContainerComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
