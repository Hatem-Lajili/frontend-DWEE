import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {Component, Inject, OnInit} from "@angular/core";
import { DepartmentListService } from "../../department-list.service";
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from "@angular/forms";
import { DepartmentList } from "../../department-list.model";
@Component({
  selector: "app-form-dialog",
  templateUrl: "./form-dialog.component.html",
  styleUrls: ["./form-dialog.component.sass"],
})
export class FormDialogComponent {
  action: string;
  dialogTitle: string;
  departmentListForm: FormGroup;
  departmentList: DepartmentList;
  private id: string;

  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public departmentListService: DepartmentListService,
    private fb: FormBuilder,
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === "edit") {
      this.dialogTitle = "Update DepartmentList";
      this.departmentList = data.departmentList;
    } else {
      this.dialogTitle = "New DepartmentList";
      this.departmentList = new DepartmentList({});
    }
    this.departmentListForm = this.createContactForm();
  }
  formControl = new FormControl("", [
    Validators.required,
    // Validators.email,
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
      id: [this.departmentList.id],
      numberDepartment: [this.departmentList.numberDepartment],
      name: [this.departmentList.name],
      description: [this.departmentList.description],
      departmentHead: [this.departmentList.departmentHead],
      departmentDate: [this.departmentList.departmentDate],
      status: [this.departmentList.status],
    });
  }
  submit() {
    this.departmentListService.addDepartmentList( this.departmentListForm.value);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.departmentListService.addDepartmentList(
      this.departmentListForm.getRawValue()
    );
  }

/*  ngOnInit(): void {
      this.httpClient
      .get<DepartmentList>("http://localhost:8989/api/departments/" + this.currentDepartment.id)
      .subscribe(data => {
        this.currentDepartment = data;
        console.log('test', this.currentDepartment);
      });
      console.log('cherguia', this.departmentListForm.value);
  }*/
}
