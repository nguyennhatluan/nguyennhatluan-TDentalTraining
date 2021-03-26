import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';

import { tap, delay, catchError, retry, switchMap, map } from 'rxjs/operators';
import { UserLoginForm } from 'src/app/data/types/users/user-login-form';
import { AuthResource, LoggedInViewModel, LoginViewModel, UserViewModel } from './auth.resource';

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
    const token = localStorage.getItem('access_token');
        if (!token) {
            return false;
        }

        return !this.jwtHelper.isTokenExpired(token);
  }

  login(userLoginForm: UserLoginForm){
    var val = new LoginViewModel();
    val.userName = userLoginForm.username;
    val.password = userLoginForm.password;
    val.rememberMe = userLoginForm.remember_me;

    return this.authResource
            .performLogin(val)
            .pipe(
                map((result: LoggedInViewModel) => {
                    if (result.succeeded) {
                        localStorage.setItem('access_token', result.token);
                        localStorage.setItem('user_info', JSON.stringify(result.user));
                        localStorage.setItem('refresh_token', result.refreshToken);
                        this.isLoggedIn = true;
                        this.currentUserSubject.next(result.user);
                        // get permission
                        this.authResource.getPermission().pipe(map((res: any) => {
                            localStorage.setItem('user_permission', JSON.stringify(res));
                        })).subscribe();
                    }
                    return result;
                })
            );
  }


  logout(){
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_info');
    localStorage.removeItem('user_change_company_vm');
    this.isLoggedIn = false;
    this.currentUserSubject.next(new UserViewModel());
  }
}
