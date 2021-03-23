import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export class LoginTokenResult{
  access_token: string;
  expires_in: number;
  token_type: string;

  constructor(){
    this.access_token = '';
    this.expires_in = 0;
    this.token_type = '';
  }
}

export class LoginUserInfo {
  name: string;
  given_name: string;
  company_id: string;
  email: string;

  constructor(){
    this.name = '';
    this.given_name = '';
    this.company_id = '';
    this.email = '';
  }
}

export class LoginViewModel {
  userName: string;
  password: string;
  rememberMe: boolean;

  constructor(){
    this.userName = '';
    this.password = '';
    this.rememberMe = false;
  }
}

export class RefreshViewModel {
  accessToken: string;
  refreshToken: string;

  constructor(){
    this.accessToken = '';
    this.refreshToken = '';
  }
}

export class RefreshResponseViewModel {
  accessToken: string;
  refreshToken: string;

  constructor(){
    this.accessToken = '';
    this.refreshToken = '';
  }
}

export class LoggedInViewModel {
  succeeded: boolean;
  message: string;
  token: string;
  refreshToken: string;
  configs: object;
  user: UserViewModel;

  constructor(){
    this.succeeded = false;
    this.message = '';
    this.token = '';
    this.refreshToken = '';
    this.configs = {};
    this.user = new UserViewModel();
  }
}

export class UserViewModel {
  id: string;
  userName: string;
  phone: string;
  email: string;
  name: string;
  avatar: string;

  constructor(){
    this.id = '';
    this.userName = '';
    this.phone = '';
    this.email = '';
    this.name = '';
    this.avatar = '';
  }
}

export class ForgotPasswordViewModel {
  email: string;

  constructor(){
    this.email = '';
  }
}

export class ResetPasswordViewModel {
  email: string;
  password: string;
  confirmPassword: string;
  code: string;

  constructor(){
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
    this.code = '';
  }
}

export class ForgotPasswordResponse {
  success: boolean;
  message: string;

  constructor(){
    this.success = false;
    this.message = '';
  }
}

@Injectable({
  providedIn: 'root'
})

export class AuthResource {
  constructor(private http: HttpClient, @Inject('BASE_API') private baseApi: string) { }
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string = '';
  performLogin(val: LoginViewModel): Observable<LoggedInViewModel> {
      return this.http.post<LoggedInViewModel>(this.baseApi + 'api/Account/Login', val);
  }

  performRefresh(val: RefreshViewModel): Observable<RefreshResponseViewModel> {
      return this.http.post<RefreshResponseViewModel>(this.baseApi + 'api/Account/Refresh', val);
  }

  forgotPassword(val: ForgotPasswordViewModel): Observable<ForgotPasswordResponse> {
      return this.http.post<ForgotPasswordResponse>(this.baseApi + 'api/Account/ForgotPassword', val);
  }

  resetPassword(val: ResetPasswordViewModel) {
      return this.http.post(this.baseApi + 'api/Account/ResetPassword', val);
  }

  changePassword(val:any) {
      return this.http.post(this.baseApi + 'api/Account/ChangePassword', val);
  }

  getGroups() {
      return this.http.get(this.baseApi + 'api/Account/GetGroups');
  }

  logout(): void {
      this.isLoggedIn = false;
  }

  getPermission() {
      return this.http.get(this.baseApi + 'api/Account/GetPermission');
  }
}
