import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmailPhoneValidator } from '../shared/validators/email-phone.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  
  form: FormGroup;

  constructor(private router: Router) { }
  thisYear = (new Date()).getFullYear();
  years = [];
  days = [];
  genders: string[] = ['Male', 'Female', 'Other'];
  getOther: number;
  isInvalid = false;

  get firstName(){
    return this.form.get('firstName');
  }
  get secondName(){
    return this.form.get('secondName');
  }
  get emailPhone(){
    return this.form.get('emailPhone');
  }
  get monthBth(){
    return this.form.get(['dateBthForm', 'monthBth']);
  }
  get dayBth(){
    return this.form.get(['dateBthForm', 'dayBth']);
  }
  get yearBth(){
    return this.form.get(['dateBthForm', 'yearBth']);
  }
  get password(){
    return this.form.get('password');
  }
  get pronoun(){
    return this.form.get('pronoun');
  }


  ngOnInit(): void {
    this._initForm();

    let i;
    for (i = 0; i < 120; i++)
    this.years.push(this.thisYear - i);
    for (i = 0; i < 31; i++)
    this.days.push(1 + i);
  }

  private _initForm(){
    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      secondName: new FormControl('', [Validators.required]),
      emailPhone: new FormControl('', [Validators.required, EmailPhoneValidator.emailPhoneValidator()]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
      gender: new FormControl('', [Validators.required]),
      genderoption: new FormControl('', [Validators.minLength(1)]),
      pronoun: new FormControl('', [Validators.required]),
      dateBthForm: new FormGroup({
        monthBth: new FormControl('', [Validators.required]),
        dayBth: new FormControl('', [Validators.required]),
        yearBth: new FormControl('', [Validators.required]),
      })
    })
  }

  onClickChange(){
    this.router.navigate(['/message'])
  }

  onFormSubmit(form: FormGroup){
    console.log(form)
    if(form.invalid){
      return this.isInvalid = true;
    }

  }
  genderClick(i){
    this.getOther = i;
  }



}
