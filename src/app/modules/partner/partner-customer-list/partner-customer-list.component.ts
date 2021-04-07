import { Component, OnInit } from '@angular/core';
import { GridDataResult} from '@progress/kendo-angular-grid';
import { CompositeFilterDescriptor } from '@progress/kendo-data-query';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { PartnerPaged, PartnersService } from 'src/app/data/services/partners.service';

@Component({
  selector: 'app-partner-customer-list',
  templateUrl: './partner-customer-list.component.html',
  styleUrls: ['./partner-customer-list.component.css']
})
export class PartnerCustomerListComponent implements OnInit {

  search: string = "";
  searchUpdate = new Subject<string>();
  gridView!: GridDataResult;
  skip = 0;
  pageSize = 20;
  constructor(
    private partnerService: PartnersService
  ) { }

  ngOnInit(): void {
    this.searchUpdate.pipe(
      debounceTime(400),
      distinctUntilChanged()).subscribe(
        () => {

        }
      );
    this.loadDataFromApi();
  }

  generateFilter(){
    // var filter: CompositeFilterDescriptor = {
    //   logic: "and",
    //   filters: [
    //     { field: "Customer", operator: "eq", value: true },
    //   ]
    // };

    // if (this.search) {
    //   filter.filters.push({
    //     logic: "or",
    //     filters: [
    //       { field: "Name", operator: "contains", value: this.search },
    //       { field: "NameNoSign", operator: "contains", value: this.search },
    //       { field: "Ref", operator: "contains", value: this.search },
    //       { field: "Phone", operator: "contains", value: this.search }
    //     ]
    //   });
    // }

   // return filter;
  }

  createItem(){

  }

  importFromExcel(){

  }

  exportPartnerExcelFile(){

  }

  updateFromExcel(){

  }

  setupAutoCodeCustomer(){

  }

  SavePartnerCategories(){

  }

  loadDataFromApi(){
    var val = new PartnerPaged();
    this.partnerService.getPartnerPaged(val).subscribe(result => {
      console.log(result);
      this.gridView = {
        data: result.items,
        total: result.totalItems
      }
    })
  }

  pageChange(event:any){

  }

}
