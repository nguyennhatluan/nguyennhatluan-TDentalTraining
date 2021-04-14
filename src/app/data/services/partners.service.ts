import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PagedResult2 } from 'src/app/data/types/shared/shared';
export class PartnerDisplay{
  id: string = '';
  name: string = '';
  phone: string = '';
  dateCreated?: Date = new Date();
  ref: string = '';
  gender: string = '';
  genderCovertcom: string = '';
  dateOfBirth: string = '';
  street: string = '';
  wardName: string = '';
  districtName: string = '';
  cityName: string = '';
  address: string = '';
  historiesString: string ='';
  birthYear?: number = 1900;
  supplier: boolean = false;
  customer: boolean = false;
  active: boolean = false;
  jobTitle: string = '';
  employee: boolean = false;
  barcode: string = '';
  birthMonth?: number = 1;
  birthDay: number = 1;
  medicalHistory: string = '';
  city: any;
  district: any;
  ward: any;
  sourceId?: string = '';
  source: any;
  referralUserId: string = '';
  referralUser: any;
  titleId?: string = '';
  title: any;
  note: string = '';
  avatar: string = '';
  categories: any;
  histories: any;
  fax: string = '';
  companyId?: string;
  zaloId: string = '';
  date?: Date = new Date();
  displayName: string = '';
  age: string = '';
  consultantId?: string = '';
  consultant: any;
}

export class PartnerPaged {
  offSet: number = 0;
  limit: number = 20;
  search: string = '';
  customer?: boolean = true;
  employee?: boolean = false;
  supplier?: boolean = false;
  tagIds: string[] = [];
  computeCreditDebit: boolean = false;
  active?: boolean = true;
  isBoth?: boolean = false;
}

export class PartnerBasic {
  id: string = '';
  name: string = '';
  displayName: string = '';
  phone: string = '';
  ref: string = '';
  gender: string = '';
  address: string = '';
  street: string = '';
  wardName: string = '';
  districtName: string = '';
  cityName: string = '';
  birthYear?: number;
  debt: number = 0;
  age: number = 1;
  lastAppointmentDate: Date = new Date();
  debit: number = 0;
  credit: number = 0;
  companyName: string = '';
  categories: any;
  dateCreated?: Date = new Date();
  source: any;
  jobTitle: string = '';
  email: string = '';
  comment: string = '';
  birthMonth: number = 1;
  birthDay: number = 1;
  active: boolean = false;
}

@Injectable({
  providedIn: 'root'
})
export class PartnersService {
  apiUrl = 'api/Partners';
  constructor(private http: HttpClient, @Inject('BASE_API') private baseApi: string) { }

  getPartnerPaged(partnerPaged: PartnerPaged):Observable<PagedResult2<PartnerBasic>>{
    var params = new HttpParams()
        .set('offset', partnerPaged.offSet.toString())
        .set('limit', partnerPaged.limit.toString())
        // .set('search',partnerPaged.search.toString())
        // .set('customer',partnerPaged.customer!.toString())
        // .set('employee',partnerPaged.employee!.toString())
        // .set('supplier',partnerPaged.supplier!.toString())
        // //.set('tagIds',partnerPaged.tagIds.toString())
        .set('computeCreditDebit',partnerPaged.computeCreditDebit.toString())
        .set('active',partnerPaged.active!.toString())
        .set('isBoth',partnerPaged.isBoth!.toString());
        // if(partnerPaged.search){
        //   params = params.set('searchNamePhoneRef',partnerPaged.search);

        // }
        return this.http.get<PagedResult2<PartnerBasic>>(this.baseApi+this.apiUrl+"?"+params);
  }

  getDefaultTitle(val: any){
    return this.http.get(this.baseApi + this.apiUrl + '/GetDefaultTitle',{params:new HttpParams({fromObject:val})})
  }

  getDefaultDisplay(val?: any){
    return this.http.post<PartnerDisplay>(this.baseApi + this.apiUrl + '/DefaultGet',val || {});
  }

  getById(id: string){
    return this.http.get<PartnerDisplay>(this.baseApi + this.apiUrl + '/' + id);
  }

  create(val: PartnerDisplay){
    return this.http.post(this.baseApi + this.apiUrl, val);
  }

  update(id: string,val: PartnerDisplay){
    return this.http.put(this.baseApi + this.apiUrl + '/' + id, val);
  }

  delete(id: string){
    return this.http.delete(this.baseApi + this.apiUrl + '/' + id);
  }
}
