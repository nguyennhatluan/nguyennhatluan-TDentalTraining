import { Component, OnInit } from '@angular/core';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: 'app-partner-customer-cu-dialog',
  templateUrl: './partner-customer-cu-dialog.component.html',
  styleUrls: ['./partner-customer-cu-dialog.component.css']
})
export class PartnerCustomerCuDialogComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit(): void {
  }

  onSave(){

  }

  onCancel(){

  }

}
