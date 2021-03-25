import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthResource, UserViewModel } from './auth.resource';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject!: BehaviorSubject<UserViewModel>;

  public currentUser: Observable<UserViewModel>;

  constructor(private authResource: AuthResource, public jwtHelper: JwtHelperService, private http: HttpClient, @Inject('BASE_API') private baseApi: string) {
        var user_info = localStorage.getItem('user_info');
        if (typeof user_info != 'string') {
            localStorage.removeItem('user_info');
        }
        this.currentUserSubject = new BehaviorSubject<UserViewModel>(new UserViewModel());

        this.currentUser = this.currentUserSubject.asObservable();
  }
  isLoggedIn = false;

  isAuthenticated(){
    return false;
  }


}
