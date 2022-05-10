import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { Page404Component } from "src/app/authentication/page404/page404.component";
import {AlldevicesComponent} from "./alldevices/alldevices.component";
import {AddDevicesComponent} from "./add-devices/add-devices.component";

const routes: Routes = [
  {
    path: "alldevices",
    component: AlldevicesComponent,
  },
  {
    path: "add-devices",
    component: AddDevicesComponent,
  },
  { path: "**", component: Page404Component },
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DevicesRoutingModule { }
