import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {DoctorsService} from "../alldoctors/doctors.service";
@Component({
  selector: "app-edit-doctor",
  templateUrl: "./edit-doctor.component.html",
  styleUrls: ["./edit-doctor.component.sass"],
})
export class EditDoctorComponent {
  docForm: FormGroup;
  formdata = {
    firstname: "Pooja",
    lastname: "Sarma",
    gender: "Female",
    phonenumber: "123456789",
    password: "123",
    conformPassword: "123",
    email: "test@example.com",
    designation: "Sr. Doctor",
    department: "2",
    address: "101, Elanxa, New Yourk",
    dob: "1987-02-17T14:22:18Z",
    education: "M.B.B.S.",
    id: "62769af4a146747dc52c19fd",
  };
  constructor(private fb: FormBuilder,
              public doctorsService: DoctorsService) {
    this.docForm = this.createContactForm();
  }
  onSubmit() {
    console.log("Form Value", this.docForm.value);
    this.doctorsService.updateDoctors(this.docForm.value, "6278c6cffd62ed2ea3ccf013" );
  }
  createContactForm(): FormGroup {
    return this.fb.group({
      firstname: [
        this.formdata.firstname,
        [Validators.required, Validators.pattern("[a-zA-Z]+")],
      ],
      lastname: [this.formdata.lastname],
      gender: [this.formdata.gender, [Validators.required]],
      mobile: [this.formdata.phonenumber, [Validators.required]],
      password: [this.formdata.password],
      conformPassword: [this.formdata.conformPassword],
      email: [
        this.formdata.email,
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      designation: [this.formdata.designation],
      department: [this.formdata.department],
      address: [this.formdata.address],
      dob: [this.formdata.dob, [Validators.required]],
      education: [this.formdata.education],
      chiefServiceId: "626803bca90d9004ebe8d188",
    });
  }
}
