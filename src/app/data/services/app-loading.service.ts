import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppLoadingService {

  loading = false;

  setLoading(value: boolean) {
    this.loading = value;
  }

  constructor() { }
}
