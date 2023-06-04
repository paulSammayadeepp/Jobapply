import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  error!: {};

  constructor(private _authService: AuthService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      user_type: new FormControl('job_seeker', Validators.required),
      login_type: new FormControl('general')
    });
  }

  get emailError() {
    return this.loginForm.get('email');
  }
  get passwordError() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    console.log(this.loginForm);
    if(this.loginForm.invalid){
      alert("check form")
      return;
    } 
    else {
      console.log(this.loginForm.value);
      this._authService.setLogin(this.loginForm.value).subscribe((res) => {
        console.log(res);
        localStorage.setItem('token',res.tokens.accessToken);
        localStorage.setItem('userId', res.user_id)
      })
      
    }
  }
}
