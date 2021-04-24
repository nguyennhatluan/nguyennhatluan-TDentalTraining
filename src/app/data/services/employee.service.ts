import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class EmployeeSimple {
  id: string = '';
  name: string = '';
}

export class EmployeePaged {
  offset: number = 0;
  limit: number = 10;
  search: string = '';
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient, @Inject('BASE_API') private baseApi: string) { }
  private urlApi = "/api/Employees";

  autocomplete(val:any): Observable<EmployeeSimple[]>{
    return this.http.post<EmployeeSimple[]>(this.baseApi + this.urlApi + '/autocomplete',val);
  }

}
