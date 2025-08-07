import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataSharingService } from '../services/data-sharing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  loginSuccess: boolean = false;
  loginError: string = '';

  constructor(private fb: FormBuilder,private dataSharingService: DataSharingService,private router : Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      // Simulate client-side authentication
      if (username === 'sai' && password === 'password') {
        this.loginSuccess = true;
        this.loginError = '';
        //console.log('Login successful!');
        // You could redirect or show a success message here
         this.dataSharingService.setData(username);
         this.router.navigate(['/dashboard']);
      } else {
        this.loginSuccess = false;
        this.loginError = 'Invalid username or password.';
       // console.log('Login failed!');
      }
    } else {
      this.loginError = 'Please fill in all fields.';
    }
  }
}