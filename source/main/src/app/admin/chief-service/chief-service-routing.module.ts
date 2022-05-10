import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {Page404Component} from "../../authentication/page404/page404.component";
import {AllchiefServiceComponent} from "./allchief-service/allchief-service.component";
import {AddChiefServiceComponent} from "./add-chief-service/add-chief-service.component";

const routes: Routes = [
  {
    path: "allchief-service",
    component: AllchiefServiceComponent,
  },
  {
    path: "add-chief-service",
    component: AddChiefServiceComponent,
  },
  { path: "**", component: Page404Component },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChiefServiceRoutingModule { }
