import { ValidatorFn, AbstractControl } from '@angular/forms';

export class EmailPhoneValidator {

  static emailPhoneValidator(): ValidatorFn {
    return (control: AbstractControl) => {
      const regExp: RegExp = new RegExp('\\+[0-9]{10,15}|(.*)@[^\.].*\.[a-z]{2,5}$');
      const isValid: boolean = regExp.test(control.value);
      return !isValid ? { emailPhone: { value: control.value } } : null;
    }
  }
}