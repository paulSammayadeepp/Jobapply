import { AbstractControl } from '@angular/forms';

export function checkStringMatch(str: string, toCheckWith: string) {
  return function (form: AbstractControl) {
    const checkStr = form.get(str);
    const checkWith = form.get(toCheckWith);

    if (checkWith?.errors) {
      return null;
    }
    if (checkStr?.value === checkWith?.value) {
      return null;
    }
    return { misMatchError: true };
  };
}


//     if (checkWith?.errors && !checkWith?.errors.misMatchError) {
//       return;
//     }
//     if (checkStr?.value === checkWith?.value) {
//       return checkWith?.setErrors({ misMatchError: true });
//     } else {
//       return checkWith?.setErrors(null);
//     }
//   };

// export function checkStringMatch(controlName: string, matchingControlName: string) {
//     return (formGroup: FormGroup) => {
//         const control = formGroup.controls[controlName];
//         const matchingControl = formGroup.controls[matchingControlName];
//         if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
//             return;
//         }
//         if (control.value !== matchingControl.value) {
//             matchingControl.setErrors({ confirmedValidator: true });
//         } else {
//             matchingControl.setErrors(null);
//         }
//     }
// }
