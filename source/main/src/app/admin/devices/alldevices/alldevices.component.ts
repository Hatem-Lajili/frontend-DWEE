import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DevicesService} from "../devices.service";


@Component({
  selector: 'app-alldevices',
  templateUrl: './alldevices.component.html',
  styleUrls: ['./alldevices.component.sass']
})
export class AlldevicesComponent implements OnInit {
  displayedColumns = [
    "idDevice",
    "flow",
    "temperature",
    "spo2",
    "fio2",
    "isConnected",
    "lastRefreshed",
    "isWorkingProperly"
  ];
  constructor(public httpClient: HttpClient,
              public deviceService: DevicesService) {
  }

  ngOnInit(): void {
  }


}
