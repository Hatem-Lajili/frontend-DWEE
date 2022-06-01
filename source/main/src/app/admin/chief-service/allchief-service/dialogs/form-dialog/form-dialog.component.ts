import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Component, Inject } from "@angular/core";

import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from "@angular/forms";
import {ChiefService} from "../../chief-service.model";
import {ChiefServiceService} from "../../chief-service.service";
@Component({
  selector: "app-form-dialog",
  templateUrl: "./form-dialog.component.html",
  styleUrls: ["./form-dialog.component.sass"],
})
export class FormDialogComponent {
  action: string;
  dialogTitle: string;
  chiefForm: FormGroup;
  chiefService: ChiefService;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public chiefServiceService: ChiefServiceService,
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === "edit") {
      this.dialogTitle = data.chiefService.name;
      this.chiefService = data.chiefService;
    } else {
      this.dialogTitle = "New Chief Service";
      this.chiefService = new ChiefService({});
    }
    this.chiefForm = this.createContactForm();
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
      id: [this.chiefService.id],
      firstname: [this.chiefService.firstname],
      lastname: [this.chiefService.lastname],
      email: [this.chiefService.email],
      password: [this.chiefService.password],
      conformPassword: [this.chiefService.confirmPassword],
      gender : [this.chiefService.gender],
      dateJoining: [this.chiefService.dateJoining],
      phoneNumber: [this.chiefService.phoneNumber],
    });
  }
  submit() {
    // empty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.chiefServiceService.addChiefs(this.chiefForm.getRawValue());
  }
}
