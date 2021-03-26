import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-partner-customer-list',
  templateUrl: './partner-customer-list.component.html',
  styleUrls: ['./partner-customer-list.component.css']
})
export class PartnerCustomerListComponent implements OnInit {


  searchUpdate = new Subject<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
