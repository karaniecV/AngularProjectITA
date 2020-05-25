import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { emailPhoneValidator } from './emailPhone.validator';

@Directive({
  selector: '[appEmailPhoneValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: EmailPhoneValidatorDirective, multi: true}]
})
export class EmailPhoneValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl){
    return emailPhoneValidator()(control);

  }

}
