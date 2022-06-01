import {UnsubscribeOnDestroyAdapter} from "src/app/shared/UnsubscribeOnDestroyAdapter";
import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {Devices} from "./devices.model";

@Injectable()
export class DevicesService extends UnsubscribeOnDestroyAdapter{
  isTblLoading = true;
  dataChange: BehaviorSubject<Devices[]> = new BehaviorSubject<Devices[]>([]);
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): Devices[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllDevices(): void {
    this.subs.sink = this.httpClient.get<Devices[]>('http://localhost:8989/api/devices').subscribe(
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
  addDevices(devices: Devices): void {
    this.dialogData = devices;

    this.httpClient.post('http://localhost:8989/api/devices', devices).subscribe(data => {
        this.dialogData = devices;
      },
      (err: HttpErrorResponse) => {
        // error code here
      });
  }
  updateDevices(devices: Devices, id: any ): void {
    this.dialogData = devices;
    this.httpClient.put('http://localhost:8989/api/devices/' + id, devices).subscribe(data => {
        this.dialogData = devices;
      },
      (err: HttpErrorResponse) => {
        // error code here
      }
    );
  }
  deleteDevices(id: string): void {
    console.log(id);

    this.httpClient.delete('http://localhost:8989/api/devices/' + id).subscribe(data => {
        console.log(id);
      },
      (err: HttpErrorResponse) => {
        // error code here
      }
    );
  }
}
