import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "dashboard",
    loadChildren: () =>
      import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
  },
  {
    path: "doctors",
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
  { path: "chief-service",
    loadChildren : () =>
      import("./chief-service/chief-service.module").then(
        (m) => m.ChiefServiceModule
      ),
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
