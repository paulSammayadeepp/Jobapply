import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { checkStringMatch } from 'src/app/validators/matchString';

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
        name: new FormControl('', Validators.required),
        age: new FormControl('', Validators.required),
        phone: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(10),
        ]),
      }),
      stepTwo: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.pattern(
            /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
          ),
        ]),
        confirmPassword: new FormControl('', [
          Validators.required,
          Validators.pattern(
            /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
          ),
        ]),
      },[checkStringMatch("password","confirmPassword")]),
    });
  }

  passwordMatchValidator(frm: FormGroup) {
    return frm.controls['newPassword'].value ===
      frm.controls['repeatNewPassword'].value
      ? null
      : { mismatch: true };
  }

  checkStep1() {
    this.step1 = false;
    console.log(this.signUpForm);
  }

  finalSubmit() {
    console.log(this.signUpForm);
  }
}
