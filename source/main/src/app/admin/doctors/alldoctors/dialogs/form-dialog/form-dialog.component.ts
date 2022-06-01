import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Component, Inject } from "@angular/core";
import { DoctorsService } from "../../doctors.service";
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from "@angular/forms";
import { Doctors } from "../../doctors.model";
@Component({
  selector: "app-form-dialog",
  templateUrl: "./form-dialog.component.html",
  styleUrls: ["./form-dialog.component.sass"],
})
export class FormDialogComponent {
  action: string;
  dialogTitle: string;
  doctorsForm: FormGroup;
  doctors: Doctors;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public doctorsService: DoctorsService,
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === "edit") {
      this.dialogTitle = data.doctors.name;
      this.doctors = data.doctors;
    } else {
      this.dialogTitle = "New Doctors";
      this.doctors = new Doctors({});
    }
    this.doctorsForm = this.createContactForm();
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
      id: [this.doctors.id],
      firstname: [this.doctors.firstname],
      lastname: [this.doctors.lastname],
      email: [this.doctors.email],
      password: [this.doctors.password],
      conformPassword: [this.doctors.confirmPassword],
      gender : [this.doctors.gender],
      dateJoining: [this.doctors.dateJoining],
      phoneNumber: [this.doctors.phoneNumber],
    });
  }
  submit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.doctorsService.addDoctors(this.doctorsForm.getRawValue());
  }
}
