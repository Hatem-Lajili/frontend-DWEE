import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {DepartmentListService} from "../department-list/department-list.service";

@Component({
  selector: "app-add-department",
  templateUrl: "./add-department.component.html",
  styleUrls: ["./add-department.component.sass"],
})
export class AddDepartmentComponent {
  departForm: FormGroup;
  constructor(private fb: FormBuilder,
              private departmentListService: DepartmentListService) {
    this.departForm = this.fb.group({
      numberDepartment: ["", [Validators.required]],
      name: ["", [Validators.required]],
      description: ["", [Validators.required]],
      departmentDate: ["", [Validators.required]],
      departmentHead: ["", [Validators.required]],
      status: ["Active", [Validators.required]],
    });
  }
  onSubmit() {
    console.log("Form Value", this.departForm.value);
    this.departmentListService.addDepartmentList(this.departForm.value);
  }
}
