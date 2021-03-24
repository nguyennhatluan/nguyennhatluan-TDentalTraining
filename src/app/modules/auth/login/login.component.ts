import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  login(){
    this.submitted = true;
  }

  get f(){
    return this.loginForm?.controls;
  }

}
