import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from "@angular/router";

const routes: Routes = [
  {
    path: "chiefs",
    loadChildren: () =>
      import("./doctors/doctors.module").then((m) => m.DoctorsModule),
  },
  {
    path: "departments",
    loadChildren: () =>
      import("./departments/departments.module").then(
        (m) => m.DepartmentsModule
      ),
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
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ChiefsRoutingModule { }
