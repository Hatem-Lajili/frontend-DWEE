import {Component} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {DoctorsService} from "../alldoctors/doctors.service";
import {MatSnackBar} from "@angular/material/snack-bar";
@Component({
  selector: "app-add-doctor",
  templateUrl: "./add-doctor.component.html",
  styleUrls: ["./add-doctor.component.sass"],
})
export class AddDoctorComponent  {
  docForm: FormGroup;
  hide3 = true;
  agree3 = false;
  constructor(private fb: FormBuilder,
              public doctorsService: DoctorsService,
              private snackBar: MatSnackBar) {
    this.docForm = this.fb.group({
      firstname: ["", [Validators.required, Validators.pattern("[a-zA-Z]+")]],
      lastname: ["", [Validators.required, Validators.pattern("[a-zA-Z]+")]],
      gender: ["Gender", [Validators.required]],
      phoneNumber: ["", [Validators.required]],
      password: ["", [Validators.required]],
      conformPassword: ["", [Validators.required]],
      email: [
        "",
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      dateJoining: ["", [Validators.required]],
      role: ["", [Validators.required]]
    });
  }
  onSubmit() {
    console.log("Form Value", this.docForm.value);
    this.doctorsService.addDoctors(this.docForm.value);
    this.showNotification(
      "snackbar-success",
      "Add Record Successfully...!!!",
      "bottom",
      "center"
    );
  }
  onCancel(): void{
    this.docForm.reset();
  }
  showNotification(colorName, text, placementFrom, placementAlign) {
    this.snackBar.open(text, "", {
      duration: 3000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }
}
