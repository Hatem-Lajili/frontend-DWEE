import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {DoctorsService} from "../alldoctors/doctors.service";
@Component({
  selector: "app-add-doctor",
  templateUrl: "./add-doctor.component.html",
  styleUrls: ["./add-doctor.component.sass"],
})
export class AddDoctorComponent {
  docForm: FormGroup;
  hide3 = true;
  agree3 = false;
  constructor(private fb: FormBuilder,
              public doctorsService: DoctorsService) {
    this.docForm = this.fb.group({
      firstname: ["", [Validators.required, Validators.pattern("[a-zA-Z]+")]],
      lastname: ["", [Validators.required, Validators.pattern("[a-zA-Z]+")]],
      gender: ["", [Validators.required]],
      phonenumber: ["", [Validators.required]],
      password: ["", [Validators.required]],
      conformPassword: ["", [Validators.required]],
      email: [
        "",
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      dob: ["", [Validators.required]],
      chiefServiceId: "626803bca90d9004ebe8d188",
    });
  }
  onSubmit() {
    console.log("Form Value", this.docForm.value);
    this.doctorsService.addDoctors(this.docForm.value);
  }
}
