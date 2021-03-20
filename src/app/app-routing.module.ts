import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from "./about-us/about-us.component"
import { ItemContainerComponent } from "./item-container/item-container.component"

const routes: Routes = [{
  path: "about", component: AboutUsComponent
},
{
  path: "", component: ItemContainerComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
