import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSortModule} from "@angular/material/sort";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatRadioModule} from "@angular/material/radio";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MaterialFileInputModule} from "ngx-material-file-input";
import {MatTabsModule} from "@angular/material/tabs";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {ComponentsModule} from "../../shared/components/components.module";
import {SharedModule} from "../../shared/shared.module";
import { ChiefServiceRoutingModule } from './chief-service-routing.module';
import { AddChiefServiceComponent } from './add-chief-service/add-chief-service.component';
import { AllchiefSeviceComponent } from "./allchief-service/allchief-service.component";
import { EditChiefServiceComponent } from './edit-chief-service/edit-chief-service.component';
import {FormDialogComponent} from "./allchief-service/dialogs/form-dialog/form-dialog.component";
import {DeleteDialogComponent} from "./allchief-service/dialogs/delete/delete.component";
import { ChiefServiceService } from "./allchief-service/chief-service.service";
import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
  declarations: [
    AddChiefServiceComponent,
    AllchiefSeviceComponent,
    EditChiefServiceComponent,
    FormDialogComponent,
    DeleteDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
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
    ChiefServiceRoutingModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [ChiefServiceService],
})
export class ChiefServiceModule { }
