import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Doctors } from "./doctors.model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
@Injectable()
export class DoctorsService extends UnsubscribeOnDestroyAdapter {
  isTblLoading = true;
  dataChange: BehaviorSubject<Doctors[]> = new BehaviorSubject<Doctors[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): Doctors[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllDoctorss(): void {
    this.subs.sink = this.httpClient.get<Doctors[]>('http://localhost:8989/api/doctors').subscribe(
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
  addDoctors(doctors: Doctors): void {
    this.dialogData = doctors;

    this.httpClient.post('http://localhost:8989/api/doctors', doctors).subscribe(data => {
        this.dialogData = doctors;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });
  }
  updateDoctors(doctors: Doctors, id: any ): void {
    this.dialogData = doctors;
    this.httpClient.put('http://localhost:8989/api/doctors/' + id, doctors).subscribe(data => {
      this.dialogData = doctors;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );
  }
  deleteDoctors(id: string): void {
    console.log(id);

    this.httpClient.delete('http://localhost:8989/api/doctors/' + id).subscribe(data => {
      console.log(id);
      },
      (err: HttpErrorResponse) => {
         // error code here
      }
    );
  }
}
