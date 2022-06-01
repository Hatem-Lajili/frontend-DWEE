import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ChiefServiceService} from "../allchief-service/chief-service.service";

@Component({
  selector: 'app-edit-chief-service',
  templateUrl: './edit-chief-service.component.html',
  styleUrls: ['./edit-chief-service.component.sass']
})
export class EditChiefServiceComponent implements OnInit {

  chiefForm: FormGroup;
  formdata = {
    firstname: "Pooja",
    lastname: "Sarma",
    gender: "Female",
    phoneNumber: "123456789",
    password: "123",
    conformPassword: "123",
    email: "test@example.com",
    designation: "Sr. Doctor",
    department: "2",
    address: "101, Elanxa, New Yourk",
    dateJoining: "1987-02-17T14:22:18Z",
    education: "M.B.B.S.",
    id: "6287ace495c7cc359fcf0a57",
  };
  constructor(private fb: FormBuilder,
              public chiefServiceService: ChiefServiceService) {
    this.chiefForm = this.createContactForm();
  }
  onSubmit() {
    console.log("Form Value", this.chiefForm.value);
    this.chiefServiceService.updateChiefs(this.chiefForm.value, "6287ace495c7cc359fcf0a57" );
  }
  createContactForm(): FormGroup {
    return this.fb.group({
      firstname: [
        this.formdata.firstname,
        [Validators.required, Validators.pattern("[a-zA-Z]+")],
      ],
      lastname: [this.formdata.lastname],
      gender: [this.formdata.gender, [Validators.required]],
      mobile: [this.formdata.phoneNumber, [Validators.required]],
      password: [this.formdata.password],
      conformPassword: [this.formdata.conformPassword],
      email: [
        this.formdata.email,
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      designation: [this.formdata.designation],
      department: [this.formdata.department],
      address: [this.formdata.address],
      dateJoining: [this.formdata.dateJoining],
      education: [this.formdata.education],
      chiefServiceId: "626803bca90d9004ebe8d188",
    });
  }

  ngOnInit(): void {
  }

}
