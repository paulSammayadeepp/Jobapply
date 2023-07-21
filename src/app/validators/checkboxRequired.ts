import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function CheckboxRequired(): ValidatorFn {
  return function (control: AbstractControl): ValidationErrors | null {
    // console.log(control);
    const value = control.value;
    if (value.some((val: boolean) => val)) {
      return null;
    } else {
      return { required: true };
    }
  };
}
