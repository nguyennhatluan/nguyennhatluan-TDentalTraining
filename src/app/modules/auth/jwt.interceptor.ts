import { Injectable } from '@angular/core';

import 'rxjs/add/operator/do';
import { AuthService } from './auth.service';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
  } from '@angular/common/http';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http/';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(
    public auth: AuthService,
    private router: Router
  ) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // do stuff with response if you want
        }
      },(err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            // redirect to the login route
            // or show a modal

            this.router.navigate(['auth/login']);

          }
        }
      })
    )
  }
}
