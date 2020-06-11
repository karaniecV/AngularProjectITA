import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from './../shared/config';
import { User } from '../shared/models/user.model';
import { AuthService } from '../shared/services/auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements AfterViewInit, OnInit {

  @ViewChild('form', { static: true }) formSign: NgForm;

  genders: string[] = ['Male', 'Female', 'Other'];

  monthOpt: object[] = [{ value: 1, label: 'Jan' }, { value: 2, label: 'Feb' }, { value: 3, label: 'Mar' },
  { value: 4, label: 'Apr' }, { value: 5, label: 'May' }, { value: 6, label: 'Jun' },
  { value: 7, label: 'Jul' }, { value: 8, label: 'Aug' }, { value: 9, label: 'Sep' },
  { value: 10, label: 'Oct' }, { value: 11, label: 'Nov' }, { value: 12, label: 'Dec' }];

  getOther: number;

  years: number[] = [];

  days: number[] = [];

  isInvalid = false;

  thisYear = (new Date()).getFullYear();

  // user: User;

  // user = this.authService.userId


  constructor(private http: HttpClient, public authService: AuthService) { }

  ngOnInit() {
    var i;
    for (i = 0; i < 100; i++)
      this.years.push(this.thisYear - i);
    for (i = 0; i < 31; i++)
      this.days.push(1 + i);
  }

  ngAfterViewInit(): void {
  }

  onFormSubmit(formSign: NgForm) {
    if (formSign.invalid) {
      return this.isInvalid = true;
    }
    this.authService.onSignUp(formSign.value.emailPhone, formSign.value.password)
      .subscribe((data) => {
        // console.log('sign', data)
        if (data) {
          this.authService.postSignUser(formSign.value);

          // this.http.post(`${CONFIG.server}/${this.authService.userId}/signUser.json`, formSign.value)
          // .subscribe(
          // (data) => {
          // data.constructor.name;
          // console.log('data.constructor.name;', data.constructor.name)
          //  this.user.id = data[0]
          //  console.log('this.user.id', this.user.id)
          // console.log('form', data)
          //  }
          //  )
        }
      },
        (error) => {
          formSign.resetForm();
        })
  }

  genderClick(i) {
    this.getOther = i;
  }


}
