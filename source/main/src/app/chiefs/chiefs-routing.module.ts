import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: "chiefs",
    loadChildren: () =>
      import("../chiefs/doctors/doctors.module").then((m) => m.DoctorsModule),
  },
  {
    path: "devices",
    loadChildren: () =>
      import("./devices/devices.module").then(
        (m) => m.DevicesModule
      ),
  },

];


@NgModule({
  imports: [
    RouterModule.forChild(routes)  ],
  exports: [RouterModule]
})
export class ChiefsRoutingModule { }
