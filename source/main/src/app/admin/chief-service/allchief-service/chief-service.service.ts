import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
import {ChiefService} from "./chief-service.model";
import {User} from "../../../core/models/user";
@Injectable()
export class ChiefServiceService extends UnsubscribeOnDestroyAdapter {
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
  getAllChiefs(): void {
    this.subs.sink = this.httpClient.get<User[]>('http://localhost:8989/api/users/chief').subscribe(
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
  addChiefs(chiefService: ChiefService): void {
    this.dialogData = chiefService;

    this.httpClient.post('http://localhost:8989/api/chiefs', chiefService).subscribe(data => {
        this.dialogData = chiefService;
      },
      (err: HttpErrorResponse) => {
        // error code here
      });
  }
  updateChiefs(chiefService: ChiefService, id: any ): void {
    this.dialogData = chiefService;
    this.httpClient.put('http://localhost:8989/api/chiefs/' + id, chiefService).subscribe(data => {
        this.dialogData = chiefService;
      },
      (err: HttpErrorResponse) => {
        // error code here
      }
    );
  }
  deleteChiefs(id: string): void {
    console.log(id);

    this.httpClient.delete('http://localhost:8989/api/chiefs/' + id).subscribe(data => {
        console.log(id);
      },
      (err: HttpErrorResponse) => {
        // error code here
      }
    );
  }
}
