import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  step1 = true;
  signUpForm!: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      stepOne: new FormGroup({
        name: new FormControl(''),
        age: new FormControl(''),
        phone: new FormControl(''),
      }),
    });
  }

  checkStep1() {
    this.step1 = false;
    console.log(this.signUpForm);
    
  }
}
