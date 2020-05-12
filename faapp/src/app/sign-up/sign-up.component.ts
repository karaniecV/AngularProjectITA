import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements AfterViewInit, OnInit {

  @ViewChild('form', { static: true }) form: NgForm;

  genders: string[] = ['Male', 'Female', 'Other'];

  getOther: number;

  years: number[] = [];

  days: number[] = [];

  isInvalid = false;

  constructor(private router: Router) { }

  ngOnInit() {
    var i;
    for (i = 0; i < 100; i++)
    this.years.push(2020 - i);
    for (i = 0; i < 31; i++)
    this.days.push(1 + i);
  }

  ngAfterViewInit(): void {
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) {
      return this.isInvalid = true;
    }
    form
    console.log('form', form)
  }
  genderClick(i) {
    this.getOther = i;
    console.log('this.getOther', this.getOther)
  }

  // 

}
