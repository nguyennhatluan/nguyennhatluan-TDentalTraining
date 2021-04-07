import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  public static currentTeamId : any;
  constructor(public auth: AuthService) {
   }

   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let requestOption:any = {};
     
    if(this.auth.getAuthorizationToken()) {
      requestOption.setHeaders = {
        Authorization: `Bearer ${this.auth.getAuthorizationToken()}`
      }
    } 

    request = request.clone(requestOption); 
    return next.handle(request)
  }
}