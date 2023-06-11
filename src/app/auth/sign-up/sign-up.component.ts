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

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  step1 = true;
  signUpForm!: FormGroup;

  constructor(private route:ActivatedRoute,private router:Router) {}

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
      stepTwo: new FormGroup(
        {
          email: new FormControl('', [Validators.required, Validators.email]),
          password: new FormControl('', [
            Validators.required,
         
            Validators.pattern(
              /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
            ),
          ]),
          // confirmPassword: new FormControl('', [
          //   Validators.required,
          //   Validators.pattern(
          //     /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
          //   ),
          // ]),
          gender: new FormControl('', Validators.required),
          postal_code: new FormControl('', Validators.required),
          address: new FormControl('', Validators.required),
        },
        [checkStringMatch('password', 'confirmPassword')]
      ),
    });
  }

  get stepOneName() {
    return this.signUpForm.get('stepOne.phone');
  }
  get stepTwoError() {
    return this.signUpForm.get('stepTwo');
  }

  passwordMatchValidator(frm: FormGroup) {
    return frm.controls['newPassword'].value ===
      frm.controls['repeatNewPassword'].value
      ? null
      : { mismatch: true };
  }

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
    console.log('hi')
    console.log(this.signUpForm.value.stepTwo);
    if(this.signUpForm.controls.stepTwo.valid){
      this.router.navigate(['/home']);
    }else{
      this.signUpForm.controls.stepTwo.markAllAsTouched()
    }
   
  }
}
