import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
import {environment} from "../../../../environments/environment";
import {User} from "../../../core/models/user";
@Injectable()
export class DoctorsService extends UnsubscribeOnDestroyAdapter {
  isTblLoading = true;
  dataChange: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): User[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllDoctors(): void {
    this.subs.sink = this.httpClient.get<User[]>(`${environment.apiUrl}users/doctors`).subscribe(
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
  addDoctors(user: User): void {
    this.dialogData = user;

    this.httpClient.post(`${environment.apiUrl}users`, user).subscribe(data => {
        this.dialogData = user;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });
  }
  updateDoctors(user: User, id: any ): void {
    this.dialogData = user;
    this.httpClient.put(`${environment.apiUrl}users/doctors/` + id, user).subscribe(data => {
      this.dialogData = user;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );
  }
  deleteDoctors(id: string): void {
    console.log(id);

    this.httpClient.delete(`${environment.apiUrl}users/doctors/` + id).subscribe(data => {
      console.log(id);
      },
      (err: HttpErrorResponse) => {
         // error code here
      }
    );
  }
}
