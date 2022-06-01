import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Component, Inject } from "@angular/core";
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from "@angular/forms";
import {Devices} from "../../devices.model";
import {DevicesService} from "../../devices.service";
@Component({
  selector: "app-form-dialog",
  templateUrl: "./form-dialog.component.html",
  styleUrls: ["./form-dialog.component.sass"],
})
export class FormDialogComponent {
  action: string;
  dialogTitle: string;
  deviceForm: FormGroup;
  devices: Devices;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public devicesService: DevicesService,
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === "edit") {
      this.dialogTitle = data.doctors.name;
      this.devices = data.devices;
    } else {
      this.dialogTitle = "New Device";
      this.devices = new Devices({});
    }
    this.deviceForm = this.createContactForm();
  }
  formControl = new FormControl("", [
    Validators.required,
    Validators.email,
  ]);
  getErrorMessage() {
    return this.formControl.hasError("required")
      ? "Required field"
      : this.formControl.hasError("email")
      ? "Not a valid email"
      : "";
  }
  createContactForm(): FormGroup {
    return this.fb.group({
      id: [this.devices.id],
      idDevice: [this.devices.idDevice],
      flow: [this.devices.flow],
      temperature: [this.devices.temperature],
      fio2: [this.devices.fio2],
      spo2: [this.devices.spo2],
      date : [this.devices.date],
      isConnected: [this.devices.isConnected],
      lastRefreshed: [this.devices.lastRefreshed],
      isWorkingProperly: [this.devices.isWorkingProperly],
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.devicesService.addDevices(this.deviceForm.getRawValue());
  }
}
