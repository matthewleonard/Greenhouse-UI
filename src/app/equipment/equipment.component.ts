import { Component, OnInit } from '@angular/core';
import {EquipmentService} from "../shared/services/equipment";

@Component({
  selector: 'equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css'],
  providers: [
    EquipmentService
  ]
})
export class EquipmentComponent implements OnInit {
  result: string;
  error: string;
  constructor(private equipmentService: EquipmentService) { }

  ngOnInit() {
  }
  sendAction(value): void {
    this.equipmentService.equipmentEquipmentIdPost(1, "setValue", value)
      .subscribe(
        result => {
          this.showResult(result);
        },
        error => {
          this.handleError(error);
        }
      );
  }

  showResult(result): void {
    this.result = result.status;
  }
  handleError(error): void {
    this.error = "we got an error "+JSON.stringify(error);
  }
}
