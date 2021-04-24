import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import { ComboBoxComponent } from '@progress/kendo-angular-dropdowns';
import * as _ from "lodash";
import { debounceTime, switchMap, tap } from 'rxjs/operators';
import { EmployeePaged, EmployeeService, EmployeeSimple } from 'src/app/data/services/employee.service';
import { PartnersService } from 'src/app/data/services/partners.service';
import { PartnerTitle, PartnerTitlePaged, PartnerTitleService } from '../../partner-title/partner-title.service';
@Component({
  selector: 'app-partner-customer-cu-dialog',
  templateUrl: './partner-customer-cu-dialog.component.html',
  styleUrls: ['./partner-customer-cu-dialog.component.css']
})
export class PartnerCustomerCuDialogComponent implements OnInit {
  @ViewChild("consultantCbx", { static: true }) consultantCbx!: ComboBoxComponent;
  formGroup: FormGroup = new FormGroup(
    {}
  );
  id: string = '';
  submitted: boolean = false;
  dayList: number[] = [];
  monthList: number[] = [];
  yearList: number[] = [];
  filteredTitles: PartnerTitle[] = [];
  filteredConsultants: EmployeeSimple[] = [];
  title: string = '';
  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private partnerService: PartnersService,
    private partnerTitleService: PartnerTitleService,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {

    this.formGroup = this.fb.group(
      {
        name: [null,Validators.required],
        gender: "male",
        ref: null,
        medicalHistory: null,
        birthDayStr: '',
        birthMonthStr: '',
        birthYearStr: '',
        street: null,
        city: null,
        district: null,
        ward: null,
        email: null,
        phone: null,
        categories: null,
        source: null,
        referralUserId: null,
        referralUser: null,
        comment: null,
        jobTitle: null,
        customer: null,
        companyId: null,
        dateObj: null,
        title: null,
        consultant: null,
        avatar: null

      }
    )

    setTimeout(() => {
      this.dayList = _.range(1, 32);
      this.monthList = _.range(1, 13);
      this.yearList = _.range(new Date().getFullYear(), 1900, -1);

      if(this.id){
        this.partnerService.getById(this.id).subscribe(result => {
          this.formGroup.patchValue(result);
          this.formGroup.get("dateObj")?.setValue(new Date());
        })
      }
      else{
        this.partnerService.getDefaultDisplay().subscribe(result => {
          this.formGroup.patchValue(result);
        })
      }

      this.loadTitleList();
      this.loadEmployeeList();

      this.consultantCbx?.filterChange
      .asObservable()
      .pipe(
        debounceTime(300),
        tap(() => (this.consultantCbx.loading = true)),
        switchMap((value) => this.searchConsultants(value))
      )
      .subscribe((result) => {
        this.filteredConsultants = result;
        this.consultantCbx.loading = false;
      });
    },);

  }

  get f(){
    return this.formGroup.controls;
  }



  onChangeGender(gender: string){

  }

  onSave(){
    this.submitted = true;
  }

  onCancel(){

  }

  quickCreateTitle(){

  }

  loadTitleList(){
    this.searchTitle().subscribe(result => {
      this.filteredTitles = _.unionBy(this.filteredTitles,result,'id');
    })
  }

  loadEmployeeList(){
    this.searchConsultants().subscribe(result => {
      this.filteredConsultants = _.unionBy(this.filteredConsultants,result,'id');
    })
  }

  searchTitle(q?: string){
    var val = new PartnerTitlePaged();
    val.offset = 0;
    val.limit = 10;
    val.search = q || '';
    return this.partnerTitleService.autocomplete(val);
  }

  searchConsultants(q?: string){
    var val = new EmployeePaged();
    val.offset = 0;
    val.limit = 10;
    val.search = q || '';
    return this.employeeService.autocomplete(val);
  }


}
