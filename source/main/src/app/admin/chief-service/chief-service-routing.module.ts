import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {Page404Component} from "../../authentication/page404/page404.component";
import {AddChiefServiceComponent} from "./add-chief-service/add-chief-service.component";
import {EditChiefServiceComponent} from "./edit-chief-service/edit-chief-service.component";
import {AllchiefSeviceComponent} from "./allchief-service/allchief-service.component";

const routes: Routes = [
  {
    path: "allchief-service",
    component: AllchiefSeviceComponent,
  },
  {
    path: "add-chief-service",
    component: AddChiefServiceComponent,
  },
  {
    path: "edit-chief-service",
    component: EditChiefServiceComponent,
  },
  { path: "**", component: Page404Component },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChiefServiceRoutingModule { }
