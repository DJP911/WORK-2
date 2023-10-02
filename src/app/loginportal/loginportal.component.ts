import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {AuthService}  from '../auth.service';
@Component({
  selector: 'app-loginportal',
  templateUrl: './loginportal.component.html',
  styleUrls: ['./loginportal.component.css']
})
export class LoginportalComponent implements OnInit {

  loginForm!: FormGroup;
  

  constructor(private fb: FormBuilder, private authservice: AuthService ,private router:Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
  
  onSubmit() {
    const emailControl = this.loginForm.get('email');
    const passwordControl = this.loginForm.get('password');
  
    if (emailControl?.valid && passwordControl?.valid) {
      const email = emailControl.value;
      const password = passwordControl.value;
  
      this.authservice.login(email, password).subscribe(
        (response: any) => {
          console.log('Login response:', response);
          localStorage.setItem('user', JSON.stringify(response.data));
          this.router.navigate(['/task']);
        },
        error => {
          console.error('Login error:', error);
        }
      );
    }
  }
}