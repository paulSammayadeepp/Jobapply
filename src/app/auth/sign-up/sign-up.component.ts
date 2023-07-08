import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { checkStringMatch } from 'src/app/validators/matchString';
import { ActivatedRoute, Router } from '@angular/router';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  step1 = true;
  signUpForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private signupservice: SignupService
  ) {}

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      stepOne: new FormGroup({
        name: new FormControl('', Validators.required),
        age: new FormControl('', Validators.required),
        phone_number: new FormControl('', [
          Validators.required,
          Validators.min(1000000000),
          Validators.max(9999999999),
        ]),
      }),
      stepTwo: new FormGroup(
        {
          email: new FormControl('', [Validators.required, Validators.email]),
          password: new FormControl('', [
            Validators.required,

            Validators.pattern(
              /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
            ),
          ]),
          confirmPassword: new FormControl('', [Validators.required]),
          gender: new FormControl('', Validators.required),
          postal_code: new FormControl('', Validators.required),
          address: new FormControl('', Validators.required),
        },
        [checkStringMatch('password', 'confirmPassword')]
      ),
    });
  }

  get stepOneName() {
    return this.signUpForm.get('stepOne.phone_number');
  }
  get stepTwoError() {
    return this.signUpForm.get('stepTwo');
  }

  // passwordMatchValidator(frm: FormGroup) {
  //   return frm.controls['newPassword'].value ===
  //     frm.controls['repeatNewPassword'].value
  //     ? null
  //     : { mismatch: true };
  // }

  checkStep1() {
    // console.log('step-one', typeof this.stepOneName?.value);
    if (this.signUpForm.controls.stepOne.valid) {
      this.step1 = false;
    } else {
      this.signUpForm.controls.stepOne.markAllAsTouched();
    }
    console.log(this.signUpForm.value.stepOne);
  }

  finalSubmit() {
    let userobj={...this.signUpForm.value.stepOne,...this.signUpForm.value.stepTwo};
    console.log(this.signUpForm);
    if (this.signUpForm.controls.stepTwo.valid) {
      this.signupservice.setsignup(userobj).subscribe((res) => {
        console.log(res);
        
        this.router.navigate(['/home']);
      });
    } else {
      this.signUpForm.controls.stepTwo.markAllAsTouched();
    }
  }
}
