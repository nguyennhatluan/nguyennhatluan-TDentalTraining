import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({
    username: ['',Validators.required],
    password: ['',Validators.required],
    remember_me: false
  });

  submitted: boolean = false;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.submitted = true;

    if(!this.loginForm.valid){
      return ;
    }
    else{
      this.authService.login(this.loginForm.value).subscribe(data => {
        if (data.succeeded) {
          this.router.navigateByUrl('/');
        } else {
          // alert("Tài khoản hoặc mật khẩu không đúng");
          alert(data.message);
        }
      },error => {
        console.log(error);
      }
      );
    }
  }

  get f(){
    return this.loginForm?.controls;
  }

}
