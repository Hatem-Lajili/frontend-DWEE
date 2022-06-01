import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Component, Inject } from "@angular/core";
import {ChiefServiceService} from "../../chief-service.service";
@Component({
  selector: "app-delete",
  templateUrl: "./delete.component.html",
  styleUrls: ["./delete.component.sass"],
})
export class DeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public chiefServiceService: ChiefServiceService
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  confirmDelete(): void {
    this.chiefServiceService.deleteChiefs(this.data.id);
  }
}
