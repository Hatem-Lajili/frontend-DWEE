import {formatDate} from "@angular/common";

export class Devices {

  id: string;
  idDevice: string;
  flow: number;
  temperature: number;
  fio2: number;
  spo2: number;
  date: string;
  isConnected: boolean;
  lastRefreshed: Date;
  isWorkingProperly: boolean;
  constructor(devices) {
    {
      this.id = devices.id ;
      this.idDevice = devices.idDevice || "";
      this.flow = devices.flow || "";
      this.temperature = devices.temperature || "";
      this.date = formatDate(new Date(), "yyyy-MM-dd", "en") || "";
      this.fio2 = devices.fio2 || "";
      this.spo2 = devices.spo2 || "";
      this.isConnected = devices.isConnected || "";
      this.lastRefreshed = devices.lastRefreshed || "";
      this.isWorkingProperly = devices.isWorkingProperly || "";
    }
}
}
