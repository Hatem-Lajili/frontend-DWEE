import {Injectable, OnInit} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import { DepartmentList } from "./department-list.model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
@Injectable()
export class DepartmentListService extends UnsubscribeOnDestroyAdapter implements OnInit{
  isTblLoading = true;
  dataChange: BehaviorSubject<DepartmentList[]> = new BehaviorSubject<DepartmentList[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }

  ngOnInit(): void {
  }
  get data(): DepartmentList[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllDepartmentLists(): void {
    this.subs.sink = this.httpClient
      .get<DepartmentList[]>("http://localhost:8989/api/departments")
      .subscribe(
        (data) => {
          this.isTblLoading = false;
          this.dataChange.next(data);
        },
        (error: HttpErrorResponse) => {
          this.isTblLoading = false;
          console.log(error.name + " " + error.message);
        }
      );
  }
  addDepartmentList(departmentList: DepartmentList): void {
    this.dialogData = departmentList;

    this.httpClient.post("http://localhost:8989/api/departments", departmentList).subscribe(data => {
      this.dialogData = departmentList;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });
  }
/*  getDepartmentById( id: any): void {

    this.httpClient.get("http://localhost:8989/api/departments/" + id ).subscribe(data => {
      },
      (err: HttpErrorResponse) => {
        // error code here
      }
    );
  }*/

  updateDepartmentList(departmentList: DepartmentList, id: string): void {
    this.dialogData = departmentList;

    this.httpClient.put("http://localhost:8989/api/departments/" + id, departmentList).subscribe(data => {
      this.dialogData = departmentList;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );
  }
  deleteDepartmentList(id: string): void {
    console.log(id);

    this.httpClient.delete("http://localhost:8989/api/departments/" + id).subscribe(data => {
      console.log(id);
      },
      (err: HttpErrorResponse) => {
         // error code here
      }
    );
  }
}
