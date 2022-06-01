import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ChiefServiceService} from "../allchief-service/chief-service.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-add-chief-service',
  templateUrl: './add-chief-service.component.html',
  styleUrls: ['./add-chief-service.component.sass']
})
export class AddChiefServiceComponent  {
  chiefForm: FormGroup;
  hide3 = true;
  agree3 = false;
  constructor(private fb: FormBuilder,
              public chiefServiceService: ChiefServiceService,
              private snackBar: MatSnackBar) {
    this.chiefForm = this.fb.group({
      firstname: ["", [Validators.required, Validators.pattern("[a-zA-Z]+")]],
      lastname: ["", [Validators.required, Validators.pattern("[a-zA-Z]+")]],
      gender: ["", [Validators.required]],
      phoneNumber: ["", [Validators.required]],
      password: ["", [Validators.required]],
      conformPassword: ["", [Validators.required]],
      email: [
        "",
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      dateJoining: ["", [Validators.required]],
    });
  }
  onSubmit() {
    console.log("Form Value", this.chiefForm.value);
    this.chiefServiceService.addChiefs(this.chiefForm.value);
    this.showNotification(
      "snackbar-success",
      "Add Record Successfully...!!!",
      "bottom",
      "center"
    );
  }
  onCancel() {
    this.chiefForm.reset();
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
