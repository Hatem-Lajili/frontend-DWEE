import {UnsubscribeOnDestroyAdapter} from "src/app/shared/UnsubscribeOnDestroyAdapter";
import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {Devices} from "./devices.model";

@Injectable()
export class DevicesService extends UnsubscribeOnDestroyAdapter{
  isTblLoading = true;
  dataChange: BehaviorSubject<Devices[]> = new BehaviorSubject<Devices[]>([]);
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): Devices[] {
    return this.dataChange.value;
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
}
