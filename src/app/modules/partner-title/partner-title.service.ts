import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class PartnerTitle {
  id: string = '';
  name: string = '';
}

export class PartnerTitleSave {
  name: string = '';
}

export class PartnerTitlePaged {
  offset: number = 0;
  limit: number = 0;
  search: string = '';
}

@Injectable({
  providedIn: 'root'
})
export class PartnerTitleService {
  apiUrl = "api/PartnerTitles";
  constructor(
    private http: HttpClient,
    @Inject("BASE_API") private baseApi: string
  ) { }

  autocomplete(val: PartnerTitlePaged): Observable<PartnerTitle[]> {
    return this.http.post<PartnerTitle[]>(this.baseApi + this.apiUrl + "/autocomplete", val);
  }
}
