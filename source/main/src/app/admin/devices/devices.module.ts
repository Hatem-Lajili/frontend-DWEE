import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";
import { MatSortModule } from "@angular/material/sort";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MaterialFileInputModule } from "ngx-material-file-input";
import { MatTabsModule } from "@angular/material/tabs";
import { ComponentsModule } from "src/app/shared/components/components.module";
import { SharedModule } from "src/app/shared/shared.module";
import {DevicesRoutingModule} from "./devices-routing.module";
import {AddDevicesComponent} from "./add-devices/add-devices.component";
import {AlldevicesComponent} from "./alldevices/alldevices.component";
import {DevicesService} from "./alldevices/devices.service";
import {DeleteDialogComponent} from "./alldevices/dialogs/delete/delete.component";
import {FormDialogComponent} from "./alldevices/dialogs/form-dialog/form-dialog.component";
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [
    AddDevicesComponent,
    AlldevicesComponent,
    DeleteDialogComponent,
    FormDialogComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatSortModule,
    MatToolbarModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MaterialFileInputModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    DevicesRoutingModule,
    ComponentsModule,
    SharedModule,
    MatDialogModule,
  ],
  providers: [DevicesService],
})
export class DevicesModule {}
