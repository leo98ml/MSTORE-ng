import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarraComponent } from './top/barra/barra.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { ItemComponent } from './item/item.component';
import { ItemContainerComponent } from './item-container/item-container.component';
import { CartComponentComponent } from './top/cart-component/cart-component.component';
import { CartItemComponent } from './top/cart-item/cart-item.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { IMieiOrdiniComponent } from './i-miei-ordini/i-miei-ordini.component';
import { AnagraficaComponent } from './anagrafica/anagrafica.component';
import { PaginaProdottoComponent } from './pagina-prodotto/pagina-prodotto.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    ItemComponent,
    ItemContainerComponent,
    CartComponentComponent,
    CartItemComponent,
    LoginComponent,
    RegisterComponent,
    IMieiOrdiniComponent,
    AnagraficaComponent,
    PaginaProdottoComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
